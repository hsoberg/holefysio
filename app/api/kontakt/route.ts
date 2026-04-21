import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60_000;

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot check
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  // Minimal validation
  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const service = String(body.service ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  }
  if (!phone || phone.length > 30) {
    return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const fromAddress =
    process.env.RESEND_FROM ?? "Hole Fysioterapi <noreply@holefysioterapi.no>";
  const toAddress =
    process.env.KONTAKT_TO ?? "post@holefysioterapi.no";

  if (resendKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: fromAddress,
        to: toAddress,
        replyTo: email || undefined,
        subject: `Ny henvendelse fra ${name}`,
        text: `
Ny henvendelse fra nettsiden

Navn: ${name}
Telefon: ${phone}
E-post: ${email || "ikke oppgitt"}
Tjeneste: ${service || "ikke valgt"}
Melding: ${message || "ingen melding"}

---
Sendt fra holefysioterapi.no
        `.trim(),
      });
    } catch (err) {
      console.error("Resend error:", err);
      // Fall through to webhook
    }
  }

  const webhookUrl = process.env.KONTAKT_WEBHOOK;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, service, message }),
      });
    } catch (err) {
      console.error("Webhook error:", err);
    }
  }

  return NextResponse.json({ ok: true });
}

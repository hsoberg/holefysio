import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hole Fysioterapi og Helseklinikk — Vik Torg, Røyse";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FBF7F1",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#4B6A44",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#4B6A44",
            }}
          >
            Vik Torg, Røyse · Hole kommune
          </span>
        </div>
        <div
          style={{
            fontSize: "60px",
            fontWeight: 600,
            color: "#1F1B16",
            lineHeight: 1.05,
            maxWidth: "700px",
            marginBottom: "32px",
          }}
        >
          Hole Fysioterapi og Helseklinikk
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "#5A524A",
            maxWidth: "600px",
            lineHeight: 1.5,
          }}
        >
          Fysioterapi · Manuellterapi · Ultralyd · Psykomotorisk · Psykolog
        </div>
        <div
          style={{
            position: "absolute",
            right: "80px",
            bottom: "80px",
            fontSize: "18px",
            color: "#C97B5A",
            fontWeight: 600,
          }}
        >
          Ring 32 15 98 20
        </div>
      </div>
    ),
    { ...size }
  );
}

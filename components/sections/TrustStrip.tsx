import { Container } from "@/components/ui/Container";

const items = [
  { icon: "🏥", label: "HELFO-godkjent" },
  { icon: "💳", label: "Frikortordning" },
  { icon: "🤝", label: "Samarbeider med fastleger" },
  { icon: "📋", label: "NFF-medlem" },
  { icon: "📍", label: "Vik Torg, Røyse" },
];

export function TrustStrip() {
  return (
    <div className="bg-moss-50 border-y border-moss-100 py-5">
      <Container>
        <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 text-sm font-medium text-moss-700"
            >
              <span aria-hidden="true" className="text-base">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TherapistsGrid } from "@/components/sections/TherapistsGrid";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessLd } from "@/lib/jsonld";

const homeFaq = [
  {
    q: "Hva tilbyr Hole Fysioterapi og Helseklinikk?",
    a: "Vi tilbyr fysioterapi, manuellterapi, ultralyddiagnostikk for muskel og skjelett, psykomotorisk fysioterapi og psykologtjeneste — alt under ett tak på Vik Torg, Røyse.",
  },
  {
    q: "Kan jeg bruke frikort hos dere?",
    a: "Ja. Frikortordningen kan benyttes hos fysioterapeut, manuellterapeut og psykomotorisk fysioterapeut.",
  },
  {
    q: "Trenger jeg henvisning fra fastlege?",
    a: "Nei. Du kan bestille time direkte uten henvisning hos alle våre terapeuter. Manuellterapeuten kan i tillegg sykmelde og henvise til MR.",
  },
  {
    q: "Hva er avbestillingsreglene?",
    a: "Timer må avbestilles senest kl 15 dagen før for å unngå faktura.",
  },
  {
    q: "Hvor er klinikken lokalisert?",
    a: "Vi holder til på Vik Torg, 3530 Røyse i Hole kommune. Gratis parkering tilgjengelig.",
  },
  {
    q: "Hvem kan dere hjelpe?",
    a: "Vi hjelper voksne med muskel- og skjelettsmerter, idrettsutøvere etter skade, eldre i rehabilitering, og alle som ønsker forebyggende behandling.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd json={localBusinessLd()} />
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <CtaBanner
        heading="Trenger du hjelp? Vi er her for deg."
        body="Ring oss direkte eller bruk kontaktskjemaet. Vi finner en time som passer — uten lang ventetid."
      />
      <TherapistsGrid />
      <ReviewsSection />
      <FaqSection items={homeFaq} heading="Vanlige spørsmål om klinikken" />
      <LocationSection />
      <CtaBanner
        heading="Ta kontakt i dag — og kom raskere i gang"
        body="Ikke vent til plagene blir større. Vi er lokale, vi er tilgjengelige, og vi er her for deg."
        variant="terra"
      />
    </>
  );
}

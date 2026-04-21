export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  nav: string;
  title: string;
  h1: string;
  metaDescription: string;
  leadAnswer: string;
  intro: string;
  benefits: string[];
  audiences: string[];
  faq: ServiceFaq[];
  keywords: string[];
  therapistSlugs: string[];
  icon: string;
  priority: number;
}

export const services: Service[] = [
  {
    slug: "fysioterapi",
    nav: "Fysioterapi",
    title: "Fysioterapi",
    h1: "Fysioterapi på Røyse — tilpasset deg og din hverdag",
    metaDescription:
      "Fysioterapi i Hole kommune på Vik Torg, Røyse. Behandling av rygg, nakke, skuldre og rehabilitering. Frikortordning kan benyttes. Ring 32 15 98 20.",
    leadAnswer:
      "Fysioterapi hos Hole Fysioterapi på Vik Torg, Røyse hjelper deg med muskel- og leddplager, rehabilitering og smertebehandling. Frikortordning kan benyttes.",
    intro:
      "Generell fysioterapi for plager i muskler, ledd og nervesystem — tilpasset din hverdag, enten du har vondt i ryggen, skal tilbake etter en operasjon eller vil forebygge nye skader. Frikortordning kan benyttes.",
    benefits: [
      "Individuell vurdering og behandlingsplan",
      "Smertebehandling og rehabilitering",
      "Treningsterapi og oppfølgning",
      "Frikortordning godtas",
      "Tett samarbeid med fastleger og spesialister",
    ],
    audiences: [
      "Voksne med rygg-, nakke- og skuldersmerter",
      "Eldre som ønsker styrke og balanse",
      "Personer i rehabilitering etter operasjon eller skade",
      "Deg som vil forebygge fremtidige plager",
    ],
    faq: [
      {
        q: "Trenger jeg henvisning fra fastlege for å gå til fysioterapeut?",
        a: "Nei, du kan bestille time direkte uten henvisning. Frikortordningen kan likevel benyttes.",
      },
      {
        q: "Hva koster fysioterapi?",
        a: "Prisen følger Norsk Fysioterapeutforbunds takster. Har du frikort betaler du ingenting. Kontakt oss for gjeldende priser.",
      },
      {
        q: "Hva kan fysioterapeuten hjelpe meg med?",
        a: "Rygg, nakke, skuldre, knær, hofter, rehabilitering etter operasjon, smertebehandling, treningsveiledning og forebyggende behandling.",
      },
      {
        q: "Hvordan bestiller jeg time?",
        a: "Ring 32 15 98 20 eller send e-post til post@holefysioterapi.no. Du kan også bruke kontaktskjemaet på nettsiden.",
      },
      {
        q: "Tilbyr dere fysioterapi til eldre?",
        a: "Ja, vi har god erfaring med rehabilitering og forebyggende behandling for eldre pasienter, inkludert balanse- og styrketrening.",
      },
    ],
    keywords: ["fysioterapi Røyse", "fysioterapeut Hole", "frikort fysioterapi Ringerike", "ryggbehandling Hole"],
    therapistSlugs: ["liv-baera-grotnes"],
    icon: "🏃",
    priority: 1,
  },
  {
    slug: "manuellterapi",
    nav: "Manuellterapi",
    title: "Manuellterapi",
    h1: "Manuellterapeut i Hole — uten krav om henvisning",
    metaDescription:
      "Manuellterapi i Hole kommune. Ingen henvisning nødvendig. Alexander Jacobsen kan sykmelde og henvise til MR. Ring 32 15 98 20.",
    leadAnswer:
      "Du trenger ikke henvisning fra fastlege for å gå til manuellterapeut i Norge. Manuellterapeut Alexander Jacobsen ved Hole Fysioterapi kan henvise til MR, spesialist og har sykmeldingsrett.",
    intro:
      "Manuellterapi er spesialisert fysioterapi for muskel- og skjelettplager. Du trenger ikke henvisning fra fastlege, og manuellterapeuten kan henvise direkte til MR, spesialist og sykmelde ved behov — så du slipper omveien og kommer raskere i gang.",
    benefits: [
      "Ingen henvisning fra fastlege nødvendig",
      "Primærkontakt for muskel- og skjelettlidelser",
      "Sykmeldingsrett og MR-henvisning",
      "Spesialisert undersøkelse og behandling",
      "Ultralyddiagnostikk tilgjengelig",
    ],
    audiences: [
      "Voksne med langvarige rygg-, nakke- og skuldersmerter",
      "Idrettsutøvere med akutte eller kroniske skader",
      "Deg som vil unngå lang ventetid hos fastlege",
      "Arbeidstakere med yrkesrelaterte plager",
    ],
    faq: [
      {
        q: "Trenger jeg henvisning til manuellterapeut?",
        a: "Nei. I Norge kan du gå direkte til manuellterapeut uten henvisning fra fastlege.",
      },
      {
        q: "Kan manuellterapeuten sykmelde meg?",
        a: "Ja, manuellterapeut Alexander Jacobsen har sykmeldingsrett og kan sykmelde deg ved behov.",
      },
      {
        q: "Kan manuellterapeuten henvise til MR?",
        a: "Ja, manuellterapeuten kan henvise direkte til MR og spesialist uten at du trenger å gå via fastlegen.",
      },
      {
        q: "Hva er forskjellen på fysioterapeut og manuellterapeut?",
        a: "Manuellterapeuten har videreutdanning i spesialisert undersøkelse og behandling av muskel-skjelettsystemet, og har utvidede rettigheter som sykmeldingsrett og MR-henvisning.",
      },
      {
        q: "Gjelder frikortordningen hos manuellterapeut?",
        a: "Ja, frikortordningen kan benyttes hos manuellterapeuten.",
      },
    ],
    keywords: [
      "manuellterapeut Hole",
      "manuellterapi uten henvisning Ringerike",
      "manuellterapeut Røyse",
      "MR-henvisning manuellterapeut",
    ],
    therapistSlugs: ["alexander-jacobsen"],
    icon: "🤲",
    priority: 2,
  },
  {
    slug: "ultralyddiagnostikk",
    nav: "Ultralyddiagnostikk",
    title: "Ultralyddiagnostikk muskel/skjelett",
    h1: "Ultralyddiagnostikk på Røyse — rask avklaring samme dag",
    metaDescription:
      "Ultralyddiagnostikk for muskel og skjelett i Hole kommune. Ingen stråling, rask avklaring. Ring 32 15 98 20.",
    leadAnswer:
      "Ultralyddiagnostikk for muskel og skjelett ved Hole Fysioterapi gir deg rask avklaring av skulder, kne, hofte og akilles uten ventetid og uten stråling.",
    intro:
      "Med ultralyd ser vi raskt hva som faktisk skjer i skulder, kne, hofte eller akilles — uten stråling og uten ventetid. Du får en tydelig vurdering og en konkret plan samme dag, slik at behandlingen treffer riktig fra første time.",
    benefits: [
      "Ingen stråling — trygt og skånsomt",
      "Rask avklaring uten lang ventetid",
      "Konkret diagnose og behandlingsplan",
      "Utføres av manuellterapeut med spesialkompetanse",
      "Kan kombineres med behandling samme dag",
    ],
    audiences: [
      "Idrettsutøvere med skader i skulder, kne eller akilles",
      "Deg som trenger rask avklaring fremfor lang ventetid",
      "Pasienter med kroniske smerter som trenger diagnose",
      "Alle som vil unngå stråling fra røntgen",
    ],
    faq: [
      {
        q: "Hva kan ultralyd av muskel og skjelett avdekke?",
        a: "Ultralyd kan vise betennelse, senerupturer, bursitt, leddhinneplager og muskelskader i skulder, kne, hofte, akilles og andre ledd.",
      },
      {
        q: "Er ultralyd skadelig?",
        a: "Nei, diagnostisk ultralyd bruker lydbølger og er helt strålingsfritt — trygt for alle, inkludert gravide.",
      },
      {
        q: "Trenger jeg henvisning for ultralydundersøkelse?",
        a: "Nei, du kan bestille direkte. Manuellterapeuten kan ta deg direkte inn til undersøkelse.",
      },
      {
        q: "Hva er forskjellen på ultralyd og MR?",
        a: "Ultralyd er raskere, billigere og uten ventetid. MR gir dypere bilder av bein og interne strukturer. Manuellterapeuten veileder deg til riktig undersøkelse.",
      },
    ],
    keywords: [
      "ultralyd muskel skjelett Ringerike",
      "diagnostisk ultralyd skulder Hønefoss",
      "ultralyddiagnostikk Hole",
    ],
    therapistSlugs: ["alexander-jacobsen"],
    icon: "🔬",
    priority: 3,
  },
  {
    slug: "psykomotorisk-fysioterapi",
    nav: "Psykomotorisk",
    title: "Psykomotorisk fysioterapi",
    h1: "Psykomotorisk fysioterapi i Ringerike — for kropp og sinn",
    metaDescription:
      "Psykomotorisk fysioterapi i Hole kommune. Behandling av stressplager, langvarige spenninger og psykosomatiske lidelser. Frikortordning. Ring 32 15 98 20.",
    leadAnswer:
      "Psykomotorisk fysioterapi ved Hole Fysioterapi hjelper deg med langvarige spenninger, stressplager og psykosomatiske lidelser. Frikortordning kan benyttes.",
    intro:
      "For deg som kjenner at kroppen bærer mer enn den burde — langvarig spenning, stressplager, utmattelse, svimmelhet eller pustevansker. Vi jobber rolig og sammenhengende med pust, kropp og følelser, slik at du igjen får kjenne at kroppen er din.",
    benefits: [
      "Individuell behandling tilpasset din situasjon",
      "Gruppetrening tilgjengelig",
      "Frikortordning godtas",
      "Helhetlig tilnærming til kropp og psyke",
      "Erfaring med langvarige og sammensatte plager",
    ],
    audiences: [
      "Deg med langvarig spenning i kroppen",
      "Personer med stressrelaterte plager",
      "Deg som sliter med utmattelse og pustevansker",
      "Pasienter med psykosomatiske lidelser",
    ],
    faq: [
      {
        q: "Hva er psykomotorisk fysioterapi?",
        a: "Psykomotorisk fysioterapi er en behandlingsform som arbeider med samspillet mellom kropp, pust og følelser — særlig ved langvarige eller sammensatte plager.",
      },
      {
        q: "For hvem passer psykomotorisk fysioterapi?",
        a: "For deg som har langvarige spenninger, stressplager, utmattelse, svimmelhet, pustevansker eller psykosomatiske lidelser som ikke bedres av vanlig fysioterapi.",
      },
      {
        q: "Tilbyr dere gruppetrening?",
        a: "Ja, Gundelie Nuven tilbyr både individuell behandling og gruppetrening.",
      },
      {
        q: "Gjelder frikortordningen?",
        a: "Ja, frikortordningen kan benyttes hos psykomotorisk fysioterapeut.",
      },
      {
        q: "Trenger jeg henvisning?",
        a: "Du kan komme uten henvisning, men en henvisning fra fastlegen kan gi deg trygderefusjon fra første time.",
      },
    ],
    keywords: [
      "psykomotorisk fysioterapeut Ringerike",
      "stressbehandling Hole",
      "langvarige smerter Røyse",
      "psykomotorisk fysioterapi Hønefoss",
    ],
    therapistSlugs: ["gundelie-nuven"],
    icon: "🌿",
    priority: 4,
  },
  {
    slug: "psykolog",
    nav: "Psykolog",
    title: "Psykolog",
    h1: "Psykolog i Hole kommune — hjelp nær der du bor",
    metaDescription:
      "Psykolog på Vik Torg, Røyse. Behandling av angst, depresjon, livskriser og utmattelse. Lokalt, tverrfaglig samarbeid. Ring 32 15 98 20.",
    leadAnswer:
      "Psykolog Ellen Marie Gjerdalen Røed ved Hole Fysioterapi tilbyr psykologtjeneste lokalt på Vik Torg for behandling av angst, depresjon, livskriser og utmattelse — i nært samarbeid med klinikkens fysioterapeuter.",
    intro:
      "Psykologtjeneste lokalt på Vik Torg for deg som står i en vanskelig periode — uro, nedstemthet, livskriser eller utmattelse. Du møter en psykolog som jobber tett med fysioterapeutene våre, slik at kropp og psyke ses i sammenheng.",
    benefits: [
      "Lokalt tilbud i Hole — slipper lang reisevei",
      "Tverrfaglig samarbeid med klinikkens terapeuter",
      "Bredt spekter av psykiske helseplager",
      "Individuelle samtaler",
      "Helhetlig behandling av kropp og psyke",
    ],
    audiences: [
      "Deg som opplever angst eller nedstemthet",
      "Personer i livskrise eller sorg",
      "Deg med utmattelse og psykisk belastning",
      "Pasienter som trenger kombinert kropp/psyke-behandling",
    ],
    faq: [
      {
        q: "Trenger jeg henvisning for å gå til psykolog?",
        a: "Du kan ta kontakt direkte. Henvisning fra fastlege kan gi rett til refusjon fra HELFO.",
      },
      {
        q: "Hva hjelper psykologen med?",
        a: "Angst, depresjon, søvnproblemer, livskriser, sorg, stressreaksjoner, selvfølelse og andre psykiske helseplager.",
      },
      {
        q: "Hva er fordelen med psykolog på en helseklinikk?",
        a: "Du får helhetlig behandling der psykologen samarbeider direkte med fysioterapeutene — kropp og psyke ses i sammenheng.",
      },
      {
        q: "Hvor lang tid tar behandlingen?",
        a: "Det varierer etter behov. Psykologen vurderer og lager en individuell plan etter første samtale.",
      },
    ],
    keywords: ["psykolog Hole kommune", "psykolog Røyse", "psykolog Ringerike", "psykologhjelp Hønefoss"],
    therapistSlugs: ["ellen-marie-gjerdalen-roed"],
    icon: "💬",
    priority: 5,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

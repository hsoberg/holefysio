export interface Therapist {
  slug: string;
  name: string;
  role: string;
  shortRole: string;
  phone: { display: string; tel: string };
  bio: string;
  credentials: string[];
  specialties: string[];
  photo: string;
  metaDescription: string;
  serviceSlug: string[];
}

export const therapists: Therapist[] = [
  {
    slug: "liv-baera-grotnes",
    name: "Liv Bæra Grøtnes",
    role: "Fysioterapeut",
    shortRole: "Fysioterapeut",
    phone: { display: "48 12 53 27", tel: "+4748125327" },
    bio: "Liv jobber med generell fysioterapi, rehabilitering, smertebehandling og treningsterapi. Hun har bred erfaring med å hjelpe pasienter tilbake til et aktivt liv etter skader og operasjoner, og legger vekt på individuelt tilpassede behandlingsplaner og tett oppfølgning.",
    credentials: ["Fysioterapeut", "Autorisert av Helsedirektoratet"],
    specialties: ["Generell fysioterapi", "Rehabilitering", "Smertebehandling", "Treningsterapi"],
    photo: "/liv.avif",
    metaDescription:
      "Liv Bæra Grøtnes er fysioterapeut ved Hole Fysioterapi på Vik Torg, Røyse. Spesialist på rehabilitering, smertebehandling og treningsterapi.",
    serviceSlug: ["fysioterapi"],
  },
  {
    slug: "alexander-jacobsen",
    name: "Alexander Jacobsen",
    role: "Manuellterapeut",
    shortRole: "Manuellterapeut",
    phone: { display: "48 12 93 43", tel: "+4748129343" },
    bio: "Alexander er manuellterapeut med spesialistkompetanse på muskel- og skjelettsystemet. Som primærkontakt kan han undersøke, diagnostisere og behandle uten at du trenger å gå via fastlegen. Han har sykmeldingsrett og kan henvise til MR og spesialist. I tillegg utfører han ultralyddiagnostikk for muskel og skjelett.",
    credentials: [
      "Manuellterapeut",
      "Autorisert av Helsedirektoratet",
      "Sykmeldingsrett",
      "Kompetanse i ultralyddiagnostikk",
    ],
    specialties: ["Manuellterapi", "Ultralyddiagnostikk muskel/skjelett", "MR-henvisning", "Primærkontakt"],
    photo: "/ALEXANDER.avif",
    metaDescription:
      "Alexander Jacobsen er manuellterapeut ved Hole Fysioterapi, Røyse. Primærkontakt for muskel-skjelett, sykmeldingsrett og ultralyddiagnostikk.",
    serviceSlug: ["manuellterapi", "ultralyddiagnostikk"],
  },
  {
    slug: "gundelie-nuven",
    name: "Gundelie Nuven",
    role: "Psykomotorisk fysioterapeut",
    shortRole: "Psykomotorisk",
    phone: { display: "47 76 79 40", tel: "+4747767940" },
    bio: "Gundelie er psykomotorisk fysioterapeut og jobber med samspillet mellom kropp, pust og følelser. Hun tilbyr både individuelle behandlinger og gruppetrening, og har erfaring med langvarige og sammensatte plager som stressrelaterte lidelser, utmattelse og psykosomatiske tilstander.",
    credentials: ["Psykomotorisk fysioterapeut", "Autorisert av Helsedirektoratet"],
    specialties: ["Psykomotorisk fysioterapi", "Gruppetrening", "Stressmestring", "Langvarige smerter"],
    photo: "/Gundelie.avif",
    metaDescription:
      "Gundelie Nuven er psykomotorisk fysioterapeut ved Hole Fysioterapi. Tilbyr individuell behandling og gruppetrening for stress, utmattelse og langvarige plager.",
    serviceSlug: ["psykomotorisk-fysioterapi"],
  },
  {
    slug: "ellen-marie-gjerdalen-roed",
    name: "Ellen Marie Gjerdalen Røed",
    role: "Psykolog",
    shortRole: "Psykolog",
    phone: { display: "32 15 98 20", tel: "+4732159820" },
    bio: "Ellen Marie er psykolog og behandler et bredt spekter av psykiske helseplager, inkludert angst, depresjon, livskriser og utmattelse. Hos Hole Fysioterapi jobber hun tett med de andre terapeutene, slik at kropp og psyke ses i sammenheng og du får helhetlig behandling.",
    credentials: ["Psykolog", "Autorisert av Helsedirektoratet"],
    specialties: ["Angst og depresjon", "Livskriser og sorg", "Utmattelse", "Psykosomatiske lidelser"],
    photo: "/EllenM_R.avif",
    metaDescription:
      "Ellen Marie Gjerdalen Røed er psykolog ved Hole Fysioterapi på Vik Torg, Røyse. Behandler angst, depresjon, livskriser og utmattelse i tverrfaglig samarbeid.",
    serviceSlug: ["psykolog"],
  },
];

export function getTherapist(slug: string): Therapist | undefined {
  return therapists.find((t) => t.slug === slug);
}

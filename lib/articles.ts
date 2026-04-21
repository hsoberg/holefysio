export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  authorSlug: string;
  authorName: string;
  tags: string[];
  readingTime: number;
}

export const articles: ArticleMeta[] = [
  {
    slug: "trenger-jeg-henvisning-til-manuellterapeut",
    title: "Trenger jeg henvisning til manuellterapeut?",
    description:
      "I Norge kan du gå direkte til manuellterapeut uten henvisning fra fastlegen. Les hva manuellterapeuten kan hjelpe med og hva det koster.",
    datePublished: "2024-10-01",
    authorSlug: "alexander-jacobsen",
    authorName: "Alexander Jacobsen",
    tags: ["manuellterapi", "henvisning", "praktisk"],
    readingTime: 5,
  },
  {
    slug: "hva-koster-fysioterapi-med-frikort",
    title: "Hva koster fysioterapi med frikort?",
    description:
      "Forklaring av frikortordningen og hva du faktisk betaler hos fysioterapeut, manuellterapeut og psykomotorisk fysioterapeut.",
    datePublished: "2024-10-08",
    authorSlug: "liv-baera-grotnes",
    authorName: "Liv Bæra Grøtnes",
    tags: ["frikort", "priser", "praktisk"],
    readingTime: 4,
  },
  {
    slug: "hvor-lang-tid-tar-rehab-etter-frossen-skulder",
    title: "Hvor lang tid tar rehabilitering etter frossen skulder?",
    description:
      "Frossen skulder (adhesiv kapsulitt) kan ta måneder å behandle. Her forklarer vi forløpet og hva fysioterapi og manuellterapi kan bidra med.",
    datePublished: "2024-10-15",
    authorSlug: "alexander-jacobsen",
    authorName: "Alexander Jacobsen",
    tags: ["skulder", "rehabilitering", "manuellterapi"],
    readingTime: 7,
  },
  {
    slug: "psykomotorisk-fysioterapi-for-hvem",
    title: "Psykomotorisk fysioterapi — for hvem og hva hjelper det?",
    description:
      "Psykomotorisk fysioterapi er for deg med langvarige spenninger, stressplager og psykosomatiske lidelser. Les hvem det passer for og hva du kan forvente.",
    datePublished: "2024-10-22",
    authorSlug: "gundelie-nuven",
    authorName: "Gundelie Nuven",
    tags: ["psykomotorisk", "stress", "langvarige plager"],
    readingTime: 6,
  },
  {
    slug: "ultralyd-versus-mr-naar-velge-hva",
    title: "Ultralyd eller MR — når skal du velge hva?",
    description:
      "Hva er forskjellen på ultralyd og MR for muskel-skjelettdiagnostikk? Her er en enkel oversikt som hjelper deg forstå hvilken undersøkelse som passer best.",
    datePublished: "2024-11-05",
    authorSlug: "alexander-jacobsen",
    authorName: "Alexander Jacobsen",
    tags: ["ultralyd", "MR", "diagnostikk"],
    readingTime: 5,
  },
  {
    slug: "fysioterapi-for-eldre-hjemme-i-hole-kommune",
    title: "Fysioterapi for eldre i Hole kommune — hva tilbys?",
    description:
      "Eldre i Hole, Røyse og Ringerike kan få fysioterapi for styrke, balanse og rehabilitering lokalt. Les om tilbudet ved Hole Fysioterapi på Vik Torg.",
    datePublished: "2024-11-12",
    authorSlug: "liv-baera-grotnes",
    authorName: "Liv Bæra Grøtnes",
    tags: ["eldre", "rehabilitering", "Hole kommune"],
    readingTime: 5,
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug);
}

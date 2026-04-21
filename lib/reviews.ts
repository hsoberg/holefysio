export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: "Google";
}

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Anne-Lise H.",
    rating: 5,
    text: "Veldig profesjonell og hyggelig klinikk. Alexander er dyktig og grundig — fikk rask avklaring på skuldersmertene mine og en god behandlingsplan. Anbefales!",
    date: "2024-09-15",
    source: "Google",
  },
  {
    id: "r2",
    author: "Thomas B.",
    rating: 5,
    text: "Fant endelig en manuellterapeut som virkelig lytter. Slapp å vente uker hos fastlegen — kom direkte hit og fikk hjelp med ryggen. Topp service.",
    date: "2024-08-20",
    source: "Google",
  },
  {
    id: "r3",
    author: "Marit K.",
    rating: 5,
    text: "Liv er en fantastisk fysioterapeut. Grundig, tålmodig og engasjert. Har gått her i rehabilitering etter hofteoperasjon og er svært fornøyd med fremgangen.",
    date: "2024-07-11",
    source: "Google",
  },
  {
    id: "r4",
    author: "Per Ø.",
    rating: 5,
    text: "Gundelie hjalp meg med langvarig stress og spenninger i kroppen. Et rolig og trygt sted med dyktige fagfolk. Merker stor forskjell.",
    date: "2024-06-03",
    source: "Google",
  },
  {
    id: "r5",
    author: "Silje R.",
    rating: 5,
    text: "Tverrfaglig og helhetlig tilnærming som jeg ikke har opplevd andre steder. Psykologen og fysioterapeuten snakker godt sammen. Anbefaler!",
    date: "2024-05-18",
    source: "Google",
  },
];

export const aggregateRating = {
  ratingValue: 5.0,
  reviewCount: reviews.length,
  bestRating: 5,
  worstRating: 1,
};

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hole Fysioterapi og Helseklinikk",
    short_name: "Hole Fysioterapi",
    description: "Tverrfaglig helseklinikk på Vik Torg, Røyse",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF7F1",
    theme_color: "#4B6A44",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}

export const site = {
  name: "Hole Fysioterapi og Helseklinikk",
  shortName: "Hole Fysioterapi",
  url: "https://www.holefysioterapi.no",
  phone: {
    display: "32 15 98 20",
    tel: "+4732159820",
  },
  email: "post@holefysioterapi.no",
  address: {
    street: "Vik Torg",
    zip: "3530",
    city: "Røyse",
    region: "Buskerud",
    country: "Norge",
    countryCode: "NO",
  },
  geo: {
    latitude: 60.0858,
    longitude: 10.2441,
  },
  hours: [
    { dayOfWeek: "Monday", opens: "08:00", closes: "16:00" },
    { dayOfWeek: "Tuesday", opens: "08:00", closes: "16:00" },
    { dayOfWeek: "Wednesday", opens: "08:00", closes: "16:00" },
    { dayOfWeek: "Thursday", opens: "08:00", closes: "16:00" },
    { dayOfWeek: "Friday", opens: "08:00", closes: "15:00" },
  ],
  hoursDisplay: "Man–tor 08–16, fre 08–15",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Hole+Fysioterapi+og+Helseklinikk,+Vik+Torg,+3530+R%C3%B8yse&hl=no&z=16&output=embed",
  googleMapsUrl:
    "https://maps.google.com/?q=Hole+Fysioterapi+og+Helseklinikk,+Vik+Torg,+3530+R%C3%B8yse",
  gbpUrl: "https://www.google.com/maps/place/Hole+Fysioterapi+og+Helseklinikk",
  founded: 2010,
} as const;

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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.0!2d10.2441!3d60.0858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDA1JzA4LjkiTiAxMMKwMTQnMzguOCJF!5e0!3m2!1sno!2sno!4v1700000000000!5m2!1sno!2sno",
  googleMapsUrl: "https://maps.google.com/?q=Vik+Torg,+3530+Røyse",
  gbpUrl: "https://www.google.com/maps/place/Hole+Fysioterapi+og+Helseklinikk",
  founded: 2010,
} as const;

export interface Retailer {
  name: string;
  address: string;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const retailers: Retailer[] = [
  {
    name: "Arvika El & Motor",
    address: "Blästervägen 7, Arvika",
    phone: "0570-37910",
    coordinates: { lat: 59.66850388235947, lng: 12.589511211491729 },
  },
  {
    name: "Göteborgs Fyrverkerifabrik",
    address: "C R Hanssons väg 52, Billdal",
    phone: "070-2085874",
    coordinates: { lat: 57.56812089687963, lng: 11.981324338381704 },
  },
  {
    name: "Godisarenan",
    address: "Pontonjärvägen 2, Boden",
    phone: "0921-14920",
    coordinates: { lat: 65.81319260188211, lng: 21.68537445411964 },
  },
];

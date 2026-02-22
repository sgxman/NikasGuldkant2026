export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  imageBase?: string;
  description: string;
  details: string;
  available: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Vintage Champagneglas',
    category: 'glas',
    price: 15,
    image: 'https://images.pexels.com/photos/6937821/pexels-photo-6937821.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Eleganta champagneglas i vintagedesign, perfekta för festliga tillfällen.',
    details: 'Höjd: 23cm. Kristallglas med vacker gravyr. Passar 10-12 cl.',
    available: 50
  },
  {
    id: '2',
    name: 'Rustikt Stengodsporslin',
    category: 'porslin',
    price: 25,
    image: 'https://images.pexels.com/photos/6436/coffee-cup-mug-cafe.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Handgjord stengodstallrik med naturlig finish.',
    details: 'Diameter: 28cm. Diskmaskinssäker. Unik finish på varje tallrik.',
    available: 40
  },
  {
    id: '3',
    name: 'Guldbestick Set',
    category: 'porslin',
    price: 20,
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '4-delars bestickset i guldfinish för elegant dukning.',
    details: 'Innehåller: kniv, gaffel, sked och dessertsked. Rostfritt stål med guldplätering.',
    available: 60
  },
  {
    id: '4',
    name: 'Vintage Glaslyktor',
    category: 'belysning',
    price: 30,
    image: 'https://images.pexels.com/photos/1666067/pexels-photo-1666067.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Charmiga glaslyktor som skapar mysig belysning.',
    details: 'Höjd: 25cm. Glas och metall. För både blockljus och värmeljus.',
    available: 30
  },
  {
    id: '5',
    name: 'Ljusslinga Vintage',
    category: 'belysning',
    price: 150,
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Varm ljusslinga med vintage-glödlampor.',
    details: 'Längd: 10m. 20 LED-lampor. Varmvitt ljus. För både inomhus och utomhus.',
    available: 10
  },
  {
    id: '6',
    name: 'Linnedukar Naturvit',
    category: 'dekoration',
    price: 80,
    image: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Vackra linnedukar i naturvit färg.',
    details: 'Storlek: 150x250cm. 100% linne. Passar 8-10 personer.',
    available: 20
  },
  {
    id: '7',
    name: 'Kristallglas Vintage',
    category: 'glas',
    price: 12,
    image: 'https://images.pexels.com/photos/8844851/pexels-photo-8844851.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Klassiska kristallglas med slipad dekor.',
    details: 'Volym: 25cl. Handslipat kristall. Perfekt för vatten eller vin.',
    available: 80
  },
  {
    id: '8',
    name: 'Keramiska Krukor',
    category: 'dekoration',
    price: 35,
    image: 'https://images.pexels.com/photos/6314396/pexels-photo-6314396.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Handgjorda keramiska krukor för blommor och växter.',
    details: 'Olika storlekar. Handgjord keramik. Perfekt för bordsdekorationer.',
    available: 25
  }
];

import { createInspirationImageSet } from "../utils/images";

export const cases = [
  {
    id: '1',
    title: 'Bröllop med kräftskiva',
    type: 'Bröllop',
    guests: 50,
    image: createInspirationImageSet('insp_kraftbrollop_001', { defaultWidth: 800 }).src,
    imageSrcSet: createInspirationImageSet('insp_kraftbrollop_001', { defaultWidth: 800 }).srcSet,
    imageSizes: '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw',
    description: 'Temabröllop i härlig sommarstugemiljö.',
    fullDescription: 'Genom att jobba med den naturliga miljön i en sommarstuga skapades ett riktigt minnesvärt bröllop med kräftskivetema. Gästerna välkomnades med fördrink på verandan och en stor dynlåda fick agera bar under kvällen. Det stora tältet smyckades med blad och blommor från skogen intill och kröntes med kristallkrona. Eftersom det var självplock av kräftor på buffen var dukningen avskalad, men stilfull. I det enkla bor det vackra, som Ernst säger.',
    products: ['Tyllgardiner', 'Porslin', 'Glas', 'Linnedukar', 'Dekorationer', 'Stolsöverdrag', 'Ljusslingor'],
    images: [
      { name: 'insp_kraftbrollop_001', imageText: 'Här har Jonny städat och gjort fint' },
      'insp_kraftbrollop_004',
      'insp_kraftbrollop_005',
      'insp_kraftbrollop_006',
      'insp_kraftbrollop_007',
      'insp_kraftbrollop_008',
      'insp_kraftbrollop_011'],
    season: 'Sommar'
  },
  {
    id: '2',
    title: 'Studentmottagning',
    type: 'Fest',
    guests: 30,
    image: createInspirationImageSet('insp_student_002', { defaultWidth: 800 }).src,
    imageSrcSet: createInspirationImageSet('insp_student_002', { defaultWidth: 800 }).srcSet,
    imageSizes: '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw',
    description: 'Studentmottagning med snittar.',
    fullDescription: 'En smidig studentmottagning i trädgården med vänner och familj. Långbänkar vid borden gav en informell känsla och de färgglada dekorationerna förstärkte festkänslan. För att förenkla logistiken fanns ett bord för dryck, ett för presenter och samt buffebord vid husväggen utanför tältet. På det sättet stördes inte festen av omdukning mellan plockmat och kaffe och tårta. ',
    products: ['Champagneglas', 'Porslin', 'Serveringsbrädor', 'Dekoration'],
    images: [
      'insp_student_002',
      'insp_student_001'
    ],
    season: 'Sommar'
  },
  {
    id: '3',
    title: 'Hälsingebröllop',
    type: 'Bröllop',
    guests: 40,
    image: createInspirationImageSet('hostmiddag_vanner_001', { defaultWidth: 800 }).src,
    imageSrcSet: createInspirationImageSet('hostmiddag_vanner_001', { defaultWidth: 800 }).srcSet,
    imageSizes: '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw',
    description: 'Utomhusbröllop i Hälsingland.',
    fullDescription: 'En vacker bröllopsfest med 40 gäster på en Hälsingsk innergård. Efter mingel, spel och lekar utomhus följde en trerätters middag i logen. Baren byggdes upp i ett närligggande rum och ljusslingor förstärkte den magiska känslan både inne och ute.',
    products: ['Porslin', 'Glas', 'Barbåge', 'Linnedukar', 'Stolsöverdrag', 'Tyllgardiner', 'Dekorationer', 'Ljusslingor'],   
    images: [
      'hostmiddag_vanner_001',
      'hostmiddag_vanner_002'
    ],
    season: 'Höst'
  }
];

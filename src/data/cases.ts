import { createInspirationImageSet } from "../utils/images";

export const cases = [
  {
    id: '1',
    title: 'Bröllop med kräftskiva',
    type: 'Sommarstugefest',
    guests: 50,
    image: createInspirationImageSet('insp_kraftbrollop_001', { defaultWidth: 800 }).src,
    imageSrcSet: createInspirationImageSet('insp_kraftbrollop_001', { defaultWidth: 800 }).srcSet,
    imageSizes: '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw',
    description: 'En härlig sommarlunch med lantlig charm och vackra detaljer i naturliga toner.',
    fullDescription: 'En minnesvärd sommarfest med 50 gäster i en vacker trädgård. Vi skapade en lantlig och elegant atmosfär med naturliga material och varma toner.',
    products: ['Vintage porslin', 'Kristallglas', 'Linnedukar', 'Blommor i krukor'],
    images: [
      { name: 'insp_kraftbrollop_001', imageText: 'Här har olle städat och gjort fint' },
      'insp_kraftbrollop_002',
      'insp_kraftbrollop_004'
    ],
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
    description: 'Ett drömliknande bröllop med gulddetaljer och romantisk belysning.',
    fullDescription: 'Ett vackert bröllop med 80 gäster där elegans och romantik stod i fokus. Gulddetaljer och ljusslingor skapade en magisk atmosfär.',
    products: ['Champagneglas', 'Guldbestick', 'Ljusslingor', 'Bordsdekorationer'],
    images: [
      'insp_student_002',
      'insp_student_001'
    ],
    season: 'Sommar'
  },
  {
    id: '3',
    title: 'Höstmiddag hos vänner',
    type: 'Middagsfest',
    guests: 20,
    image: createInspirationImageSet('hostmiddag_vanner_001', { defaultWidth: 800 }).src,
    imageSrcSet: createInspirationImageSet('hostmiddag_vanner_001', { defaultWidth: 800 }).srcSet,
    imageSizes: '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw',
    description: 'En mysig höstmiddag med varma färger och stämningsfull belysning.',
    fullDescription: 'En intim höstmiddag med 20 gäster där vi skapade en varm och mysig känsla med höstens färger och ljus.',
    products: ['Stengodsporslin', 'Glaslyktor', 'Höstdekoration', 'Vinkällare'],
    images: [
      'hostmiddag_vanner_001',
      'hostmiddag_vanner_002'
    ],
    season: 'Höst'
  }
];

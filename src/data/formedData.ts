import { Specialty, LocationItem, ReviewItem, FaqItem, OnlinePriceItem } from '../types';

export const SPECIALTIES: Specialty[] = [
  {
    id: 'psicologia-adulto',
    name: 'Psicología adulto',
    professionalsCount: 117,
    fonasaPricePresencial: '$14.420 bono Fonasa',
    fonasaPriceOnline: '$12.250 copago online',
    iconName: 'brain',
  },
  {
    id: 'psicologia-infanto-juvenil',
    name: 'Psicología infanto-juvenil',
    professionalsCount: 61,
    fonasaPriceOnline: '$12.250 copago Fonasa online',
    iconName: 'baby',
  },
  {
    id: 'dermatologia',
    name: 'Dermatología',
    professionalsCount: 23,
    fonasaPricePresencial: '$17.070 copago Fonasa',
    fonasaPriceOnline: '$14.490 copago online',
    iconName: 'sparkles',
  },
  {
    id: 'neurologia-infantil',
    name: 'Neurología infantil',
    professionalsCount: 13,
    notes: 'Atención presencial y telemática',
    iconName: 'baby',
  },
  {
    id: 'psiquiatria-adulto',
    name: 'Psiquiatría adulto',
    professionalsCount: 10,
    notes: 'Presencial y telemedicina',
    iconName: 'brain',
  },
  {
    id: 'psiquiatria-infanto-juvenil',
    name: 'Psiquiatría infanto-juvenil',
    professionalsCount: 6,
    notes: 'Especialistas dedicados',
    iconName: 'user-check',
  },
  {
    id: 'neurologia-adulto',
    name: 'Neurología adulto',
    professionalsCount: 5,
    fonasaPriceOnline: '$14.490 copago Fonasa online',
    iconName: 'activity',
  },
  {
    id: 'cardiologia',
    name: 'Cardiología',
    professionalsCount: 3,
    notes: 'Consulta, ecocardiograma, electrocardiograma y holter en el mismo centro',
    iconName: 'heart',
  },
];

export const OTHER_SERVICES = [
  'Medicina general',
  'Nutrición',
  'Reumatología',
  'Traumatología',
  'Cirugía general',
  'Cirugía menor ambulatoria',
  'Ecografías (abdominal, pélvica, tiroidea, mamaria, renal, vascular, musculoesquelética)',
  'Ecocardiograma 2D y doppler cardíaco',
  'Electrocardiograma',
  'Holter de ritmo y de presión arterial',
  'Exámenes de laboratorio (hemograma, perfil bioquímico, hormonas)',
  'Evaluación ADOS-2 para adultos (neurodiversidad)',
  'Teledermatología (fotos de zona afectada)',
];

export const ONLINE_PRICES: OnlinePriceItem[] = [
  { specialty: 'Medicina general', fonasaCopay: '$6.690', particularPrice: '$19.990' },
  { specialty: 'Dermatología', fonasaCopay: '$14.490', particularPrice: '$39.990' },
  { specialty: 'Neurología adulto', fonasaCopay: '$14.490', particularPrice: '$39.990' },
  { specialty: 'Psicología (adulto e infanto-juvenil)', fonasaCopay: '$12.250', particularPrice: '$29.990' },
  { specialty: 'Nutrición', fonasaCopay: '$4.050', particularPrice: '$25.000' },
  { specialty: 'Reumatología', fonasaCopay: '$14.490', particularPrice: '$39.990' },
];

export const PATIENT_REVIEWS: ReviewItem[] = [
  {
    name: 'Camila C.',
    rating: 5,
    comment: "Excelente atención del Dr. O'Brien. Amable y respetuoso. Me explicó detalladamente la causa de mi dermatitis y su respectivo tratamiento. Lo recomiendo!",
  },
  {
    name: 'Daniela C.',
    rating: 5,
    comment: 'Desde que me atiendo en formed he tenido buena experiencia tanto yo en lo personal y para mi hijo.',
  },
  {
    name: 'Ximena S.',
    rating: 5,
    comment: 'Ya conocia el centro medico, hace mas de 1 año, muy buen lugar, buena atencion y el medico muy bueno tambien, quede muy conforme con la atencion.',
  },
  {
    name: 'Victoria F.',
    rating: 5,
    comment: 'El doctor fue muy simpatico y amable me explico todo tomándose su tiempo. Excelente atencion.',
  },
  {
    name: 'Lilen L.',
    rating: 5,
    comment: 'Excelente doctora, amable, simpática y dispuesta a resolver dudas, responder con cariño.',
  },
  {
    name: 'Pablo O.',
    rating: 5,
    comment: 'Muy buena atención del doctor, expedita y muy bien la información entregada.',
  },
];

export const LOCATIONS: LocationItem[] = [
  {
    id: 'providencia-nueva',
    name: 'Providencia',
    fullName: 'Sede Providencia',
    address: 'Av. Nueva Providencia 1881, oficina 1313',
    city: 'Providencia',
    region: 'Región Metropolitana',
    mapUrl: 'https://maps.app.goo.gl/NfAoVD1fo5NAML9N6',
  },
  {
    id: 'providencia-oteiza',
    name: 'Oteiza',
    fullName: 'Sede Providencia (Fidel Oteiza)',
    address: 'Fidel Oteiza 1971, oficina 302, Providencia',
    city: 'Providencia',
    region: 'Región Metropolitana',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Centro+M%C3%A9dico+Formed&query_place_id=ChIJ-feZ6tXPYpYRi1J_cx8xmXo',
  },
  {
    id: 'santiago-bulnes',
    name: 'Bulnes',
    fullName: 'Sede Santiago Centro (Bulnes)',
    address: 'Paseo Bulnes 79, oficina 60, Santiago Centro',
    city: 'Santiago Centro',
    region: 'Región Metropolitana',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Centro+M%C3%A9dico+Formed&query_place_id=ChIJtXdwPVrFYpYRGITTSe_l8uk',
  },
  {
    id: 'concepcion-rengo',
    name: 'Concepción',
    fullName: 'Sede Concepción',
    address: 'Rengo 94, oficina 31, Concepción',
    city: 'Concepción',
    region: 'Región del Biobío',
    phone: '+56 9 9920 8368',
    mapUrl: 'https://maps.app.goo.gl/sDj1NY7yBk96f42TA',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Atienden con Fonasa?',
    answer: 'Sí. En Centro Médico Formed atendemos pacientes FONASA en Modalidad Libre Elección, además de Isapre y particulares. Pagas solo tu copago al reservar y el bono te llega por correo.',
  },
  {
    id: 'faq-2',
    question: '¿Dónde están ubicados?',
    answer: 'Tenemos 4 sedes: Av. Nueva Providencia 1881 y Fidel Oteiza 1971 en Providencia, Paseo Bulnes 79 en Santiago Centro y Rengo 94 en Concepción. También atendemos por telemedicina en todo Chile.',
  },
  {
    id: 'faq-3',
    question: '¿Cuánto cuesta una consulta por telemedicina?',
    answer: 'Con copago Fonasa, desde $4.050 en nutrición, $6.690 en medicina general, $12.250 en psicología y $14.490 en dermatología, neurología y reumatología. Son valores referenciales; el precio final se confirma al reservar.',
  },
  {
    id: 'faq-4',
    question: '¿Atienden a niños y adolescentes?',
    answer: 'Sí. Contamos con psicología infanto-juvenil, psiquiatría infanto-juvenil y neurología infantil.',
  },
  {
    id: 'faq-5',
    question: '¿Puedo cancelar o cambiar mi hora?',
    answer: 'Sí. La cancelación es gratuita hasta 24 horas antes de tu atención.',
  },
];

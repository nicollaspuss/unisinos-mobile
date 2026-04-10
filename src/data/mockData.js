export const PRODUCTS = [
  {
    id: '1',
    name: 'Queijo Colonial - São Leopoldo - RS',
    description: 'Queijos, mel, salame e suco de uva da melhor qualidade.',
    origin: 'São Leopoldo, RS',
    producerId: 'prod1',
    image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviews: [
      { user: 'Maria L.', comment: 'Queijo maravilhoso! Sabor incrível, recomendo muito!', date: 'há 2 dias' },
      { user: 'João P.', comment: 'Excelente qualidade, vou comprar novamente!', date: 'há 1 semana' },
    ],
    certificationStatus: 'Certificado Selo Colonial Brasil',
  },
  {
    id: '2',
    name: 'Salame Colonial Defumado',
    description: 'Salame artesanal defumado em lenha de eucalipto, com temperos naturais e maturação lenta.',
    origin: 'Vale do Taquari, RS',
    producerId: 'prod2',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    reviews: [{ user: 'Ana C.', comment: 'Sabor autêntico, me lembrou a casa da minha avó.', date: 'há 4 dias' }],
    certificationStatus: 'Certificado Selo Colonial Brasil',
  },
  {
    id: '3',
    name: 'Suco de Uva Integral Orgânico',
    description: 'Suco 100% fruta, sem adição de açúcar ou conservantes.',
    origin: 'Bento Gonçalves, RS',
    producerId: 'prod2', // Ajustado para Bento Gonçalves
    image: 'https://images.pexels.com/photos/23042/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: [{ user: 'Pedro R.', comment: 'O melhor suco de uva que já tomei!', date: 'há 1 semana' }],
    certificationStatus: 'Certificado Selo Colonial Brasil',
  },
  {
    id: '4',
    name: 'Mel Silvestre Puro',
    description: 'Mel puro de flores silvestres, colhido de forma sustentável.',
    origin: 'Planalto Serrano, SC',
    producerId: 'prod3', // Vinculado ao produtor de SC (Sítio Boa Esperança)
    image: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    reviews: [{ user: 'Lucas F.', comment: 'Qualidade impecável!', date: 'há 5 dias' }],
    certificationStatus: 'Certificado Selo Colonial Brasil',
  },
];

export const PRODUCERS = [
  {
    id: 'prod1',
    name: 'Cooperativa São Leopoldo',
    history: 'Entidade sem fins lucrativos que apoia o pequeno produtor local.',
    location: 'São Leopoldo - RS',
    contact: 'contato@cooperativa.org',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod2',
    name: 'Fazenda Sabor da Roça',
    history: 'Desde 1985, cultivando tradição na Serra Gaúcha.',
    location: 'Bento Gonçalves, RS',
    contact: 'contato@sabordaroca.com.br',
    image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod3',
    name: 'Sítio Boa Esperança',
    history: 'Produção familiar em Santa Catarina dedicada ao mel e embutidos.',
    location: 'Lages, SC',
    contact: 'sitio@email.com',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop',
  },
];
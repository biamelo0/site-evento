export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
  capacity: string;
  idealFor: string;
}

export interface EventPackage {
  id: string;
  name: string;
  badge?: string;
  subtitle: string;
  priceStart: string;
  description: string;
  includes: string[];
  recommendedFor: string;
  popular?: boolean;
}

export interface MenuItem {
  id: string;
  category: 'lanches' | 'salgados' | 'doces' | 'boteco' | 'bebidas';
  name: string;
  description: string;
  image: string;
  tags: string[];
  servingStyle: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  event: string;
  quote: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'casamento' | 'aniversario' | 'corporativo' | 'decoracao' | 'bar';
  image: string;
  span?: string;
}

export const EVENT_SERVICES: ServiceItem[] = [
  {
    id: "buffet-completo",
    tag: "CARDÁPIOS VARIADOS",
    title: "Buffet Completo para Todas as Festas",
    description: "Do coquetel com salgadinhos finos ao churrasco completo na brasa, passando por mesas de boteco, ilhas de massas ao vivo e jantares tradicionais. Comida farta, quentinha e saborosa com garçons dedicados.",
    fullDescription: "Nosso serviço de buffet foi criado para que você curta a sua festa sem se preocupar com nada na cozinha. Oferecemos opções completas com salgados fritos na hora, assados folhados, ilhas temáticas com comidas típicas, risotos cremosos e pratos quentes que agradam a todos os gostos. Inclui todos os pratos, talheres, rechauds e equipe uniformizada.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Salgados fritos na hora e assados artesanais",
      "Opções de Churrasco Nobre, Estação de Boteco ou Jantar",
      "Garçons atenciosos e copeiros dedicados",
      "Prataria, toalhas de mesa e louças inclusas"
    ],
    capacity: "De 25 a 500 convidados",
    idealFor: "Aniversários, Casamentos, Bodas e Confraternizações"
  },
  {
    id: "decoracao-cenografia",
    tag: "AMBIENTAÇÃO COMPLETA",
    title: "Decoração, Flores & Mesa do Bolo",
    description: "Projetos de decoração apaixonantes e personalizados. Cuidamos do painel instagramável, mesa do bolo com suportes finos, arranjos florais naturais, lounges acolhedores e iluminação aconchegante.",
    fullDescription: "Criamos a atmosfera mágica que o seu evento merece. Desenvolvemos desde decorações no estilo rústico chique e boho até o clássico e contemporâneo. Você escolhe as cores, os temas e nós montamos tudo antes dos convidados chegarem, deixando cada cantinho perfeito para fotos inesquecíveis.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Mesa de bolo e doces decorada com suportes de luxo",
      "Arranjos de flores e folhagens selecionadas",
      "Painel de fundo temático para fotos e letreiros LED",
      "Montagem antecipada e desmontagem sem dor de cabeça"
    ],
    capacity: "Formatos intimistas a salões amplos",
    idealFor: "Festas de 15 Anos, Noivados, Casamentos e Chás Especiais"
  },
  
  {
    id: "bar-drinks",
    tag: "BAR DE COQUETÉIS",
    title: "Bar de Caipirinhas & Drinks Especiais",
    description: "Estrutura de bar completa com bartenders simpáticos preparando caipirinhas com frutas da estação, coquetéis com e sem álcool, gin tônica, moscow mule e drinks coloridos.",
    fullDescription: "Um dos pontos mais elogiados de qualquer festa! Montamos uma estação de bar iluminada com copos adequados, gelo filtrado, xaropes artesanais e frutas frescas. Oferecemos opções de coquetéis refrescantes para os adultos e drinks sem álcool saborosos para crianças e motoristas da rodada.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Bartenders uniformizados e ágeis",
      "Caipirinhas com frutas variadas (morango, kiwi, limão, maracujá)",
      "Coquetéis clássicos e opções especiais sem álcool (Mocktails)",
      "Balcão de bar e insumos completos inclusos"
    ],
    capacity: "Atendimento ágil para 30 a 400 convidados",
    idealFor: "Festas Animadas, Casamentos e Happy Hours Corporativos"
  }
];

export const PACKAGES: EventPackage[] = [
  {
    id: "pocket-festa",
    name: "Festa Pronta Pocket",
    badge: "Econômico & Prático",
    subtitle: "Para comemorações intimistas em casa, condomínio ou salão pequeno",
    priceStart: "A partir de R$ 65/pessoa",
    description: "A solução perfeita para quem quer festejar sem ter trabalho de cozinhar ou comprar bebida.",
    includes: [
      "Buffet de salgadinhos fritos na hora (coxinhas, quibes, risoles) e folhados",
      "Mesa de bolo com decoração charmosa e 2 suportes de doces",
      "Refrigerantes, sucos naturais e água mineral servidos à vontade",
      "01 Garçom atencioso + descartáveis premium ou louças"
    ],
    recommendedFor: "Aniversários de 30 a 50 pessoas, Chás e Reuniões de Família",
    popular: false
  },
  {
    id: "festa-completa",
    name: "Celebração Completa All-Inclusive",
    badge: "O Mais Escolhido ★",
    subtitle: "Tudo o que sua festa precisa em um único pacote sem surpresas",
    priceStart: "A partir de R$ 115/pessoa",
    description: "Você só traz a lista de convidados; nós cuidamos do buffet, decoração, bar e som!",
    includes: [
      "Buffet com entradas, ilha de massas quentes ou churrasco nobre",
      "Decoração completa: painel temático, mesa de bolo decorada e centros de mesa",
      "Bolo festivo recheado + docinhos tradicionais (brigadeiro, beijinho, ninho)",
      "Bar de caipirinhas com frutas frescas e refrigerantes",
      "Equipe completa de garçons, copeira e som ambiente"
    ],
    recommendedFor: "Aniversários de 50 a 150 pessoas, Bodas e Festas de 15 Anos",
    popular: true
  },
  {
    id: "sonho-casamento",
    name: "Grande Sonho (Casamentos & 15 Anos)",
    badge: "Completo & Memorável",
    subtitle: "Produção impecável do início ao fim com assessoria no dia",
    priceStart: "A partir de R$ 165/pessoa",
    description: "A festa dos seus sonhos com cenografia deslumbrante, banquete refinado e assessoria dedicada.",
    includes: [
      "Coquetel volante farto + Jantar completo com 2 opções de prato quente",
      "Cenografia com flores nobres, lounge, mesa de doces finos e iluminação cênica",
      "Bar de drinks completo com Gin Tônica, Moscow Mule e Caipirinhas",
      "DJ com som profissional, pista de LED e microfones para cerimônia",
      "Cerimonialista / Coordenador dedicado durante todo o evento"
    ],
    recommendedFor: "Casamentos, Grandes Bailes de 15 Anos e Formaturas",
    popular: false
  },
  {
    id: "corporativo",
    name: "Corporativo & Confraternização",
    badge: "Empresarial",
    subtitle: "Para coffee breaks, almoços corporativos ou festas de fim de ano",
    priceStart: "Sob Medida com NF",
    description: "Pontualidade britânica, apresentação impecável e notas fiscais para prestação de contas.",
    includes: [
      "Cardápios adaptados para Coffee Break, Almoço Executivo ou Coquetel",
      "Estrutura para discursos, apresentações e palco",
      "Emissão de Nota Fiscal e pagamento faturado para empresas",
      "Atendimento por profissionais bilíngues sob demanda"
    ],
    recommendedFor: "Treinamentos, Lançamentos, Feiras e Happy Hours de Empresas",
    popular: false
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Lanchinhos & Mini Sanduíches
  {
    id: "mini-hamburgueres",
    category: "lanches",
    name: "Mini Hambúrgueres Artesanais (Sliders)",
    description: "Pão brioche fofinho amanteigado, burger artesanal suculento 100% bovino, queijo cheddar derretido e maionese especial da casa.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    tags: ["Favorito da Festa", "Pão Brioche", "Artesanal"],
    servingStyle: "Servido quentinho volante pelos garçons",
    highlight: true
  },
  {
    id: "mini-hotdog",
    category: "lanches",
    name: "Mini Hot Dogs Prensadinhos",
    description: "Mini pãozinho prensado na chapa com molho de tomate rústico temperado, salsicha de primeira qualidade e batata palha fininha crocante.",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80",
    tags: ["Infalível", "Crocante", "Quentinho"],
    servingStyle: "Servido em bandejas térmicas volantes",
    highlight: true
  },
  {
    id: "mini-sanduiches-pernil",
    category: "lanches",
    name: "Mini Sanduíches de Pernil & Carne Louca",
    description: "Mini pães franceses crocantes recheados com pernil desfiado suculento ou carne louca tradicional temperada com pimentões e azeite.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    tags: ["Sabor de Festa", "Suculento", "Tradicional"],
    servingStyle: "Dispostos em tábuas de madeira e servidos volantes",
    highlight: false
  },
  {
    id: "mini-croissants",
    category: "lanches",
    name: "Mini Croissants Folhados Recheados",
    description: "Massa folhada leve que desmancha na boca com recheio de peito de peru defumado com cream cheese ou queijo brie e damasco.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    tags: ["Folhado Leve", "Recheio Nobre", "Sofisticado"],
    servingStyle: "Servido em bandejas de porcelana branca",
    highlight: false
  },

  // Salgadinhos Fritos na Hora & Assados
  {
    id: "coxinhas-cremosas",
    category: "salgados",
    name: "Coxinhas Douradas de Frango com Catupiry",
    description: "Massa fininha e casquinha super crocante frita na hora, com recheio farto de peito de frango desfiado com tempero caseiro e catupiry cremoso.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    tags: ["Mais Pedido ★", "Frito na Hora", "Crocante"],
    servingStyle: "Fritos continuamente durante as 4 horas de festa",
    highlight: true
  },
  {
    id: "bolinhas-queijo-kibe",
    category: "salgados",
    name: "Bolinhas de Queijo & Kibes com Hortelã",
    description: "Bolinhas de queijo que esticam ao morder e kibes artesanais de carne bovina moída temperados com folhas frescas de hortelã e limão.",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    tags: ["Queijo que Estica", "Hortelã Fresca", "Sucesso"],
    servingStyle: "Servidos fumegantes pelos garçons",
    highlight: true
  },
  {
    id: "pasteizinhos-feira",
    category: "salgados",
    name: "Mini Pasteizinhos de Feira Sequinhos",
    description: "Massa crocante com bolhas sequinhas, recheados de carne moída bem temperada, queijo meia cura derretido e palmito cremoso.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    tags: ["Crocante", "Sequinho", "Tradicional"],
    servingStyle: "Acompanhados de molhinho de pimenta caseiro",
    highlight: false
  },
  {
    id: "empadinhas-derretem",
    category: "salgados",
    name: "Empadinhas que Derretem na Boca",
    description: "Massa podre artesanal que desmancha a cada mordida, com recheio úmido de palmito nobre ou frango com azeitonas pretas.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    tags: ["Massa Podre", "Derrete na Boca", "Assado"],
    servingStyle: "Servidas mornas em forminhas elegantes",
    highlight: false
  },

  // Docinhos & Bolos de Festa
  {
    id: "mural-docinhos-festa",
    category: "doces",
    name: "Mural & Mesa Completa de Docinhos de Festa",
    description: "Mesa farta de docinhos tradicionais e gourmets com brigadeiros belgas, beijinhos de coco fresco, bicho de pé, surpresinha de uva e mini torteletas em forminhas decoradas.",
    image: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=800&q=80",
    tags: ["Mural de Doces", "Farto & Colorido", "Destaque da Festa"],
    servingStyle: "Montada em suportes finos com iluminação e reposição",
    highlight: true
  },
  {
    id: "quarteto-brigadeiros",
    category: "doces",
    name: "Quarteto Tradicional de Brigadeiros",
    description: "Brigadeiro ao leite no granulado nobre belga, beijinho macio de coco fresco, brigadeiro de ninho com nutella e bicho de pé.",
    image: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=800&q=80",
    tags: ["Indispensável", "Chocolate Nobre", "Feito à Mão"],
    servingStyle: "Em forminhas decoradas na mesa do bolo e volantes",
    highlight: true
  },
  {
    id: "bolo-festa-frutas",
    category: "doces",
    name: "Bolo Festivo Recheado com Frutas",
    description: "Pão de ló leve e molhadinho, com recheio generoso de brigadeiro de ninho com morangos frescos ou creme de baunilha com abacaxi.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    tags: ["Bolo do Parabéns", "Morangos Frescos", "Molhadinho"],
    servingStyle: "Cortado e servido com espátula e pratinhos",
    highlight: true
  },
  {
    id: "mini-churros-doce-leite",
    category: "doces",
    name: "Mini Churros com Doce de Leite Cremoso",
    description: "Churros sequinhos e crocantes passados no açúcar e canela, servidos com copinhos de doce de leite caseiro cremoso.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    tags: ["Quentinho", "Doce de Leite", "Amado por Todos"],
    servingStyle: "Servido quentinho volante na pista de dança",
    highlight: false
  },
  {
    id: "copinhos-mousse",
    category: "doces",
    name: "Verrines & Copinhos de Mousse Cremosa",
    description: "Mousse aerada de maracujá com calda de sementes, limão siciliano refrescante e mousse de chocolate belga meio amargo.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    tags: ["Refrescante", "Cremoso", "Colorido"],
    servingStyle: "Servidos em copinhos de acrílico cristal com colherzinhas",
    highlight: false
  },

  // Petiscos & Comida de Boteco
  {
    id: "dadinhos-tapioca",
    category: "boteco",
    name: "Dadinhos de Tapioca com Melaço",
    description: "Cubinhos dourados de queijo coalho e tapioca granulada, crocantes por fora e macios por dentro, servidos com melaço de cana.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    tags: ["Queijo Coalho", "Crocante", "Vegetariano"],
    servingStyle: "Ilha de petiscos com reposição contínua",
    highlight: true
  },


  {
    id: "tabua-frios-paes",
    category: "boteco",
    name: "Tábua Farta de Frios, Queijos & Pães",
    description: "Salaminho italiano fatiado, queijo provolone e gouda em cubos, azeitonas chilenas temperadas, castanhas e torradinhas amanteigadas.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["Mesa Central", "Queijos & Frios", "Elegante"],
    servingStyle: "Mesa rústica decorada no início da festa",
    highlight: false
  },
  {
    id: "espetinhos-churrasco",
    category: "boteco",
    name: "Churrasquinho em Espetos na Brasa",
    description: "Espetos de alcatra macia, frango suculento com bacon, linguiça toscana artesanal e queijo coalho dourado com farofa crocante e vinagrete.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    tags: ["Na Brasa", "Carnes Suculentas", "Acompanha Farofa"],
    servingStyle: "Estação com churrasqueiro profissional servindo quente",
    highlight: true
  },

  // Bebidas & Refrescos
  {
    id: "bar-caipirinhas-frutas",
    category: "bebidas",
    name: "Bar de Caipirinhas & Frutas Frescas",
    description: "Bartender preparando caipirinhas com morango fresco, abacaxi com hortelã, maracujá, kiwi e limão, além de coquetéis sem álcool para todas as idades.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    tags: ["Frutas Frescas", "Drinks Sem Álcool", "Barman Incluso"],
    servingStyle: "Balcão de bar iluminado servindo durante todo o evento",
    highlight: true
  },
  {
    id: "sucos-naturais-suqueira",
    category: "bebidas",
    name: "Suqueiras de Cristal com Sucos Naturais",
    description: "Sucos naturais de laranja, uva integral e limonada suíça, além de água mineral e águas aromatizadas com rodelas de frutas e hortelã.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    tags: ["100% Natural", "Refrescante", "Suqueiras de Cristal"],
    servingStyle: "Estação de bebidas self-service + serviço volante",
    highlight: false
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Mesa de Bolo Decorada com Flores e Letreiro Luminoso",
    category: "decoracao",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: "g2",
    title: "Salgados Fritos e Canapés Sendo Servidos",
    category: "casamento",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1"
  },
  {
    id: "g3",
    title: "Barman Preparando Coquetéis e Caipirinhas",
    category: "bar",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1"
  },
  {
    id: "g4",
    title: "Pista de Dança Animada com DJ e Iluminação de LED",
    category: "aniversario",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1"
  },
  {
    id: "g5",
    title: "Mural de Docinhos de Festa & Mesa do Bolo Decorada",
    category: "decoracao",
    image: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-1"
  },
  {
    id: "g6",
    title: "Salão de Eventos Acolhedor com Mesas Postas",
    category: "casamento",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 md:col-span-2"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Camila & Rafael Andrade",
    role: "Casamento dos Sonhos",
    event: "Casamento no Espaço Villa Verde (180 convidados)",
    quote: "A equipe foi simplesmente impecável! A comida estava quentinha e deliciosa, os garçons eram super educados e a mesa de doces parecia uma pintura. Nossos convidados elogiaram demais e não tivemos nenhuma dor de cabeça!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "t2",
    name: "Juliana Mendes",
    role: "Mãe da Debutante",
    event: "Festa de 15 Anos da Isadora (120 convidados)",
    quote: "Contratamos o pacote completo com buffet, decoração, DJ e bar de caipirinhas. Foi a melhor coisa que fizemos! O preço foi justo, flexibilizaram o pagamento e a pista de dança bombou a noite inteira. Nota 10!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "t3",
    name: "Rodrigo Toledo",
    role: "Gerente de RH",
    event: "Confraternização de Fim de Ano da TechSoft (250 pessoas)",
    quote: "Fizemos o formato de Comida de Boteco com Chopp e música ao vivo. Todos os colaboradores amaram a fartura e a agilidade do atendimento. Com certeza repetiremos a parceria no próximo ano!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  }
];

export const TRUST_BADGES = [
  { number: "500+", label: "Festas & Eventos Realizados com Amor" },
  { number: "100%", label: "Tudo em um Único Lugar (Buffet, Decoração e Som)" },
  { number: "12x", label: "Parcelamento Facilitado para o Seu Sonho" },
  { number: "4.9★", label: "Avaliação Máxima dos Nossos Clientes" }
];

export const WHY_CHOOSE_US = [
  {
    title: "Tudo com um Único Fornecedor",
    description: "Chega de falar com 10 pessoas diferentes. Nós cuidamos do buffet, decoração, bebidas, som e equipe para você aproveitar a festa sem estresse."
  },
  {
    title: "Comida Quentinha, Farta e Elogiada",
    description: "Salgados fritos na hora, carnes de primeira qualidade e reposição contínua. Seus convidados sairão satisfeitos e elogiando."
  },
  {
    title: "Condições de Pagamento Flexíveis",
    description: "Sabemos o valor do seu sonho! Parcelamos seu evento até a data da festa ou no cartão de crédito em até 12x."
  },
  {
    title: "Degustação sem Compromisso",
    description: "Venha experimentar os nossos salgados, pratos e doces antes de fechar o contrato. Confiamos plenamente na nossa qualidade!"
  }
];

import { Product } from "./products";

export interface Review {
  name: string;
  photo: string;
  rating: number;
  comment: string;
}

export interface ProductContent {
  slug: string;
  longDescription: string;
  whatsInTheBox: string[];
  warrantyAndSecurity: string[];
  socialProof: {
    sold: string;
    averageRating: string;
  };
  reviews: Review[];
}

export const productContents: ProductContent[] = [
  {
    slug: "galaxy-a15",
    longDescription: `O Samsung Galaxy A15 redefine a experiência móvel com seu deslumbrante display Super AMOLED de 6.5 polegadas, que oferece cores vibrantes e pretos profundos para uma imersão visual sem igual. Equipado com o processador Helio G99, este smartphone garante um desempenho fluido e eficiente, seja para jogos, multitarefas ou navegação. Sua câmera principal de 50MP captura fotos incrivelmente detalhadas e vídeos nítidos, enquanto a bateria de 5000mAh proporciona energia para o dia todo, eliminando a preocupação com recargas constantes. Com design elegante e recursos intuitivos, o Galaxy A15 é a escolha perfeita para quem busca tecnologia de ponta e praticidade.`, 
    whatsInTheBox: [
      "1x Smartphone Samsung Galaxy A15",
      "1x Carregador original Samsung (15W)",
      "1x Cabo USB-C para USB-C",
      "1x Chave ejetora de chip",
      "1x Manual do usuário"
    ],
    warrantyAndSecurity: [
      "Produto original com nota fiscal",
      "Garantia de fábrica de 1 ano",
      "Compra 100% segura com criptografia de ponta a ponta"
    ],
    socialProof: {
      sold: "Mais de 750 vendidos",
      averageRating: "4.8 / 5"
    },
    reviews: [
      {
        name: "João Silva",
        photo: "/reviews/user1.png",
        rating: 5,
        comment: "Chegou super rápido e o celular é incrível! A tela AMOLED é linda e a bateria dura muito. Recomendo demais!"
      },
      {
        name: "Maria Souza",
        photo: "/reviews/user2.png",
        rating: 5,
        comment: "Adorei meu Galaxy A15! As fotos ficam perfeitas e ele é muito rápido para tudo que preciso. Excelente custo-benefício."
      },
      {
        name: "Pedro Lima",
        photo: "/reviews/user3.png",
        rating: 4,
        comment: "Bom celular, atende às expectativas. A câmera é boa, mas em ambientes com pouca luz poderia ser melhor. No geral, satisfeito."
      },
      {
        name: "Ana Paula",
        photo: "/reviews/user4.png",
        rating: 5,
        comment: "Estou usando há um mês e não tenho do que reclamar. A performance é ótima e o design é muito bonito. Entrega rápida!"
      }
    ]
  },
  {
    slug: "galaxy-a25-5g",
    longDescription: `O Samsung Galaxy A25 5G é a porta de entrada para a velocidade da próxima geração. Com conectividade 5G ultrarrápida, você experimentará downloads instantâneos e streaming sem interrupções. Seu display Super AMOLED de 6.5 polegadas com taxa de atualização de 120Hz oferece uma fluidez visual impressionante, ideal para jogos e vídeos. O sistema de câmera tripla de 50MP, com estabilização óptica de imagem (OIS), garante fotos e vídeos profissionais em qualquer situação. Alimentado pelo processador Exynos 1280 e uma bateria de 5000mAh, o Galaxy A25 5G é construído para acompanhar seu ritmo, oferecendo desempenho robusto e autonomia prolongada.`, 
    whatsInTheBox: [
      "1x Smartphone Samsung Galaxy A25 5G",
      "1x Carregador original Samsung (25W)",
      "1x Cabo USB-C para USB-C",
      "1x Chave ejetora de chip",
      "1x Manual do usuário"
    ],
    warrantyAndSecurity: [
      "Produto original com nota fiscal",
      "Garantia de fábrica de 1 ano",
      "Compra 100% segura com criptografia de ponta a ponta"
    ],
    socialProof: {
      sold: "Mais de 900 vendidos",
      averageRating: "4.9 / 5"
    },
    reviews: [
      {
        name: "Carlos Eduardo",
        photo: "/reviews/user5.png",
        rating: 5,
        comment: "A velocidade do 5G é impressionante! O celular é lindo, rápido e a câmera é fantástica. Melhor compra que fiz este ano."
      },
      {
        name: "Fernanda Costa",
        photo: "/reviews/user6.png",
        rating: 5,
        comment: "Tela de 120Hz faz toda a diferença, tudo muito fluido. A bateria dura o dia todo mesmo com uso intenso. Super satisfeita!"
      },
      {
        name: "Rafael Santos",
        photo: "/reviews/user1.png",
        rating: 5,
        comment: "Excelente aparelho, muito potente para jogos e multitarefas. A câmera com OIS é um diferencial enorme. Recomendo!"
      },
      {
        name: "Juliana Almeida",
        photo: "/reviews/user7.png",
        rating: 4,
        comment: "O celular é ótimo, mas esquenta um pouco em jogos mais pesados. Fora isso, é perfeito. A entrega foi super rápida."
      }
    ]
  },
  {
    slug: "galaxy-a34-5g",
    longDescription: `O Samsung Galaxy A34 5G combina elegância e resistência com seu design premium e certificação IP67 contra água e poeira. Sua tela Super AMOLED de 6.6 polegadas com 120Hz proporciona uma experiência visual imersiva e suave, perfeita para consumo de mídia e jogos. Equipado com o processador Dimensity 1080, oferece desempenho robusto para todas as suas necessidades. A câmera principal de 48MP com OIS garante fotos e vídeos estáveis e de alta qualidade, mesmo em movimento. Com uma bateria de 5000mAh, você terá energia de sobra para explorar todas as funcionalidades deste smartphone incrível.`, 
    whatsInTheBox: [
      "1x Smartphone Samsung Galaxy A34 5G",
      "1x Carregador original Samsung (25W)",
      "1x Cabo USB-C para USB-C",
      "1x Chave ejetora de chip",
      "1x Manual do usuário"
    ],
    warrantyAndSecurity: [
      "Produto original com nota fiscal",
      "Garantia de fábrica de 1 ano",
      "Compra 100% segura com criptografia de ponta a ponta"
    ],
    socialProof: {
      sold: "Mais de 1200 vendidos",
      averageRating: "4.9 / 5"
    },
    reviews: [
      {
        name: "Gabriel Ferreira",
        photo: "/reviews/user3.png",
        rating: 5,
        comment: "Design lindo e muito resistente! A tela é fantástica e a câmera com OIS faz toda a diferença. Vale cada centavo!"
      },
      {
        name: "Patrícia Oliveira",
        photo: "/reviews/user4.png",
        rating: 5,
        comment: "Finalmente um celular que não preciso me preocupar com água! Rápido, bonito e a bateria dura muito. Perfeito para o dia a dia."
      },
      {
        name: "Thiago Martins",
        photo: "/reviews/user8.png",
        rating: 4,
        comment: "O desempenho é muito bom, mas o carregador poderia ser mais potente. No geral, um excelente smartphone 5G."
      },
      {
        name: "Beatriz Lima",
        photo: "/reviews/user2.png",
        rating: 5,
        comment: "Amei a cor e a qualidade da tela. As fotos ficam incríveis e ele não trava em nada. Recomendo a todos!"
      }
    ]
  },
  {
    slug: "redmi-note-13",
    longDescription: `O Xiaomi Redmi Note 13 é um campeão em fotografia com sua câmera principal de 108MP, que captura imagens com detalhes surpreendentes e cores vibrantes. Seu display AMOLED de 6.67 polegadas com 120Hz oferece uma experiência visual fluida e imersiva, ideal para consumir conteúdo e jogar. Equipado com o processador Snapdragon 685, o aparelho entrega um desempenho ágil e eficiente para todas as tarefas. A bateria de 5000mAh garante longa duração, e o carregamento rápido de 33W permite que você volte à ação em pouco tempo. Com um design moderno e recursos avançados, o Redmi Note 13 é a escolha ideal para quem busca um smartphone completo e acessível.`, 
    whatsInTheBox: [
      "1x Smartphone Xiaomi Redmi Note 13",
      "1x Carregador original Xiaomi (33W)",
      "1x Cabo USB-C",
      "1x Capa protetora de silicone",
      "1x Chave ejetora de chip",
      "1x Manual do usuário"
    ],
    warrantyAndSecurity: [
      "Produto original com nota fiscal",
      "Garantia de fábrica de 1 ano",
      "Compra 100% segura com criptografia de ponta a ponta"
    ],
    socialProof: {
      sold: "Mais de 800 vendidos",
      averageRating: "4.7 / 5"
    },
    reviews: [
      {
        name: "Lucas Mendes",
        photo: "/reviews/user5.png",
        rating: 5,
        comment: "A câmera de 108MP é sensacional! As fotos ficam com uma qualidade impressionante. O celular é muito rápido e a bateria dura bastante. Super recomendo!"
      },
      {
        name: "Mariana Rocha",
        photo: "/reviews/user7.png",
        rating: 5,
        comment: "Adorei a tela AMOLED de 120Hz, tudo muito fluido e bonito. O carregamento rápido é um salva-vidas. Excelente aparelho!"
      },
      {
        name: "Diego Costa",
        photo: "/reviews/user1.png",
        rating: 4,
        comment: "Ótimo celular para o dia a dia, mas o sistema poderia ser um pouco mais otimizado. No geral, muito bom pelo preço."
      },
      {
        name: "Camila Pereira",
        photo: "/reviews/user6.png",
        rating: 5,
        comment: "Veio com capa e carregador, o que é um ponto positivo. A bateria é excelente e o desempenho é fluido. Satisfeita com a compra."
      }
    ]
  },
  {
    slug: "redmi-note-12",
    longDescription: `O Xiaomi Redmi Note 12 oferece uma experiência visual vibrante com seu display AMOLED de 6.67 polegadas, ideal para quem busca cores vivas e alto contraste. Equipado com o processador Snapdragon 685, este smartphone garante um desempenho suave para as tarefas diárias e jogos leves. Sua câmera principal de 50MP permite capturar momentos com clareza e detalhes. A bateria de 5000mAh proporciona autonomia para o dia todo, e o carregamento rápido de 33W minimiza o tempo de espera. Com um design moderno e recursos essenciais, o Redmi Note 12 é uma opção sólida para quem busca um smartphone confiável e com bom custo-benefício.`, 
    whatsInTheBox: [
      "1x Smartphone Xiaomi Redmi Note 12",
      "1x Carregador original Xiaomi (33W)",
      "1x Cabo USB-C",
      "1x Capa protetora de silicone",
      "1x Chave ejetora de chip",
      "1x Manual do usuário"
    ],
    warrantyAndSecurity: [
      "Produto original com nota fiscal",
      "Garantia de fábrica de 1 ano",
      "Compra 100% segura com criptografia de ponta a ponta"
    ],
    socialProof: {
      sold: "Mais de 600 vendidos",
      averageRating: "4.6 / 5"
    },
    reviews: [
      {
        name: "Gustavo Lima",
        photo: "/reviews/user3.png",
        rating: 4,
        comment: "Celular bom para o preço, a tela é excelente. A câmera é ok, mas não espere milagres. A bateria dura bastante."
      },
      {
        name: "Larissa Santos",
        photo: "/reviews/user4.png",
        rating: 5,
        comment: "Gostei muito do meu Redmi Note 12. É rápido, bonito e a bateria é ótima. A capa que vem junto é um bônus!"
      },
      {
        name: "Felipe Souza",
        photo: "/reviews/user8.png",
        rating: 5,
        comment: "Chegou em perfeito estado, bem embalado. O desempenho é fluido para o uso diário. Recomendo a loja e o produto."
      },
      {
        name: "Isabela Costa",
        photo: "/reviews/user2.png",
        rating: 4,
        comment: "Achei o celular muito bom, mas senti falta de um pouco mais de RAM para multitarefas pesadas. De resto, tudo certo."
      }
    ]
  },
  {
    slug: "moto-g54-5g",
    longDescription: `O Motorola Moto G54 5G traz a velocidade do 5G para suas mãos com um desempenho ágil e eficiente. Seu display de 6.5 polegadas com 120Hz proporciona uma rolagem suave e uma experiência visual imersiva. A câmera principal de 50MP com estabilização óptica de imagem (OIS) garante fotos nítidas e vídeos estáveis, mesmo em movimento. Equipado com o processador Dimensity 7020 e uma bateria de 5000mAh, o Moto G54 5G oferece autonomia para o dia todo e um desempenho confiável para todas as suas atividades. Com um design moderno e recursos focados na experiência do usuário, é uma excelente opção para quem busca um smartphone 5G completo.`, 
    whatsInTheBox: [
      "1x Smartphone Motorola Moto G54 5G",
      "1x Carregador original Motorola (20W)",
      "1x Cabo USB-C",
      "1x Capa protetora de silicone",
      "1x Chave ejetora de chip",
      "1x Manual do usuário"
    ],
    warrantyAndSecurity: [
      "Produto original com nota fiscal",
      "Garantia de fábrica de 1 ano",
      "Compra 100% segura com criptografia de ponta a ponta"
    ],
    socialProof: {
      sold: "Mais de 700 vendidos",
      averageRating: "4.7 / 5"
    },
    reviews: [
      {
        name: "Ricardo Alves",
        photo: "/reviews/user1.png",
        rating: 5,
        comment: "Muito rápido e a câmera é excelente! Adorei a fluidez da tela de 120Hz. A bateria dura bastante. Ótimo custo-benefício."
      },
      {
        name: "Sofia Martins",
        photo: "/reviews/user6.png",
        rating: 5,
        comment: "Motorola nunca decepciona! O 5G funciona perfeitamente e o celular é muito bonito. As fotos ficam ótimas. Recomendo!"
      },
      {
        name: "Bruno Ferreira",
        photo: "/reviews/user5.png",
        rating: 4,
        comment: "Bom aparelho, mas o som poderia ser um pouco mais alto. Fora isso, é um celular muito competente para o dia a dia."
      },
      {
        name: "Laura Oliveira",
        photo: "/reviews/user7.png",
        rating: 5,
        comment: "A capa que vem na caixa é de boa qualidade. O celular é rápido, a bateria dura e o design é elegante. Satisfeita com a compra."
      }
    ]
  },
  {
    slug: "moto-g84-5g",
    longDescription: `O Motorola Moto G84 5G eleva a experiência móvel com seu display pOLED de 6.7 polegadas, que oferece cores vibrantes e pretos absolutos para uma imersão visual incomparável. Equipado com o poderoso processador Snapdragon 8 Gen 1, este smartphone garante um desempenho excepcional para os jogos mais exigentes e multitarefas intensas. Sua câmera principal de 50MP com OIS captura fotos e vídeos com qualidade profissional, mesmo em condições de pouca luz. A bateria de 5000mAh proporciona autonomia para o dia todo, e o carregamento TurboPower™ de 30W permite recargas rápidas. Com um design sofisticado e recursos avançados, o Moto G84 5G é a escolha ideal para quem busca o máximo em tecnologia e estilo.`, 
    whatsInTheBox: [
      "1x Smartphone Motorola Moto G84 5G",
      "1x Carregador original Motorola TurboPower™ (30W)",
      "1x Cabo USB-C",
      "1x Capa protetora de silicone",
      "1x Chave ejetora de chip",
      "1x Manual do usuário"
    ],
    warrantyAndSecurity: [
      "Produto original com nota fiscal",
      "Garantia de fábrica de 1 ano",
      "Compra 100% segura com criptografia de ponta a ponta"
    ],
    socialProof: {
      sold: "Mais de 1000 vendidos",
      averageRating: "4.9 / 5"
    },
    reviews: [
      {
        name: "Daniel Rocha",
        photo: "/reviews/user8.png",
        rating: 5,
        comment: "Que celular incrível! A tela pOLED é espetacular e o desempenho é surreal. Roda tudo sem engasgos. A câmera é fantástica. Superou minhas expectativas!"
      },
      {
        name: "Carolina Mendes",
        photo: "/reviews/user2.png",
        rating: 5,
        comment: "Design premium e muito elegante. A bateria dura muito e o carregamento rápido é um diferencial. As fotos ficam com cores vibrantes. Amei!"
      },
      {
        name: "André Silva",
        photo: "/reviews/user3.png",
        rating: 5,
        comment: "O melhor Motorola que já tive. Muito potente, rápido e com uma câmera excelente. A experiência de uso é impecável. Recomendo fortemente!"
      },
      {
        name: "Viviane Costa",
        photo: "/reviews/user4.png",
        rating: 4,
        comment: "Celular top de linha, mas o preço é um pouco salgado. No entanto, a qualidade compensa. A entrega foi pontual."
      }
    ]
  },
  {
    slug: "realme-c67",
    longDescription: `O Realme C67 é um smartphone que oferece um excelente equilíbrio entre desempenho e custo-benefício. Seu display IPS LCD de 6.5 polegadas proporciona uma visualização clara e nítida para o uso diário. Equipado com o processador Snapdragon 680, o aparelho garante um desempenho suave para navegação, redes sociais e jogos leves. A câmera principal de 108MP captura fotos com riqueza de detalhes e cores vibrantes, permitindo que você registre seus melhores momentos com qualidade. A bateria de 5000mAh oferece uma autonomia impressionante, mantendo você conectado por mais tempo. Com um design moderno e recursos essenciais, o Realme C67 é uma escolha inteligente para quem busca um smartphone confiável e acessível.`, 
    whatsInTheBox: [
      "1x Smartphone Realme C67",
      "1x Carregador original Realme (33W)",
      "1x Cabo USB-C",
      "1x Capa protetora de silicone",
      "1x Chave ejetora de chip",
      "1x Manual do usuário"
    ],
    warrantyAndSecurity: [
      "Produto original com nota fiscal",
      "Garantia de fábrica de 1 ano",
      "Compra 100% segura com criptografia de ponta a ponta"
    ],
    socialProof: {
      sold: "Mais de 550 vendidos",
      averageRating: "4.5 / 5"
    },
    reviews: [
      {
        name: "Fernando Gomes",
        photo: "/reviews/user1.png",
        rating: 4,
        comment: "Bom celular para o dia a dia, a câmera de 108MP é um destaque. A bateria dura bastante. Pelo preço, vale a pena."
      },
      {
        name: "Gabriela Dias",
        photo: "/reviews/user7.png",
        rating: 5,
        comment: "Adorei meu Realme C67! É rápido, bonito e a bateria é ótima. A capa que vem junto é um bônus. Recomendo!"
      },
      {
        name: "Marcelo Vieira",
        photo: "/reviews/user5.png",
        rating: 5,
        comment: "Chegou em perfeito estado, bem embalado. O desempenho é fluido para o uso diário. Satisfeito com a compra."
      },
      {
        name: "Priscila Rocha",
        photo: "/reviews/user6.png",
        rating: 4,
        comment: "Achei o celular muito bom, mas a tela IPS LCD não tem o mesmo brilho de uma AMOLED. De resto, tudo certo."
      }
    ]
  },
  {
    slug: "poco-x5-5g",
    longDescription: `O POCO X5 5G é um smartphone projetado para oferecer desempenho e velocidade com conectividade 5G. Seu display AMOLED de 6.67 polegadas com 120Hz proporciona uma experiência visual imersiva e fluida, ideal para jogos e consumo de mídia. Equipado com o processador Snapdragon 695, o aparelho garante um desempenho ágil e eficiente para todas as tarefas. A câmera principal de 50MP captura fotos com clareza e detalhes, enquanto a bateria de 5000mAh oferece autonomia para o dia todo. Com um design moderno e recursos focados na performance, o POCO X5 5G é a escolha perfeita para quem busca um smartphone potente e com bom custo-benefício.`, 
    whatsInTheBox: [
      "1x Smartphone POCO X5 5G",
      "1x Carregador original POCO (33W)",
      "1x Cabo USB-C",
      "1x Capa protetora de silicone",
      "1x Chave ejetora de chip",
      "1x Manual do usuário"
    ],
    warrantyAndSecurity: [
      "Produto original com nota fiscal",
      "Garantia de fábrica de 1 ano",
      "Compra 100% segura com criptografia de ponta a ponta"
    ],
    socialProof: {
      sold: "Mais de 850 vendidos",
      averageRating: "4.8 / 5"
    },
    reviews: [
      {
        name: "Roberto Carlos",
        photo: "/reviews/user8.png",
        rating: 5,
        comment: "Celular muito rápido e a tela AMOLED é fantástica! Roda todos os jogos sem problemas. A bateria dura muito. Recomendo!"
      },
      {
        name: "Aline Ferreira",
        photo: "/reviews/user2.png",
        rating: 5,
        comment: "Adorei meu POCO X5 5G! A velocidade do 5G é ótima e o celular é muito bonito. As fotos ficam com boa qualidade. Satisfeita!"
      },
      {
        name: "Thiago Lima",
        photo: "/reviews/user3.png",
        rating: 4,
        comment: "Bom aparelho, mas o carregador poderia ser mais potente. No geral, um excelente smartphone 5G pelo preço."
      },
      {
        name: "Giovanna Souza",
        photo: "/reviews/user4.png",
        rating: 5,
        comment: "Chegou em perfeito estado, bem embalado. O desempenho é fluido para o uso diário. A capa que vem junto é um diferencial. Recomendo a loja!"
      }
    ]
  },
  {
    slug: "galaxy-m34-5g",
    longDescription: `O Samsung Galaxy M34 5G é um gigante em autonomia com sua bateria de 6000mAh, garantindo que você fique conectado por muito mais tempo. Seu display Super AMOLED de 6.5 polegadas oferece cores vibrantes e um brilho intenso, ideal para qualquer ambiente. Equipado com o processador Exynos 1280, este smartphone proporciona um desempenho suave e eficiente para todas as suas tarefas. O sistema de câmera tripla de 50MP, com estabilização óptica de imagem (OIS), permite capturar fotos e vídeos com qualidade profissional. Com conectividade 5G e um design moderno, o Galaxy M34 5G é a escolha perfeita para quem busca um smartphone com bateria de longa duração e recursos avançados.`, 
    whatsInTheBox: [
      "1x Smartphone Samsung Galaxy M34 5G",
      "1x Carregador original Samsung (25W)",
      "1x Cabo USB-C para USB-C",
      "1x Chave ejetora de chip",
      "1x Manual do usuário"
    ],
    warrantyAndSecurity: [
      "Produto original com nota fiscal",
      "Garantia de fábrica de 1 ano",
      "Compra 100% segura com criptografia de ponta a ponta"
    ],
    socialProof: {
      sold: "Mais de 950 vendidos",
      averageRating: "4.9 / 5"
    },
    reviews: [
      {
        name: "Marcelo Santos",
        photo: "/reviews/user5.png",
        rating: 5,
        comment: "A bateria de 6000mAh é um espetáculo! Consigo usar o dia todo sem me preocupar. O celular é rápido e a câmera é ótima. Recomendo!"
      },
      {
        name: "Vanessa Lima",
        photo: "/reviews/user6.png",
        rating: 5,
        comment: "Adorei meu Galaxy M34 5G! A tela é linda e a performance é excelente. As fotos ficam com cores vibrantes. Super satisfeita!"
      },
      {
        name: "Paulo Henrique",
        photo: "/reviews/user1.png",
        rating: 4,
        comment: "Bom celular, mas o carregador poderia ser mais potente para uma bateria tão grande. No geral, muito bom pelo preço."
      },
      {
        name: "Renata Almeida",
        photo: "/reviews/user7.png",
        rating: 5,
        comment: "Chegou em perfeito estado, bem embalado. A bateria é o grande diferencial, dura muito. A câmera com OIS é um bônus. Recomendo a loja!"
      }
    ]
  }
];

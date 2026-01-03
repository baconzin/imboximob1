// Mock data - Imóveis
const properties = [
    {
        id: 1,
        title: "Casa Moderna em Condomínio Fechado",
        description: "Linda casa moderna com acabamento de primeira linha, localizada em condomínio fechado com segurança 24h. Ampla área de lazer com piscina, churrasqueira e jardim. Cozinha planejada, 3 suítes com closet.",
        price: 850000,
        area: 250,
        type: "sale",
        location: "Campinas, SP",
        bedrooms: 3,
        bathrooms: 4,
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
        ],
        features: [
            "Piscina",
            "Churrasqueira",
            "Jardim",
            "Garagem para 4 carros"
        ]
    },
    {
        id: 2,
        title: "Apartamento Completo no Centro",
        description: "Apartamento totalmente mobiliado e equipado, pronto para morar. Localização privilegiada próximo a comércios, escolas e transporte público. Condomínio com piscina, academia e salão de festas.",
        price: 2500,
        area: 85,
        type: "rent",
        location: "Valinhos, SP",
        bedrooms: 2,
        bathrooms: 2,
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
            "https://images.unsplash.com/photo-1502672260066-6bc35f0a1f80?w=800",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
            "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800"
        ],
        features: [
            "Mobiliado",
            "Piscina",
            "Academia",
            "Salão de festas"
        ]
    },
    {
        id: 3,
        title: "Terreno Rural com Nascente de Água",
        description: "Excelente terreno rural de 5000m² com nascente de água própria, solo fértil e vegetação preservada. Ideal para construção de chácara ou projeto agrícola. Acesso por estrada de terra em bom estado, a 15 minutos da cidade.",
        price: 180000,
        area: 5000,
        type: "rural",
        location: "Zona Rural - Indaiatuba, SP",
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800"
        ],
        features: [
            "Nascente de água",
            "Solo fértil",
            "Vegetação nativa",
            "Escritura registrada"
        ]
    },
    {
        id: 4,
        title: "Chácara com Casa Sede",
        description: "Belíssima chácara de 10.000m² com casa sede de 200m² totalmente reformada. Pomar com árvores frutíferas, lago para pesca, curral e cocheira. Perfeita para quem busca qualidade de vida no campo mantendo proximidade com a cidade.",
        price: 650000,
        area: 10000,
        type: "rural",
        location: "Zona Rural - Jundiaí, SP",
        bedrooms: 4,
        bathrooms: 3,
        images: [
            "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800",
            "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800",
            "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800",
            "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=800"
        ],
        features: [
            "Pomar",
            "Lago para pesca",
            "Curral",
            "Casa sede reformada",
            "Energia elétrica"
        ]
    },
    {
        id: 5,
        title: "Lote em Loteamento Rural Regularizado",
        description: "Lote de 1000m² em loteamento rural totalmente regularizado e escriturado. Infraestrutura completa com energia elétrica, água de poço artesiano e portaria. Localização estratégica com fácil acesso pela rodovia. Ideal para construção de casa de campo.",
        price: 120000,
        area: 1000,
        type: "rural",
        location: "Loteamento Recanto Verde - Itatiba, SP",
        images: [
            "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
            "https://images.unsplash.com/photo-1511497584788-876760111969?w=800"
        ],
        features: [
            "Loteamento regularizado",
            "Energia elétrica",
            "Água de poço",
            "Portaria",
            "Escritura"
        ]
    },
    {
        id: 6,
        title: "Sobrado em Condomínio Residencial",
        description: "Sobrado com excelente localização em condomínio residencial. Projeto moderno com ambientes amplos e muita iluminação natural. Área gourmet completa e espaço para piscina.",
        price: 1200000,
        area: 320,
        type: "sale",
        location: "Hortolândia, SP",
        bedrooms: 4,
        bathrooms: 5,
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
            "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800",
            "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800"
        ],
        features: [
            "Área gourmet",
            "Espaço para piscina",
            "Closet",
            "Lavabo",
            "Garagem para 3 carros"
        ]
    }
];
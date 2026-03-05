const parts = [
    {
        id: '1',
        name: 'Engrenagem A1',
        category: 'Transmissão',
        material: 'Aço Inoxidável',
        description: 'Engrenagem de alta precisão para sistemas de transmissão industrial.',
        specifications: 'Diâmetro: 50mm, Dentes: 24'
    },
    {
        id: '2',
        name: 'Rolamento B2',
        category: 'Suporte',
        material: 'Cromo-Aço',
        description: 'Rolamento de esferas com vedação dupla para ambientes agressivos.',
        specifications: 'Carga Máxima: 5000N, RPM: 12000'
    },
    {
        id: '3',
        name: 'Válvula C3',
        category: 'Hidráulica',
        material: 'Latão',
        description: 'Válvula de controle de fluxo para sistemas hidráulicos de média pressão.',
        specifications: 'Pressão Máxima: 150 bar, Conexão: 1/2"'
    },
    {
        id: '4',
        name: 'Sensor S4',
        category: 'Eletrônica',
        material: 'Polímero/Metal',
        description: 'Sensor de proximidade indutivo para detecção de metais.',
        specifications: 'Alcance: 10mm, Tensão: 12-24V DC'
    },
    {
        id: '5',
        name: 'Bomba P5',
        category: 'Hidráulica',
        material: 'Aço Inoxidável',
        description: 'Bomba centrífuga para sistemas hidráulicos de média pressão.',
        specifications: 'Vazão: 100 L/min, Pressão: 100 bar'
    },
    {
        id: '6',
        name: 'Motor M6',
        category: 'Eletrônica',
        material: 'Alumínio',
        description: 'Motor elétrico de baixa potência para aplicações industriais.',
        specifications: 'Potência: 1000W, Tensão: 220V AC, Rotação: 1500 RPM'
    },
    {
        id: '7',
        name: 'Filtro F7',
        category: 'Hidráulica',
        material: 'Plástico',
        description: 'Filtro de óleo para sistemas hidráulicos.',
        specifications: 'Fluxo Máximo: 100 L/min, Pressão Máxima: 100 bar'
    },
    {
        id: '8',
        name: 'Correia C8',
        category: 'Transmissão',
        material: 'Couro',
        description: 'Correia de transmissão para sistemas mecânicos.',
        specifications: 'Comprimento: 1000mm, Largura: 20mm'
    },
    {
        id: '9',
        name: 'Parafuso P9',
        category: 'Fixação',
        material: 'Aço Inoxidável',
        description: 'Parafuso de cabeça achatada para fixação de peças.',
        specifications: 'Diâmetro: 10mm, Comprimento: 20mm'
    },
    {
        id: '10',
        name: 'Placa de Circuito PC10',
        category: 'Eletrônica',
        material: 'Plástico',
        description: 'Placa de circuito impresso para aplicações eletrônicas.',
        specifications: 'Dimensões: 100x50mm, Camadas: 4'
    },
];

export const partService = {
    getParts: () => {
        return parts;
    },
    getPartById: (id) => {
        return parts.find(part => part.id === id);
    }
};

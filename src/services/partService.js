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
    }
];

export const partService = {
    getParts: () => {
        return parts;
    },
    getPartById: (id) => {
        return parts.find(part => part.id === id);
    }
};

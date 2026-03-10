Aqui está tudo em um único código, pronto para copiar e colar direto no arquivo README.md do GitHub:

# 🧩 PartFinder – Catálogo de Peças

Aplicativo mobile desenvolvido como **Projeto Integrador do curso de Desenvolvimento de Sistemas do SENAI**.

O **PartFinder** permite consultar peças técnicas de forma rápida através de um catálogo integrado a uma **API REST**.

---

# 👨‍💻 Integrantes

- Beatriz  
- Fabrício  
- Bruno  
- Marcelo  

📅 Ano: **2026**

---

# 📱 Sobre o Projeto

O **PartFinder** é um aplicativo mobile desenvolvido com **React Native + Expo** que permite visualizar um catálogo de peças técnicas.

O aplicativo consome dados de uma **API hospedada online**, exibindo informações detalhadas de cada peça.

Cada item do catálogo apresenta:

- Nome da peça
- Categoria
- Código
- Preço
- Descrição
- Tamanho
- Peso
- Manual técnico
- Imagem do produto

Esse sistema pode ser utilizado por:

- Oficinas mecânicas
- Lojas de peças
- Empresas de manutenção
- Técnicos industriais
- Estudantes da área técnica

---

# 🎯 Objetivo do Projeto

## Objetivo Geral

Desenvolver um aplicativo mobile integrado a uma **API REST** para consulta de peças técnicas.

## Objetivos Específicos

- Criar um aplicativo mobile funcional
- Integrar o aplicativo a uma API
- Exibir catálogo de peças
- Permitir busca por nome
- Mostrar detalhes técnicos das peças
- Demonstrar integração entre frontend e backend

---

# 🏗 Arquitetura do Sistema

O sistema segue o modelo **cliente-servidor**, onde o aplicativo mobile consome dados de uma API externa.

### Fluxo de funcionamento

1. O usuário abre o aplicativo  
2. O aplicativo faz uma requisição HTTP para a API  
3. A API retorna os dados das peças  
4. O aplicativo exibe o catálogo  
5. O usuário seleciona uma peça  
6. O aplicativo exibe os detalhes da peça  

---

# 🛠 Tecnologias Utilizadas

## Frontend

- React Native
- Expo
- React Navigation
- Axios

## Backend

- API REST
- JSON

## Ferramentas de Desenvolvimento

- Node.js
- Expo CLI
- Android Emulator
- Visual Studio Code

---

# 📂 Estrutura do Projeto


src
├── components
│ └── PartCard.js
│
├── screens
│ ├── HomeScreen.js
│ └── DetailsScreen.js
│
├── navigation
│ └── AppNavigator.js
│
├── services
│ └── Api.js
│
└── theme
└── colors.js

App.js
index.js
package.json
app.json


---

# 📄 Explicação dos Arquivos

## App.js

Arquivo principal da aplicação.

Responsável por:

- iniciar o aplicativo
- configurar a barra de status
- carregar o sistema de navegação

---

## index.js

Arquivo responsável por registrar o aplicativo no ambiente **Expo**.

Ele conecta o componente principal do aplicativo ao sistema.

---

## package.json

Arquivo responsável por gerenciar as dependências do projeto.

Principais bibliotecas utilizadas:

- React
- React Native
- Axios
- React Navigation
- Expo

---

## Api.js

Arquivo responsável por configurar a comunicação com a API.

```javascript
import axios from "axios";

export const baseURL = 'https://api-senai-dusky.vercel.app';

const Api = axios.create({
  baseURL: baseURL
});

export default Api;
HomeScreen.js

Tela principal do aplicativo.

Funções principais:

buscar peças da API

exibir lista de peças

permitir busca por nome

navegar para tela de detalhes

DetailsScreen.js

Tela responsável por exibir os detalhes da peça selecionada.

Informações exibidas:

imagem da peça

nome

categoria

preço

descrição

manual

código do produto

PartCard.js

Componente responsável por exibir cada item da lista de peças.

Exibe:

imagem

nome

categoria

preço

AppNavigator.js

Define a navegação entre as telas do aplicativo.

Telas disponíveis:

Home

Details

colors.js

Arquivo responsável por definir o padrão de cores da aplicação.

Define cores como:

background

primary

text

border

error

🌐 API
Base URL
https://api-senai-dusky.vercel.app
Endpoint – Listar Peças
GET /api
Exemplo de resposta da API
{
  "empresa": "SENAI Peças Final",
  "total_itens": 16,
  "catalogo": [
    {
      "id": 1,
      "codigo": "MOT-001",
      "nome": "Pistão Forjado 86mm",
      "categoria": "Motor",
      "preco": 650.00,
      "estoque": 12,
      "imagem": "/imagens/pistao-manual.jpeg",
      "tamanho": "86mm (Diâmetro)",
      "peso": "450g",
      "manual": "Manual técnico de instalação",
      "descricao": "Pistão de alta performance"
    }
  ]
}
🗄 Modelo de Dados (DER)
PECA
-------------------------
id (PK)
codigo
nome
categoria
preco
estoque
imagem
tamanho
peso
manual
descricao
🔄 Fluxo do Aplicativo
Usuário abre aplicativo
      ↓
Tela Home
      ↓
Busca peça
      ↓
Seleciona peça
      ↓
Tela Details
      ↓
API retorna dados
🚀 Como Executar o Projeto
1️⃣ Instalar dependências
npm install
2️⃣ Iniciar o projeto
npx expo start
3️⃣ Abrir no

Expo Go

Android Emulator

Navegador

📚 Projeto Acadêmico

Este projeto foi desenvolvido como Projeto Integrador do curso de Desenvolvimento de Sistemas do SENAI, com foco em:

Desenvolvimento Mobile

Consumo de APIs

Arquitetura Cliente-Servidor

Organização de projetos React Native

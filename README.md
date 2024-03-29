# Tech-Challenge

Desafio desenvolvido fase04 do curso de Software Architecture da FIAP Pós Tech.

## Saga Coreografado
[SAGA.md](https://github.com/PedroVCorsino/Tech-Challenge-Producao/blob/main/SAGA.md) 

## Escolha das tecnologias
### Linguagem
- TypeScript
    - TypeScript, uma extensão tipada do JavaScript, oferece um desenvolvimento mais rápido e seguro. Seu sistema de tipos ajuda a prevenir erros em tempo de execução, permitindo que os desenvolvedores identifiquem problemas rapidamente, economizando tempo e recursos. Isso se traduz em um desenvolvimento mais ágil e menos propenso a erros, ideal para aplicações que precisam evoluir rapidamente.

### Framework
- Nest.JS
  - Nest.js, um framework poderoso para aplicações server-side, é construído em TypeScript e oferece uma arquitetura eficiente e escalável. Seu design modular e a integração fácil com outras bibliotecas e ferramentas tornam o Nest.js uma escolha excelente para criar aplicações de alto desempenho com menor consumo de recursos de hardware. Isso se traduz em economia direta, especialmente em ambientes de cloud computing onde os recursos são cobrados conforme o uso.

### Repositorio de dados
- Redis
    - Quando se trata de banco de dados, o Redis, um armazenamento de dados NoSQL em memória, é conhecido pela sua excepcional velocidade. Ele é capaz de realizar operações de leitura e escrita com latências extremamente baixas, o que é crucial para aplicações que exigem respostas rápidas em tempo real. Além disso, o Redis é altamente escalável e pode ser facilmente distribuído, garantindo que a aplicação possa crescer sem enfrentar gargalos de desempenho.

A combinação de TypeScript, Nest.js e Redis oferece uma plataforma que não exigi um investimento significativo em hardware porem oferece rapidez e velocidade. É ideal para que a cozinha e os clientes possam acompanhar a fila de produção de pedidos e a atualização do status dos mesmos sem onerar o restante do sistema. 

## Documentação do sistema (DDD) utilizando a linguagem ubíqua.
### Contextos delimitados
- Cozinha (Preparação e entrega do pedido)
  ![image](https://github.com/PedroVCorsino/Tech-Challenge/assets/61948860/823b0576-5524-4397-9411-6805505dfb85)

### Domínios
- Subdomínio Principal:
    - Comida
- Subdomínio Genérico:
    - Lógica de pagamento integrada ao mercado pago.
- Subdomínio Suporte:
    - Gestão de estoque,
    - funcionários, clientes,
    - estratégias de marketing


### Dicionário de linguagem ubíqua
- Identificação: Pode se identificar usando CPF, nome, e-mail ou não se identificar.
- Produto: Quaisquer itens vendidos pela lanchonete, divididos nas categorias Lanche, Acompanhamento, Bebida e Sobremesa.
- Combo: É uma oferta especial que combina um lanche, um acompanhamento, uma bebida e uma sobremesa por um preço promocional.
- Lanche: Refere-se ao item principal do cardápio, geralmente um sanduíche ou hambúrguer, ou uma opção de refeição vegana.
 - Acompanhamento: É uma opção adicional que pode ser escolhida juntamente com o lanche. Pode incluir batatas fritas, nuggets, onion rings, salada, ou outras opções de acompanhamentos.
- Bebida: São as opções líquidas disponíveis para serem consumidas junto com o lanche. Isso pode incluir refrigerantes, sucos, água, chás gelados, milkshakes, entre outros.
- Sobremesa: Refere-se a um item do cardápio que é servido após a refeição principal. Pode incluir opções como sorvetes, tortas, bolos, milkshakes especiais ou outras delícias doces.
- Categoria: Ou tipo, se refere a qual tipo de produto entre as opções lanche, acompanhamento, bebida e sobremesa.
---
  

## Autores
- [Diego Amorim](https://github.com/dieg0amorim)
- [Gabriela Ribeiro](https://github.com/gabsribeiro)
- [Luzivan Gois](https://github.com/luzivanmgois)
- [Pedro Vinicius](https://github.com/PedroVCorsino)

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

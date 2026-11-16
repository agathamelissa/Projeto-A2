# Projeto-A2
# Brasa Burger – Burger House

## Sobre o projeto

O **Brasa Burger** é um projeto de desenvolvimento web que apresenta o site de uma hamburgueria fictícia. O objetivo é criar uma experiência visual moderna, intuitiva e responsiva, permitindo que os usuários conheçam o cardápio, visualizem os produtos, pesquisem lanches e adicionem itens a um carrinho de compras.

O projeto foi desenvolvido utilizando **HTML, CSS e JavaScript**, aplicando conceitos de estruturação de páginas, estilização, responsividade e interatividade.

---

## Objetivos do projeto

- Desenvolver uma página web para uma hamburgueria.
- Criar uma identidade visual moderna e temática.
- Organizar os produtos em diferentes categorias.
- Implementar um campo de pesquisa para localizar produtos.
- Desenvolver um carrinho de compras interativo.
- Calcular automaticamente a quantidade de produtos e o valor total do pedido.
- Adaptar o layout para diferentes tamanhos de tela, especialmente dispositivos móveis.

---

## Tecnologias utilizadas

### HTML5
Utilizado para estruturar o conteúdo da página, incluindo:

- Cabeçalho e navegação.
- Banner principal.
- Cardápio e categorias.
- Cards dos produtos.
- Combos promocionais.
- Avaliações de clientes.
- Rodapé com informações de contato e localização.
- Estrutura do carrinho de compras.

### CSS3
Responsável pela aparência e organização visual do site.

Principais recursos utilizados:

- Flexbox e CSS Grid.
- Cores, fontes e gradientes.
- Bordas arredondadas e sombras.
- Efeitos de hover.
- Organização dos cards.
- Estilização do carrinho lateral.
- Media Queries para responsividade em celulares.

### JavaScript
Utilizado para adicionar funcionalidades e interatividade à página.

Principais recursos utilizados:

- `querySelector()` e `querySelectorAll()`.
- `addEventListener()`.
- `forEach()`.
- `if` e `else`.
- `classList`.
- `find()`.
- `push()` e `splice()`.
- `parseFloat()`.
- `toLocaleString()`.
- Manipulação do DOM.
- Criação dinâmica de elementos HTML.

---

## Organização dos arquivos

A estrutura do projeto está organizada da seguinte maneira:

```text
Brasa-Burger/
│
├── index.html
│
├── Styles/
│   └── style.css
│
├── scripts/
│   └── script.js
│
└── assets/
    ├── favicon.png
    ├── banner.png
    │
    └── cardapio.imagens/
        ├── Brasa burger bacon.png
        ├── Double costela.png
        ├── Gorgonzola e mel picante.png
        ├── Smash duplo.png
        ├── Smash Trufado.png
        ├── Smash kids.png
        ├── Batata Rustica.png
        ├── Anéis de cebola crocantes.png
        ├── balde de frango.png
        ├── coca.png
        ├── fanta.png
        ├── Milk shake.png
        └── Hambúrguer Duplo com Fritas e Fanta.png
```

### Função de cada arquivo

- **index.html:** contém toda a estrutura e o conteúdo principal do site.
- **style.css:** reúne as regras de estilização, cores, fontes, posicionamento e responsividade.
- **script.js:** contém as funcionalidades de filtro, pesquisa e carrinho de compras.
- **assets/:** armazena o favicon, o banner e os arquivos de imagem utilizados no projeto.
- **cardapio.imagens/:** reúne as imagens dos produtos e combos.

---

## Funcionalidades do site

### 1. Página inicial

A página inicial apresenta a identidade visual da Brasa Burger, com:

- Logo e nome da hamburgueria.
- Barra de navegação.
- Aviso promocional.
- Banner principal com imagem e apresentação da marca.
- Botão para acessar o cardápio.

### 2. Cardápio

Os produtos são apresentados em cards individuais, contendo:

- Imagem do produto.
- Nome.
- Descrição.
- Preço.
- Botão para adicionar ao carrinho.

O cardápio está dividido em quatro categorias:

- Todos.
- Na Brasa.
- Smash Burger.
- Porções e Fritas.
- Bebidas e Shakes.

### 3. Filtro por categoria

O filtro permite visualizar os produtos de acordo com a categoria selecionada.

Quando o usuário clica em uma categoria, o JavaScript identifica a opção escolhida e exibe somente os produtos correspondentes.

Também existe a opção "Todos", que permite visualizar novamente todos os produtos.

### 4. Campo de busca

O campo de pesquisa permite localizar produtos pelo nome.

A pesquisa acontece enquanto o usuário digita, sem precisar atualizar a página.

O sistema também permite combinar a pesquisa com o filtro de categorias.

### 5. Combos promocionais

O site possui uma seção específica para apresentar combos, com imagens, descrições, preços e botão para adicionar ao carrinho.

### 6. Avaliações

A seção de avaliações apresenta comentários ilustrativos de clientes, acompanhados de classificação por estrelas.

O objetivo é demonstrar como a experiência dos consumidores pode ser apresentada dentro do site.

### 7. Carrinho de compras

O carrinho é uma das principais funcionalidades interativas do projeto.

Ao clicar no ícone do carrinho, uma aba lateral é exibida.

O usuário pode:

- Adicionar produtos ao carrinho.
- Adicionar novamente um produto que já está no carrinho, aumentando sua quantidade.
- Visualizar o preço individual.
- Consultar a quantidade de cada produto.
- Visualizar o subtotal de cada item.
- Acompanhar a quantidade total de produtos.
- Conferir o valor total do pedido.
- Remover produtos do carrinho.

O JavaScript utiliza um array chamado `carrinho` para armazenar temporariamente os produtos adicionados.

Cada produto é representado por três informações:

```javascript
{
    nome: nome,
    preco: preco,
    quantidade: 1
}
```

O valor total é calculado multiplicando o preço pela quantidade de cada produto e somando os subtotais.

### 8. Finalização do pedido

O botão "Finalizar Pedido" verifica se o carrinho possui produtos.

Caso esteja vazio, apresenta uma mensagem informando que não existem itens no carrinho.

Caso tenha produtos, apresenta uma mensagem de confirmação.

**Observação:** nesta versão, a finalização é apenas demonstrativa. O site ainda não possui integração com sistema de pagamento, banco de dados ou envio automático do pedido.

### 9. Responsividade

O projeto possui uma configuração de responsividade utilizando Media Queries.

O objetivo é adaptar a apresentação do site para celulares, ajustando:

- Barra de navegação.
- Tamanho dos textos.
- Imagens do banner.
- Botões e categorias.
- Campo de pesquisa.
- Cards dos produtos.
- Seção de combos.
- Avaliações.
- Rodapé.
- Carrinho de compras.

A configuração para celular utiliza:

```css
@media screen and (max-width: 600px) {
    /* Estilos para dispositivos móveis */
}
```
## Conhecimentos aplicados

Durante o desenvolvimento deste projeto, foram trabalhados conceitos importantes de desenvolvimento web:

- Estruturação de páginas com HTML5.
- Estilização e organização de elementos com CSS3.
- Utilização de Flexbox e Grid Layout.
- Criação de layouts responsivos.
- Manipulação de elementos HTML com JavaScript.
- Eventos de clique e digitação.
- Filtros e pesquisas dinâmicas.
- Cálculos matemáticos com JavaScript.
- Organização de arquivos e pastas.
- Integração entre HTML, CSS e JavaScript.

---

# Possíveis melhorias futuras

O projeto poderá receber novas funcionalidades, como:

- Integração do carrinho com WhatsApp.
- Finalização real de pedidos.
- Cadastro e gerenciamento de produtos.
- Integração com banco de dados.
- Formas de pagamento.
- Controle de quantidade dos produtos diretamente no carrinho.
- Armazenamento dos itens do carrinho mesmo após atualizar a página.

---

# Considerações finais

O Brasa Burger foi desenvolvido como um projeto de prática e aprendizado em desenvolvimento web, com o objetivo de aplicar conhecimentos de HTML, CSS e JavaScript em uma situação próxima de um projeto real.

Além da construção visual da página, o desenvolvimento permitiu trabalhar com funcionalidades interativas, organização de código, manipulação do DOM e adaptação para dispositivos móveis.

**Projeto desenvolvido para fins educacionais e de aprendizado.**
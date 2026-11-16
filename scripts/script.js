
// ===================================
// 1. FILTRO POR CATEGORIA
// ===================================

const botoesCategorias = document.querySelectorAll(".categorias button");
const produtos = document.querySelectorAll(".produtos > div");

let categoriaSelecionada = "todos";

botoesCategorias.forEach(function(botao) {

    botao.addEventListener("click", function() {

        botoesCategorias.forEach(function(item) {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        if (botao.classList.contains("lanches")) {
            categoriaSelecionada = "brasa";
        } 
        else if (botao.classList.contains("smash")) {
            categoriaSelecionada = "smash";
        } 
        else if (botao.classList.contains("porcao")) {
            categoriaSelecionada = "porcao";
        } 
        else if (botao.classList.contains("drink")) {
            categoriaSelecionada = "bebidas";
        } 
        else {
            categoriaSelecionada = "todos";
        }

        filtrarProdutos();

    });

});


// ===================================
// 2. CAMPO DE BUSCA
// ===================================

const campoBusca = document.getElementById("busca");

function filtrarProdutos() {

    const pesquisa = campoBusca.value.toLowerCase();

    produtos.forEach(function(produto) {

        const titulo = produto.querySelector("h3");
        const nome = titulo ? titulo.textContent.toLowerCase() : "";

        let categoriaCorreta = false;

        if (categoriaSelecionada === "todos") {
            categoriaCorreta = true;
        }
        else if (categoriaSelecionada === "brasa" && produto.classList.contains("card-lanche")) {
            categoriaCorreta = true;
        }
        else if (categoriaSelecionada === "smash" && produto.classList.contains("smash-lanche")) {
            categoriaCorreta = true;
        }
        else if (categoriaSelecionada === "porcao" && produto.classList.contains("porcao")) {
            categoriaCorreta = true;
        }
        else if (categoriaSelecionada === "bebidas" && produto.classList.contains("bebidas-shakes")) {
            categoriaCorreta = true;
        }

        if (categoriaCorreta && nome.includes(pesquisa)) {
            produto.style.display = "";
        } 
        else {
            produto.style.display = "none";
        }

    });

}

if (campoBusca) {
    campoBusca.addEventListener("input", filtrarProdutos);
}


// ===================================
// 3. CARRINHO DE COMPRAS
// ===================================

const abrirCarrinho = document.getElementById("abrir-carrinho");
const fecharCarrinho = document.getElementById("fechar-carrinho");

const abaCarrinho = document.getElementById("aba-carrinho");
const fundoCarrinho = document.getElementById("fundo-carrinho");

const itensCarrinho = document.getElementById("itens-carrinho");
const contador = document.getElementById("contador");
const totalCarrinho = document.getElementById("total-carrinho");

const botaoFinalizar = document.querySelector(".finalizar-pedido");

let carrinho = [];


// ABRIR CARRINHO

if (abrirCarrinho) {

    abrirCarrinho.addEventListener("click", function() {
        abaCarrinho.classList.add("ativo");
        fundoCarrinho.classList.add("ativo");
    });

}


// FECHAR CARRINHO

function fecharAba() {

    abaCarrinho.classList.remove("ativo");
    fundoCarrinho.classList.remove("ativo");

}

if (fecharCarrinho) {
    fecharCarrinho.addEventListener("click", fecharAba);
}

if (fundoCarrinho) {
    fundoCarrinho.addEventListener("click", fecharAba);
}


// ADICIONAR PRODUTOS

const botoesComprar = document.querySelectorAll(".botao-comprar");

botoesComprar.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const card = botao.closest(
            ".card-lanche, .smash-lanche, .porcao, .bebidas-shakes, .combos-matadores"
        );

        if (!card) return;

        const nome = card.querySelector("h3").textContent.trim();

        const precoTexto = card.querySelector(".valor").textContent;

        // Aceita preço com ponto ou vírgula
        const preco = parseFloat(
            precoTexto.replace("R$", "").trim().replace(",", ".")
        );

        if (isNaN(preco)) {
            alert("Erro ao identificar o preço do produto.");
            return;
        }

        // Verifica se o produto já existe
        const produtoExistente = carrinho.find(function(produto) {
            return produto.nome === nome;
        });

        if (produtoExistente) {
            produtoExistente.quantidade++;
        } 
        else {
            carrinho.push({
                nome: nome,
                preco: preco,
                quantidade: 1
            });
        }

        atualizarCarrinho();

    });

});


// ===================================
// 4. ATUALIZAR CARRINHO E CALCULAR TOTAL
// ===================================

function atualizarCarrinho() {

    itensCarrinho.innerHTML = "";

    let quantidadeTotal = 0;
    let valorTotal = 0;

    carrinho.forEach(function(produto, indice) {

        quantidadeTotal += produto.quantidade;

        const subtotal = produto.preco * produto.quantidade;

        valorTotal += subtotal;

        const item = document.createElement("div");

        item.classList.add("item-carrinho");

        item.innerHTML = `
            <div>
                <h4>${produto.nome}</h4>
                <p>Preço: R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
                <p>Quantidade: ${produto.quantidade}</p>
                <p>Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}</p>
            </div>

            <button class="remover-item" data-indice="${indice}">
                🗑️
            </button>
        `;

        itensCarrinho.appendChild(item);

    });

    // Atualizar quantidade
    contador.textContent = quantidadeTotal;

    // Atualizar valor total
    totalCarrinho.textContent = valorTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    // Mostrar mensagem se estiver vazio
    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = 
            '<p class="carrinho-vazio">Seu carrinho está vazio!</p>';
    }

}


// ===================================
// 5. REMOVER PRODUTOS
// ===================================

itensCarrinho.addEventListener("click", function(event) {

    if (event.target.classList.contains("remover-item")) {

        const indice = Number(event.target.dataset.indice);

        carrinho.splice(indice, 1);

        atualizarCarrinho();

    }

});


// ===================================
// 6. FINALIZAR PEDIDO
// ===================================

if (botaoFinalizar) {

    botaoFinalizar.addEventListener("click", function() {

        if (carrinho.length === 0) {

            alert("Seu carrinho está vazio!");

        } 
        else {

            alert("Pedido adicionado!.");

        }

    });

}


// ATUALIZAR CARRINHO AO ABRIR A PÁGINA

atualizarCarrinho();

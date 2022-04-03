let item1=0;
let item2=0;
let item3=0;
let pratoSelecionado;
let valorPratoSelecionado;
let bebidaSelecionado;
let valorBebidaSelecionado;
let sobremesaSelecionado;
let valorSobremesaSelecionado;


function selecionaPrato(prato){
    let pedidoSelecionado = document.querySelector(".pratos").querySelector(".selecionaPedido");
    console.log(pedidoSelecionado);
    if(pedidoSelecionado !== null){
        pedidoSelecionado.classList.remove("selecionaPedido");
    }
    prato.classList.add("selecionaPedido");
    item1=1;
    console.log(item1)
    confirma(item1,item2,item3);
    pratoSelecionado = prato.querySelector(".nome-item").innerHTML;
    valorPratoSelecionado = (prato.querySelector(".valor-item").querySelector("p").innerHTML);
    console.log(pratoSelecionado)
    console.log(valorPratoSelecionado)
}

function selecionaBebida(bebida){
    let pedidoSelecionado = document.querySelector(".bebidas").querySelector(".selecionaPedido");
    console.log(pedidoSelecionado);
    if(pedidoSelecionado!== null){
        pedidoSelecionado.classList.remove("selecionaPedido");
    }
    bebida.classList.add("selecionaPedido");
    item2=1;
    console.log(item2)
    confirma(item1,item2,item3);
    let bebidaSelecionado = bebida.querySelector(".nome-item").innerHTML;
    let valorBebidaSelecionado = (bebida.querySelector(".valor-item").querySelector("p").innerHTML);
    console.log(bebidaSelecionado)
    console.log(valorBebidaSelecionado)
}

function selecionaSobremesa(sobremesa){
    let pedidoSelecionado = document.querySelector(".sobremesas").querySelector(".selecionaPedido");
    console.log(pedidoSelecionado);
    if(pedidoSelecionado!== null){
        pedidoSelecionado.classList.remove("selecionaPedido");
    }
    sobremesa.classList.add("selecionaPedido");
    item3=1;
    console.log(item3)
    confirma(item1,item2,item3);
    let sobremesaSelecionado = sobremesa.querySelector(".nome-item").innerHTML;
    let valorSobremesaSelecionado = (sobremesa.querySelector(".valor-item").querySelector("p").innerHTML);
    console.log(sobremesaSelecionado)
    console.log(valorSobremesaSelecionado)
}

function confirma(item1,item2,item3){
    if(item1===1 && item2 ===1 && item3===1){
        document.querySelector(".finalizar").classList.add("escondido");
    }
    else{
        console.log("adicione os 3 itens");
    }
    
}


function whatsWeb(){
    let pedido = `Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: R$ 27.70`
}

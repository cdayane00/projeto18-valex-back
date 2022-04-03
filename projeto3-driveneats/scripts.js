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
    valorPratoSelecionado = (prato.querySelector(".valor-item").querySelector("p").innerHTML).replace(",",".").replace("R$"," ");
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
    bebidaSelecionado = bebida.querySelector(".nome-item").innerHTML;
    valorBebidaSelecionado = (bebida.querySelector(".valor-item").querySelector("p").innerHTML).replace(",",".").replace("R$"," ");
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
    sobremesaSelecionado = sobremesa.querySelector(".nome-item").innerHTML;
    valorSobremesaSelecionado = (sobremesa.querySelector(".valor-item").querySelector("p").innerHTML).replace(",",".").replace("R$"," ");
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

function soma(){
    let valor1 = Number(valorPratoSelecionado);
    let valor2 = Number(valorBebidaSelecionado);
    let valor3 = Number(valorSobremesaSelecionado);
    console.log(valor1);
    console.log(valor2);
    console.log(valor3);
    let soma = valor1+valor2+valor3;
    soma.toFixed(1);
    console.log(soma.toFixed(2));
}

function whatsWeb(){
    let valor1 = Number(valorPratoSelecionado);
    let valor2 = Number(valorBebidaSelecionado);
    let valor3 = Number(valorSobremesaSelecionado);
    let soma = valor1+valor2+valor3;

    let pedido = `Olá, gostaria de fazer o pedido: \n - Prato: ${pratoSelecionado} \n
    - Bebida: ${bebidaSelecionado} \n
    - Sobremesa: ${sobremesaSelecionado} \n
    Total: R$ ${soma.toFixed(2)} \n`

    let uri = window.encodeURIComponent(pedido);
    window.open(`https://wa.me/5592999999999?text= ${uri}`);
}

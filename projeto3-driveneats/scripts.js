let item1=0;
let item2=0;
let item3=0;

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
}

function confirma(item1,item2,item3){
    if(item1===1 && item2 ===1 && item3===1){
        document.querySelector(".finalizar").classList.add("escondido");
    }
    else{
        console.log("adicione os 3 itens");
    }
    
}

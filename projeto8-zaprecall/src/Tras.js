import React from "react";

function Seleciona(props) {
    return (
        <div onClick={props.click} className={props.state}>
            <h4>{props.text}</h4>
        </div>
    );
}

export default function Tras(props) {
    return(
        <li className='tras'>
            <p>{props.answer}</p>
            <Seleciona click={() => {props.setMostraCartas("4"); props.setcartaRespondida([...props.cartaRespondida,{nome:"close-circle-sharp", color:"red"}])}}   state = "errada"   text="Não lembrei"/>
            <Seleciona click={() => {props.setMostraCartas("5"); props.setcartaRespondida([...props.cartaRespondida, {nome:"help-circle-sharp", color:"yellow"}])}} state ="neutra"  text="Quase não lembrei"/>
            <Seleciona click={() => {props.setMostraCartas("6"); props.setcartaRespondida([...props.cartaRespondida,{nome:"checkmark-circle-sharp", color:"green" }])}} state ="certa" text="Zap!"/> 
        </li>
    );
}

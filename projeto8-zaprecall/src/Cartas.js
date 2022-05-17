import React from 'react';
import Tras from './Tras';
import Pergunta from './Pergunta';
import Frente from './Frente';

export default function Cartas(props) {
    const [MostraCartas, setMostraCartas] = React.useState("1");
    if (MostraCartas === "1") {
        return (
            <Pergunta index={props.index} setMostraCartas={setMostraCartas}/>
        );
        
    } 
    if (MostraCartas === "2") {
        return (
            <Frente question={props.question} setMostraCartas={setMostraCartas}/>
        )
    }
    if (MostraCartas === "3") {
        return (
            <Tras setcartaRespondida={props.setcartaRespondida} cartaRespondida={props.cartaRespondida} answer={props.answer} setMostraCartas={setMostraCartas}/>
        );
    } 
    if (MostraCartas === "4") {
        return (
            <li className="perguntas">
                <h1 className='risca vermelho'>Pergunta {props.index + 1}</h1>
                <ion-icon name="close-circle-sharp"></ion-icon>
            </li>
        );
    }  
    if (MostraCartas === "5") {
        return (
            <li className="perguntas">
                <h1 className=' risca amarelo'>Pergunta {props.index + 1}</h1>
                <ion-icon name="help-circle-sharp"></ion-icon>
            </li>
        );
        
    } 
    if(MostraCartas === "6") {
        return (
            <li className="perguntas">
                <h1 className='risca verde'>Pergunta {props.index + 1}</h1>
                <ion-icon name="checkmark-circle-sharp"></ion-icon>
            </li>
        );
        
    }
}
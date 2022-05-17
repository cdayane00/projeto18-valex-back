import React from "react";
export default function Frente(props) {
    return(
        <li className="frente">
            <p>{props.question}</p>
            <ion-icon onClick={() => props.setMostraCartas("3")} name="refresh-outline"></ion-icon>
        </li> 
    );
}
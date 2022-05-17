import React from 'react';
import logo from "./assets/logo.png";

export default function Tela1({setInit}){
    return(
        <div className="inicio">
            <img className="imgLogo" src={logo} />
            <h1>ZapRecall</h1>
            <button onClick={()=>setInit(true)} className="iniciar"> 
                <h3>Iniciar Recall!</h3>  
            </button> 
        </div>
    )
}



import React from 'react';
import Cartas from './Cartas';
import logo from './assets/logo.png';
import Footer from './Footer';
export default function Main() {
    const Carta = [
        {
            Q: "O que é JSX?",
            R: "Uma extensão de linguagem do JavaScript"
        },
        {
            Q: "O React é __",
            R: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            Q: "Componentes devem iniciar com __",
            R: "letra maiúscula"
        },
        {
            Q: "Podemos colocar __ dentro do JSX",
            R: "expressões"
        },
        {
            Q: "O ReactDOM nos ajuda __",
            R: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            Q: "Usamos o npm para __",
            R: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            Q: "Usamos props para __",
            R: "passar diferentes informações para componentes"
        },
        {
            Q: "Usamos estado (state) para __",
            R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ];
    function shuffleArray() {
        for (let i = Carta.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [Carta[i], Carta[j]] = [Carta[j], Carta[i]];
        }
        return Carta;
    }
    const[carta, setCarta] = React.useState(shuffleArray);
    const[cartaRespondida, setcartaRespondida] = React.useState([]);
    return(
        <div>
            <header>
                <img className='logo-menor' src={logo}/>
                <h1 className='topo-H1'>ZapRecall</h1>
            </header>
            <ul>
                {carta.map((question, index) => <Cartas setcartaRespondida={setcartaRespondida} cartaRespondida={cartaRespondida} key={index} index={index} question={question.Q} answer={question.R}/> )}
            </ul>
            <Footer tamanho={cartaRespondida.length} cartaRespondida={cartaRespondida}/>
        </div>
    );  
}
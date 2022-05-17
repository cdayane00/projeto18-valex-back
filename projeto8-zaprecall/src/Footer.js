import feliz from './assets/party.png';
import triste from './assets/sad.png'

export default function Footer(props) {
    let contador = 0;
    if(props.tamanho === 8) {
        for(let i = 0; i < props.tamanho; i++) {
            if(props.cartaRespondida[i].nome === "close-circle-sharp") {
                contador += 1;
            }
        }
    }
    if(props.tamanho < 8) {
        return (
            <footer className="footer">
                <p>{props.tamanho}/8 CONCLUÍDOS</p>
                <div>
                    {props.cartaRespondida.map((icon, index) =><ion-icon key={index} name={icon.nome}></ion-icon> )}
                </div>
            </footer>
        );
    }

    if (props.tamanho === 8) {
        if(contador === 0) {
            return (
                <footer className="footerM">
                    <span>
                        <img src={feliz}/>
                        <h3 className='msg'>Parabéns</h3>
                    </span>
                    <p className='msg1'>Você não esqueceu de nenhum flashcard!</p>
                    <p>8/8 CONCLUÍDOS</p>
                    <div>
                        {props.cartaRespondida.map((icon, index) =><ion-icon key={index} name={icon.nome}></ion-icon> )}
                    </div>
                </footer>
            );
        } else {
            return (
                <footer className="footerM">
                    <span>
                        <img src={triste}/>
                        <h3 className='msg'>Putz...</h3>
                    </span>
                    <p className='msg1'>Ainda faltam alguns...Mas não desanime!</p>
                    <p>8/8 CONCLUÍDOS</p>
                    <div>
                        {props.cartaRespondida.map((icon, index) =><ion-icon key={index} name={icon.nome}></ion-icon> )}
                    </div>
                </footer>
            );
        }   
    }
}
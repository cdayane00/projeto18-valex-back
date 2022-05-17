export default function Pergunta(props) {
    return(
        <li className="perguntas">
            <p>Pergunta {props.index + 1}</p>
            <ion-icon onClick={() => props.setMostraCartas("2")} name="play-outline"></ion-icon>
        </li>
    );
}
import Card from "./Card";
import Header from "./Header";

function Pergunta(){
    return(
        <div className="tela-pergunta">
            <Header />
            <article className="pergunta-card">
                <p>O que é JSX?</p>
                <img src="./assets/img/girar.svg" alt=""></img>
            </article>
        </div>
    )
}

export default Pergunta;

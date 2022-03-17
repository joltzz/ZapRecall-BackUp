
import Header from "./Header";

function Respostas(){
    return (
        <>
            <Header />
            <div className="caixa-pergunta">
                <div className="resposta-pergunta">
                    <h3> JSX é uma sintaxe para<br/> escrever HTML dentro do JS</h3>
                    <div className="botoes-resposta">
                        <button className="nao-lembrei red"><p>Não lembrei</p></button>
                        <button className="quase-lembrei orange"><p>Quase não lembrei</p></button>
                        <button className="zap green"><p>Zap!</p></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Respostas;



function Respostas() {
    return (
        <div className="caixa-pergunta">
            <div className="resposta-pergunta">
                <h3>{resposta}</h3>
                <div className="botoes-resposta">
                    <button
                        className="nao-lembrei red"
                        onClick={() => {
                            setGirarPergunta(girarPergunta + 1);
                            setRespostaBotao("nao-lembrei")
                        }}>
                        <p>Não lembrei</p></button>

                    <button
                        className="quase-lembrei orange"
                        onClick={() => {
                            setGirarPergunta(girarPergunta + 1);
                            setRespostaBotao("quase-lembrei")
                        }}>
                        <p>Quase não lembrei</p></button>

                    <button
                        className="zap green"
                        onClick={() => {
                            setGirarPergunta(girarPergunta + 1);
                            setRespostaBotao("lembrei")
                        }}>
                        <p>Zap!</p></button>
                </div>
            </div>
        </div>
    )
}
export default Respostas;


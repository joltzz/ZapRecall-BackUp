
function Pergunta(){
    return(
        <div className="tela-pergunta">
            <article className="pergunta-card">
                <p>{pergunta}</p>
                <img src="./assets/img/girar.svg" 
                alt=""
                onClick={()=>setGirarPergunta(girarPergunta + 1)}
                />
            </article>
        </div>
    )
}

export default Pergunta;

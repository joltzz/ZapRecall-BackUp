import React from "react";

function Card(props) {

    const {pergunta, resposta , index , callback} =props;
    const [girarPergunta, setGirarPergunta]=React.useState(0);
    const [respostaBotao, setRespostaBotao]=React.useState("");

    function RespostaClick(botao){
        let icone;
        setGirarPergunta(girarPergunta + 1);
        setRespostaBotao(botao);
        if(respostaBotao==="card-lembrou verde"){icone="./assets/img/lembrei_zap.svg"}
        if(respostaBotao==="card-quase-lembrou laranja"){icone="./assets/img/quase_lembrei.svg"}
        if(respostaBotao==="card-nao-lembrou vermelho"){icone="./assets/img/nao_lembrei.svg"}
        callback(icone);
    }


    if(girarPergunta===0){
        return (
            <div className="opcao">
                <div className="card" onClick={()=>setGirarPergunta(girarPergunta +1)}>
                    <p>Pergunta {index + 1}</p>
                    <img src="./assets/img/play.svg" alt="" />
                </div>
            </div>
        )
    }
    if(girarPergunta===1){
        //Deu ruim, tive que colocar direto mesmo :(
            return(
                <div className="tela-pergunta">
                    <article className="pergunta-card">
                        <p>{pergunta}</p>
                        <img src="./assets/img/girar.svg" alt=""
                        onClick={()=>setGirarPergunta(girarPergunta + 1)}/>
                    </article>
                </div>
            )
    }
    if(girarPergunta===2){
        return (
            <div className="caixa-pergunta">
                <div className="resposta-pergunta">
                    <h3>{resposta}</h3>
                    <div className="botoes-resposta">
                        <button
                            className="nao-lembrei red"
                            onClick={() => RespostaClick("card-nao-lembrou vermelho")}>
                            <p>Não lembrei</p></button>
                        <button
                            className="quase-lembrei orange"
                            onClick={() => RespostaClick("card-quase-lembrou laranja")}>
                            <p>Quase não lembrei</p></button>
                        <button
                            className="zap green"
                            onClick={() => RespostaClick("card-lembrou verde")}>
                            <p>Zap!</p></button>
                    </div>
                </div>
            </div>
        )
    }
    if(girarPergunta===3){
        const classe=`card ${respostaBotao}`
        let icone;
        callback();
        if(respostaBotao==="card-lembrou verde"){icone="./assets/img/lembrei_zap.svg"}
        if(respostaBotao==="card-quase-lembrou laranja"){icone="./assets/img/quase_lembrei.svg"}
        if(respostaBotao==="card-nao-lembrou vermelho"){icone="./assets/img/nao_lembrei.svg"}
        return (
            <div className="opcao">
                <div className={classe}>
                    <p>Pergunta {index + 1}</p>
                    <img src={icone} alt="" />
                </div>
            </div>
        )
    }
}

export default Card;
import React from "react";
import setinha from "../assets/img/setinha.png";

export default function Cards({ pergunta, resposta, index, callback }) {
  const [estado, setEstado] = React.useState(0);
  const [respBotao, setRespBotao] = React.useState();

  function clickResposta(botao) {
    let icon;
    setRespBotao(botao);
    setEstado(estado + 1);
    if (botao === "resp-nao") icon = "close-circle";
    if (botao === "resp-quase") icon = "help-circle";
    if (botao === "resp-zap") icon = "checkmark-circle";
    callback(icon);
  }
  // // useState(0) - Card sem ter sido pressionada;
  // // 1 -- Card/Question
  // // 2 -- Card
  // // 3 -- 0 riscado + icone

  if (estado === 0) {
    return (
      <div className="pergunta">
        <div className="pergunta-frente" onClick={() => setEstado(estado + 1)}>
          <p>Pergunta {index + 1}</p>
          <ion-icon name="play-outline"></ion-icon>
        </div>
      </div>
    );
  }
  if (estado === 1) {
    return (
      <div className="pergunta">
        <div className="pergunta-costa">
          <div className="pergunta-costa-intro">
            <p>{pergunta}</p>
            <img src={setinha} alt="" onClick={() => setEstado(estado + 1)} />
          </div>
        </div>
      </div>
    );
  }
  if (estado === 2) {
    return (
      <div className="pergunta">
        <div className="pergunta-costa">
          <div className="pergunta-costa-resposta">
            <p>{resposta}</p>
            <div className="buttons">
              <button
                className="btn-nao-lembrei"
                onClick={() => clickResposta("resp-nao")}
              >
                Não lembrei
              </button>
              <button
                className="btn-quase-nao"
                onClick={() => clickResposta("resp-quase")}
              >
                Quase não lembrei
              </button>
              <button
                className="btn-zap"
                onClick={() => clickResposta("resp-zap")}
              >
                Zap!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (estado === 3) {
    const css = `pergunta ${respBotao}`;
    let icon;
    if (respBotao === "resp-nao") icon = "close-circle";
    if (respBotao === "resp-quase") icon = "help-circle";
    if (respBotao === "resp-zap") icon = "checkmark-circle";
    return (
      <div className={css}>
        <div className="pergunta-frente">
          <p>Pergunta {index + 1}</p>
          <ion-icon name={icon}></ion-icon>
        </div>
      </div>
    );
  }
}

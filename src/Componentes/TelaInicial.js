import React from "react";

import logo from "../assets/img/logo.png";

export default function TelaInicial({ callback }) {
  return (
    <>
      <div className="tela1">
        <div className="titulo-inicio">
          <img src={logo} alt="logo"></img>
          <h1>ZapRecall</h1>
        </div>
        <select required name="deck" id="deck">
          <option value="escolha">Escolha seu Deck</option>
          <option value="deck1">Deck 1</option>
          <option value="deck2">Deck 2</option>
        </select>
        <div
          className="inicio-recall"
          onClick={() =>
            callback(
              document.getElementById("deck").options[
                document.getElementById("deck").selectedIndex
              ].value
            )
          }
        >
          <p>Iniciar Recall!</p>
        </div>
      </div>
    </>
  );
}

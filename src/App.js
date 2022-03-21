import React from "react";
import TelaInicial from "./TelaInicial";
import TelaFlashCards from "./TelaFlashCards";

import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
  const [tela2, setTela2] = React.useState(false);
  const [deckSelecionado, setDeckSelecionado] = React.useState(false);

  if (!tela2 || deckSelecionado === "escolha") {
    return (
      <>
        <TelaInicial
          callback={(deck) => {
            setTela2(true);
            setDeckSelecionado(deck);
          }}
        />
      </>
    );
  } else {
    return (
      <>
        <TelaFlashCards deck={deckSelecionado} />
      </>
    );
  }
}

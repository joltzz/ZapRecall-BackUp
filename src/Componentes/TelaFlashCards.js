import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import sad from "../assets/img/sad.png";
import party from "../assets/img/party.png";

export default function TelaFlashCards({ deck }) {
  const [respondidas, setRespondidas] = React.useState(0);
  const [icons, setIcons] = React.useState([]);

  function checaRespondidas() {
    if (respondidas !== 4) {
      return <p>{respondidas}/4 concluidos</p>;
    } else {
      if (icons.includes("close-circle")) {
        return (
          <>
            <img src={sad} alt="" />
            <span> PUTZ!</span>
            <p>Ainda faltaram alguns.. </p>
            <p>Mas não desanime!</p>
          </>
        );
      } else {
        return (
          <>
            <img src={party} alt="" />
            <span> PARABÉNS!</span>
            <p>Você não esqueceu de nenhum flashcard!</p>
          </>
        );
      }
    }
  }

  return (
    <>
      <div className="tela2">
        <Header />
        <Main
          respondidas={respondidas}
          setRespondidas={setRespondidas}
          setIcons={setIcons}
          icons={icons}
          deck={deck}
        />
        <Footer icons={icons} checaRespondidas={checaRespondidas} />
      </div>
    </>
  );
}

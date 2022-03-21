import Cards from "./Cards";

export default function Main({
  respondidas,
  setRespondidas,
  setIcons,
  icons,
  deck,
}) {
  let cards;
  if (deck === "deck1") {
    cards = [
      {
        pergunta: "O que é JSX?",
        resposta: "JSX é uma extensão de linguagem do JavaScript",
      },
      {
        pergunta: "React é...",
        resposta:
          "React é uma biblioteca JavaScript para construção de interfaces",
      },
      {
        pergunta: "Componentes devem iniciar com...",
        resposta: "Componentes devem iniciar com letra maiúscula",
      },
      {
        pergunta: "Podemos colocar __ dentro do JSX",
        resposta: "Podemos colocar expressões dentro do JSX",
      },
    ];
  }
  if (deck === "deck2") {
    cards = [
      {
        pergunta: "O ReactDOM nos ajuda...",
        resposta:
          "O ReactDOM nos ajuda interagindo com a DOM para colocar componentes React na mesma",
      },
      {
        pergunta: "Usamos o npm para...",
        resposta:
          "Usamos o npm para gerenciar os pacotes necessários e suas dependências",
      },
      {
        pergunta: "Usamos props para...",
        resposta:
          "Usamos props para passar diferentes informações para componentes",
      },
      {
        pergunta: "Usamos estado (state) para...",
        resposta:
          "Usamos estado (state) para dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      },
    ];
  }

  function randomCards(cards) {
    cards.sort(comparador);
  }
  function comparador() {
    return Math.random() - 0.5;
  }
  randomCards(cards);

  return (
    <main>
      <div className="perguntas">
        {cards.map((card, index) => (
          <Cards
            key={index}
            index={index}
            pergunta={card.pergunta}
            resposta={card.resposta}
            callback={(icon) => {
              setRespondidas(respondidas + 1);
              setIcons([...icons, icon]);
            }}
          />
        ))}
      </div>
    </main>
  );
}

import React from "react";
import Header from "./Header";
import Card from "./Card";

function TelaCards() {

    const [respondidas, setRespondidas] = React.useState(0);
    const [icones, setIcones] = React.useState([]);
    const cards = [
        {
            pergunta: 'O que é JSX?',
            resposta: 'JSX é uma extensão de linguagem do JavaScript'
        },

        {
            pergunta: 'React é:',
            resposta: 'Uma biblioteca JavaScript para construção de interfaces'
        },

        {
            pergunta: 'Componentes devem iniciar com:',
            resposta: 'Letra maiúscula'
        },

        {
            pergunta: 'Podemos colocar __ dentro do JSX',
            resposta: 'Expressões'
        },

        {
            pergunta: '',
            resposta: ''
        },

        {
            pergunta: '',
            resposta: ''
        },

        {
            pergunta: '',
            resposta: ''
        },

        {
            pergunta: '',
            resposta: ''
        }]

    function embaralhaCartas(cards) {
        let cartasProntas = cards.sort(Math.random() - 0.5);
        console.log(cartasProntas)
        return cartasProntas;
    }
    embaralhaCartas(cards);

    function verificaConcluidas() {
        if (respondidas >= 8) {
            return (
                <div className="footer">
                    <h2>{respondidas}/8 CONCLUÍDOS</h2>
                </div>
            )
        }
        else {
            if (icones.includes(".card-nao-lembrou")) {
                return (
                    <div className="mensagem-final">
                        <h2>😢Puts!</h2>
                        <p>Ainda faltaram alguns...<br />
                            Mas não desanime!</p>
                    </div>
                )
            }
            else {
                return (
                    <div className="mensagem-final">
                        <h2>🥳 Parabens!</h2>
                        <p>Você não esqueceu de<br />nenhum flashcard!</p>
                    </div>
                )
            }
        }
    }
    return (
        <>
            <Header />
            <main>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        index={index}
                        pergunta={card.pergunta}
                        resposta={card.resposta}
                        callback={(icone) => {
                            setRespondidas(respondidas + 1);
                            setIcones([...icones, icone]);
                        }}
                    />
                ))}
            </main>
            <footer>
                {verificaConcluidas()}
                <div>
                    {icones.map((icone) => {
                        let css;
                        if (icone === "./assets/img/lembrei_zap.svg") { css = <img src="./assets/img/lembrei_zap.svg" alt="" /> }
                        if (icone === "./assets/img/quase_lembrei.svg") { css = <img src="./assets/img/quase_lembrei.svg" alt="" /> }
                        if (icone === "./assets/img/nao_lembrei.svg") { css = <img src="./assets/img/nao_lembrei.svg" alt="" /> }

                        return (
                            { css }
                        );
                    })}
                </div>
            </footer>
        </>
    );
}
export default TelaCards;

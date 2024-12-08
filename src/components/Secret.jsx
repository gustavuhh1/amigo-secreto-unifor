import "./secret.css";
import { Footer } from "./Footer";
import { Link } from "react-router";
import { useState } from "react";

export function Secret() {
  const [index, setIndex] = useState(0); // Armazena o índice do participante que quer revelar.
  const listParticipantes = JSON.parse(localStorage.getItem("resultado")) || [];
  const listOrder = JSON.parse(localStorage.getItem("listaCached")) || [];
  const [text, setText] = useState("Revelar");

  const generatePairs = (participants) => {
    return participants.map((p, i) => ({
      giver: p,
      receiver: participants[(i + 1) % participants.length],
    }));
  };

  const pairs = generatePairs(listParticipantes);
  console.log(pairs);
  console.log(listOrder);

  const makeShowList = (listOrderm, listParticipantes) => {
    const lista = [];
    listOrderm.forEach((daVez) => {
      listParticipantes.forEach((obj, index) => {
        if (daVez == obj.giver) {
          lista.push({ pessoa: daVez, amigoSecreto: obj.receiver });
        }
      });
    });
    return lista;
  };

  const list = makeShowList(listOrder, pairs);
  console.log(list);

  const handleSecret = () => {
    if (text == "Revelar") {
      setText(pairs[index].receiver);
    } else {
      setText("Revelar");
    }
  };

  const incrementIndex = () => {
    console.log(index);
    const limitIndex = listParticipantes.length;
    if (index < limitIndex) {
      setText("Revelar");
      setIndex(index + 1);
    }
  };

  return (
    <>
      <div id="page">
        <h2>Sorteando...</h2>
        <div className="containerReveal">
          <h3>
            {pairs[index].giver}
            <hr />
          </h3>
          <p>seu amigo secreto é...</p>
          <button onClick={handleSecret} id="reveal">
            <span id="valueText">{text}</span>
          </button>
        </div>
        <div className="moveButtons">
          <button>
            <Link
              id="btnNav"
              onClick={() => {
                localStorage.removeItem("resultado");
              }}
              to={"/amigo-secreto-unifor/amigos"}
            >
              Cancelar
            </Link>
          </button>
          <button onClick={incrementIndex} id="btnNav">
            Próximo
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

import { useState } from "react";
import "./home.css";
import { Footer } from "./Footer";
import { Link } from "react-router";

export function Home() {
  const [number, setNumber] = useState(0);

  const handleClick = (e) => {
    if (e.target.value === "-") {
      number <= 0 ? null : setNumber(number - 1);
    }
    if (e.target.value === "+") {
      number >= 10 ? null : setNumber(number + 1);
    }
  };
  return (
    <>
      <main>
        <div id="page">
          <div id="homeTitle">
            <h1>
              Sorteador <br />
              amigo secreto
            </h1>
          </div>

          <div className="containerParticipantes">
            <div>
              <h3 id="titulo2">Quantos participantes?</h3>
            </div>
            <div id="botoesFlex">
              <button value="-" onClick={handleClick} id="minus">
                -
              </button>
              <div id="inputNumber">
                <p
                  value={number}
                  onChange={(e) => {
                    e.target.value = setNumber();
                  }}
                >
                  {number}
                </p>
              </div>
              <button value="+" onClick={handleClick} id="plus">
                +
              </button>
            </div>
            <button id="botaoOK">
              <Link to={'amigos'}>OK</Link>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

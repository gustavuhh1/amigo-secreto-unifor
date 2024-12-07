import "./secret.css";
import { Footer } from "./Footer";
import { Link } from "react-router";

const secretCamp = (e) => {
  document.getElementById;

  const listParticipantes = localStorage.getItem("resultado");
  let count = 0;
  while (count <= listParticipantes.length) {}
  e.value.target = "Revelar";
};

export function Secret() {
  return (
    <>
      <div id="page">
        <h2>Sorteando...</h2>
        <div className="containerReveal">
          <h3>
            {name}
            <hr />
          </h3>
          <p>seu amigo secreto é...</p>
          <button id="reveal">{secretCamp}</button>
        </div>
        <div className="moveButtons">
          <button>
            <Link
              onClick={() => {
                localStorage.removeItem("resultado");
              }}
              to={"/amigo-secreto-unifor/amigos"}
            >
              Cancelar
            </Link>
          </button>
          <button>Próximo</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

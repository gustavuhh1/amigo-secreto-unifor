import "./secret.css";
import { Footer } from "./Footer";
import { Link } from "react-router";

export function Secret(){

    return (
      <>
        <div id="page">
          <h2>Sorteando...</h2>
          <div className="containerReveal">
            <h3>
              Gustavo Martins
              <hr />
            </h3>
            <p>seu amigo secreto é...</p>
            <button id="reveal">Revelar</button>
          </div>
          <div className="moveButtons">
            <button>
              <Link onClick={() => {localStorage.removeItem('resultado')}}to={"/amigo-secreto-unifor/amigos"}>Cancelar</Link>
            </button>
            <button>Próximo</button>
          </div>
        </div>
        <Footer />
      </>
    );
}


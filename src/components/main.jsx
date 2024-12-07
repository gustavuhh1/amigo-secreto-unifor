import { useEffect, useState } from "react";
import { Footer } from "./Footer";

import "./Main.css";
import { Link } from "react-router";

export function Main() {
  const [nome, setNome] = useState("");
  const [lista, setLista] = useState(() => {
    const listaCached = localStorage.getItem("listaCached");
    return listaCached ? JSON.parse(listaCached) : [];
  });
  let limit = Number(localStorage.getItem("number"));

  useEffect(() => {
    localStorage.setItem("listaCached", JSON.stringify(lista));
  }, [lista]);


  const handleInputName = (e) => {
    setNome(e.target.value);
  };

  const handleSubmitName = () => {
    if (nome.length > 25 || nome.trim() === "") {
      alert("Coloque um nome menor que 25 caracteres");
    } else if (lista.length >= limit) {
      alert("Lista com capacidade máxima");
    } else {
      setLista([...lista, nome]);
      setNome("");
    }
  };

  const removeNameList = (index) => {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
  };

  const listItems = lista.map((nomes, index) => {
    return (
      <li key={index} className="participantName">
        <span id="nameCamp">{nomes}</span>
        <button id="btnRemoveName" onClick={() => removeNameList(index)}>
          -
        </button>
      </li>
    );
  });

  const handleSuffleList = () => {
    if (lista.length < limit) {
      console.log(`Adicione o mais ${limit - lista.length} para continuar o sorteio`);
      return;
    } else {
      const sorteados = lista.slice().sort(() => Math.random() - 0.5);
      localStorage.setItem('resultado', JSON.stringify(sorteados));
      
    }
  };

  return (
    <>
      <div id="page">
        <div className="tableBox">
          <h3>PARTICIPANTES:</h3>

          <ul className="participantList">{listItems}</ul>
        </div>
        <div className="boxInput">
          <h3 id="titleInput">Adicione {localStorage.getItem("number")} participantes</h3>

          <div className="inputNames">
            <input
              onKeyDown={(e) => (e.key === "Enter" ? handleSubmitName() : null)}
              value={nome}
              onChange={handleInputName}
              type="text"
              placeholder="nome..."
            />

            <button onClick={handleSubmitName} type="submit" id="btnAdd">
              +
            </button>
          </div>
        </div>

        <div className="footBtn">
          <button type="button">
            <Link id="btnBack"
            onClick={() => {localStorage.clear()}} to={"/amigo-secreto-unifor"}>
              voltar
            </Link>
          </button>
          <button type="button">
            <Link
              onClick={handleSuffleList}
              id="btnGo"
              to={"/amigo-secreto-unifor/secret"}
            >
              sortear
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

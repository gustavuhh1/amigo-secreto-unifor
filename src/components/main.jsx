/* eslint-disable react/jsx-key */
import { useState } from "react";

import "./Main.css";

export function Main() {
  const [nome, setNome] = useState("");
  const [lista, setLista] = useState([]);

  const handleInputName = (e) => {
    console.log(e.target.value)
    setNome(e.target.value);
  };

  const handleSubmitName = () => {
    if (nome.length > 25 || nome.trim() === "") {
      alert("Coloque um nome menor que 25 caracteres");
    } else if (lista.length >= 5) {
      //  <== adiciona o valor do home aqui
      alert("Lista com capacidade máxima");
    } else {
      setLista([...lista, nome]);
      setNome("");
      console.log(lista);
    }
  };

  const removeNameList = (index) => {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
  }

  const listItems = lista.map((nomes, index) => {
    return (
      <li key={index} className="participantName">
        <span>{nomes}</span>
        <button onClick={() => removeNameList(index)} className="btnRemoveName">-</button>
      </li>
    );
  });

  return (
    <>
      <div id="page">
        <div className="tableBox">
          <h3>PARTICIPANTES:</h3>

          <ul className="participantList">{listItems}</ul>
        </div>
        <div className="boxInput">
          <h3 id="titleInput">Adicione 5 participantes</h3>

          <div className="inputNames">
            <input
              onKeyDown={e => e.key === 'Enter' ? handleSubmitName() : null}
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
          <button id="btnBack" type="button">
            voltar
          </button>
          <button id="btnGo" type="button">
            sortear
          </button>
        </div>
      </div>
    </>
  );
}

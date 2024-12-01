import "./home.css"

export function Home() {
  return (
    <>
      <main>
        <div id="page">
        
        <div id="homeTitle">
        <h1>Sorteador <br />
        amigo secreto</h1>
        </div>

          <div className="containerParticipantes">
            <div>
              <h3 id="titulo2">Quantos participantes?</h3>
            </div>
            <div id="botoesFlex">
              <button id="minus"></button>
              <p>3</p>
              <button id="plus"></button>

            </div>
             <button id="botaoOK">Ok</button>
          </div>

        </div>
      </main>
    </>
  );
}

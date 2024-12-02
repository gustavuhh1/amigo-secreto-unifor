import "./secret.css";

export function Secret(){
    return(
        <>
        <div id="page">
            <h2>Sorteando...</h2>
            <div className="containerReveal">
                <h3>Gustavo Martins
                    <hr />
                </h3>
                <p>seu amigo secreto é...</p>
                <button id="reveal" >Revelar</button>
            </div>
            <div className="moveButtons">
                <button>Cancelar</button>
                <button>Próximo</button>
            </div>
        </div>
        </>   
    )
}


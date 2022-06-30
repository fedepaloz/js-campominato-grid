//al click del bottone devo generare la griglia.
//recupero il bottone dal html
//al momento del click ossia addeventlistener faccio apparire la griglia.
//monto griglia con un array


//recupero elementi dal dom
const button = document.getElementById("play")
const cellContainer = document.getElementById("cell-container")

//faccio 100 celle con un ciclo for

for (let i=0 ; i <= 100; i++) {
    const cell = document.createElement('div')
    cell.className ="cell"
    cellContainer.appendChild(cell)
}



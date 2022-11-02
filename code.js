
let play = document.getElementById("btn");
let reset = document.getElementById("reset");
let gano = document.getElementById("cont-gano");
let perdio = document.getElementById("cont-perdio");

let resu = document.getElementById("resultados");



let apuesta = 0;
let cont = 0;
let gana = 0;
let pierde = 0;

function Jugar() {

    apuesta = document.getElementById("valor").value;
    let opcion = parseInt(document.getElementById("opc").value);

    let seguir = true;
    do {


        let alt = 1 + (parseInt(Math.random() * 2));

        

        if (opcion == alt) {

            apuesta = apuesta * 2;
            cont = cont + 1;
            gana = gana + 1;
            alert(`Gano apuesta: ${apuesta}, contador:${cont}`)
            


        } else if (opcion != alt) {

            apuesta = apuesta - 1;
            cont = cont + 1;
            pierde = pierde + 1;
            alert(`Perdio apuesta: ${apuesta}, contador: ${cont}`)


        } 

        

        seguir = confirm(`Seguir`);
        console.log(`Estado ${seguir}`)


    } while (seguir != false);

    resu.innerHTML = `<div>
    <h4>Resultados</h4>
    <p>Las partidas jugadas fueron ${cont}, Dinero acumulado ${apuesta} </p>

    </div>`

    gano.innerHTML = `<p>${gana}</p>`;
    perdio.innerHTML = `<p>${pierde}</p>`;


    console.log(opcion)
    console.log(apuesta)
}

play.addEventListener('click', Jugar);

function recargar() {

    resu.innerHTML = ``

    gano.innerHTML = ``;
    perdio.innerHTML = ``;
    
}

reset.addEventListener('click', recargar);
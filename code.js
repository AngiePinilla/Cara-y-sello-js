
let play = document.getElementById("btn");
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
            
            apuesta = apuesta / 2;
            cont = cont + 1;
            pierde = pierde + 1;
            alert(`Perdio apuesta: ${apuesta}, contador: ${cont}`)
        } else {
            alert(`no valido`)
        }

        seguir = confirm(`Seguir`);
        console.log(`Estado ${seguir}`)
        
       
    } while (seguir != false);

    alert(`Las partidas jugadas fueron ${cont} 
                Dinero acumulado ${apuesta}
                Partidas ganadas ${gana}
                Partdias perdidas ${pierde}`)

    console.log(opcion)
    console.log(apuesta)
}

play.addEventListener('click', Jugar);
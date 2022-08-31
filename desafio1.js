// Juego piedra papel o tijera

//Variables
let jugador
let ia

//Do while

do {
    jugador = parseInt(prompt("!!PIEDRA PAPEL TIJERA!! \n Elija una opcion: \n 1. Piedra \n 2. Papel \n 3. Tijera \n 4. Salir"))

    // Eleccion del jugador
    switch (jugador) {
        case 1:
            alert('Elegiste piedra')
            break;
        case 2:
            alert('Elegiste papel')
            break;
        case 3:
            alert('Elegiste tijera')
            break;
        case 4:
            alert('Saliste del juego')
        break;
    }

    if (jugador <4) {
        // Numero random entre 1 y 3
        ia = Math.floor(Math.random() * 3) + 1
        
        switch(ia) {
            case 1:
                alert('La IA eligio piedra')
                break;
            case 2:
                alert('La IA eligio papel')
                break;
            case 3:
                alert('La IA eligio tijera')
                break;
        }
    }

    //Piedra
    if(jugador == 1 && ia == 2) {
        alert('Piedra VS Papel: Perdiste')
    } else if (jugador == 1 && ia == 3) {
        alert('Piedra VS tijera: Ganaste')  
    } else if (jugador == 1 && ia == 1) {
        alert('Piedra VS Piedra: Empate')
    }

    //Papel
    if (jugador == 2 && ia == 1) {
        alert('Papel VS piedra: Ganaste') 
    } else if (jugador == 2 && ia == 3){
        alert('Papel VS tijera: Perdiste')
    } else if (jugador == 2 && ia == 2){
        alert('Papel VS papel: Empate')
    }

    // Tijera
    if (jugador == 3 && ia == 1){
        alert('Tijera VS piedra: Perdiste')
    } else if (jugador == 3 && ia == 2) {
        alert ('Tijera VS papel: Ganaste')
    } else if (jugador == 3 && ia == 3) {
        alert('Tijera VS tijera: Empate')
    }

} while (jugador!==4)
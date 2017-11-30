'use strict'
var first = this

function selectJugador1(){
	
	first.jugador1 = document.querySelector('input[name="jugador1"]:checked').value
	console.log( "jugador1", jugador1)
}


function selectJugador2(){
	first.jugador2 = document.querySelector('input[name="jugador2"]:checked').value
	console.log( "jugador2", jugador2)
}


function jugar(){
	var j1 = first.jugador1
	var j2 = first.jugador2

	if (j1 == "option1") {
		if (j2 == "option1") {
			document.getElementById("resultado").innerHTML = "Empate u.u"
		}
	}
}



// // la manera en que la computadora va a legir
// var computadora = Math.random()

// computadora = computadora *10


// computadora = Math.round(computadora)

// console.log(computadora)

// if (computadora < 4) {
// 	console.log("computaodra eligio piedra")
// } else if(computadora < 7){
// 	console.log("computadora eligio papel")
// } else{
// 	console.log("computadora eligio tijeras")
// }















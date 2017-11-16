'use strict'
// Ejercicio de captura de datos en un arreglo
// var nombre = prompt("nombre")
// var apellido = prompt("apellido")
// var edad = prompt("edad")
// var pais = prompt("pais")

// var datos = [ nombre, apellido, edad, pais]

// console.log(datos)
// -----------------------------

// var datos = []

// datos[0] = prompt("nombre")
// datos[1] = prompt("apellido")
// datos[2] = prompt("edad")
// datos[3] = prompt("pais")

// console.log(datos)

// ------------------------------

// var datos = [prompt("nombre"), prompt("apellido"), prompt("edad"), prompt("pais")]

// console.log(datos)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

var jugador1 = "piedra"

var jugador2 = "papel" 

if (jugador1 == "piedra") {

	if (jugador2 == "papel") {
		console.log("gana jugador 2")
	}
	else if (jugador2 == "tijeras") {
		console.log("gana jugador 1")
	}
	 else if (jugador2 == "piedra") {
		console.log("empate")
	}

} else if (jugador1 == "papel") {

	console.log("el jugador1 eligio papel")

} else if (jugador1 == "tijeras") {

	console.log("el jugador1 eligio tijeras")
}





















// ejercicio1
$("#btnA").click(function(){
	$("#capa").html("boton A")
})

$("#btnB").click(function(){
	$("#capa").html("boton <b>B</b>")
})







// // ejercicio2
$("#capa").mouseenter(function(){

   $("#mensaje").css("display", "block");
});

$("#capa").mouseleave(function(){
   
   $("#mensaje").css("display", "none");
});

// ejercicio3

// $(document).ready(function(){
// 	$("#mensajeImg").css("display", "block")
// });
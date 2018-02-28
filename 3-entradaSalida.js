//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var resultado;

	ancho = document.getElementById("ancho").value;
	largo = document.getElementById("largo").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	resultado = (largo * 2 + ancho * 2)*6;

	resultado = parseInt(resultado);

	alert("el resultado es: " +resultado);
}


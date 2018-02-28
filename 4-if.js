//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("ingrese un numero");
	numeroDos = prompt("ingrese un segundo numero");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	if(numeroUno>numeroDos)
	{
		resultado = numeroUno - numeroDos;
		resultado = parseInt(resultado);
		document.write("la resta da: " +resultado+ "<br/>");
	}
	else if(numeroUno<numeroDos)
	{
		resultado = numeroUno + numeroDos;
		resultado = parseInt(resultado);
		document.write("la suma da: " +resultado+ "<br/>");
	}
	else
	{
		resultado = numeroUno * numeroDos;
		resultado = parseInt(resultado);
		document.write("la multiplicacion da: " +resultado+ "<br/>");
	}
}


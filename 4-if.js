//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultadoUno;
	var resultadoDos;
	var resultadoTres;
	var numerosPares=2;

	numeroUno = prompt("ingrese un numero");
	numeroDos = prompt("ingrese un segundo numero");
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	if(numeroUno>numeroDos)
	{
		resultadoUno = numeroUno * numeroDos;
		alert("el resultado es: " +resultadoUno);
	}
	else if(numeroUno<numeroDos)
	{
		resultadoDos = numeroUno - numeroDos;
		alert("el resultado es: " +resultadoDos);
	}
	else
	{
		resultadoTres = numeroUno == numeroDos;
		alert("el resultado es: " +resultadoTres);
	}
	if(resultadoUno && resultadoUno % 2 == 0)
	{
		alert("el resulta")
	}
	
}


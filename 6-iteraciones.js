//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() 
{
	var nota;
	var sexo;
	var promedio;
	var minimo;
	var contador = 0;
	var contadorVarones = 0;
	var acumulador = 0;
	var SexoMin;
	var flag = true;

	while (contador < 5) 
	{
		do
		{
			nota = prompt("ingrese la nota del alumno.");
			nota = parseInt(nota);
		}
		while (nota < 0 || nota > 10 || isNaN(nota)) 
		
		do
		{
			sexo = prompt("ingrese el sexo del alumno.");
		}
		while (sexo != "m" && sexo != "f") 

		if (flag == true || nota < minimo)
		{
			minimo = nota;
			SexoMin = sexo;
			flag = false;
		}

		if (nota > 5 && sexo == 'm') 
		{
			contadorVarones++;
		}

		acumulador += nota;
		contador++;

	}

	promedio = acumulador / contador;
	alert("el promedio es: " + promedio + " hubo " +contadorVarones+ " varones con una nota mayor e igual a seis");
	alert("la nota mas baja es: " +minimo+ " y el sexo correspondiente " +SexoMin);
}


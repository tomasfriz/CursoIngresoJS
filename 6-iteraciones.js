//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var promedio;
	var maximo;
	var minimo;
	var contador = 0;
	var cantidad;
	var acumulador;
	var interacciones = 5;	

	while(interacciones<=5)
	{
		
		
		
		while(!(nota<0 || nota>10))
		{
			contador++;
			nota = prompt("ingrese la nota del alumno.");
			nota = parseInt(nota);
		}
		while(!(sexo=="m" && sexo=="f" && isNaN))
		{
			contador++;
	        sexo = prompt("ingrese el sexo del alumno.");
		}
	}


	
}


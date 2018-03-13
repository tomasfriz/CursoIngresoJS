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
	var flag = true;	

	while(contador<interacciones)
	{
		
		while(!(nota<0 || nota>10 || isNaN(nota)))
		{
			contador++;
			nota = prompt("ingrese la nota del alumno.");
			nota = parseInt(nota);
		}
		while(!(sexo=="m" && sexo=="f" && isNaN(sexo)))
		{
			contador++;
	        sexo = prompt("ingrese el sexo del alumno.");
		}
	}
	promedio = contador / nota;
	alert("el promedio es: " +promedio);
	while(true)
	{
		if(flag==true)
		{
			nota = maximo;
			nota = minimo;
			flag = false;
		}
		else
		{
			if(nota > maximo)
		    {
				maximo = nota;
			}
			if(nota < minimo)
			{
				minimo = nota;
			}
		}
		if(minimo == nota && sexo == nota)
		{
			
		}

		
		

	}

	
}


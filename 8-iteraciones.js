//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nombreAnimal;
	var peso
	var temperatura;
	var maximoAnimal;
	var minimoAnimal;
	var contador=0;
	var maximoPeso;
	var minimoPeso;
	var temperaturaAnimal;
	var temperaturaMaxima;
	var temperaturaMinima;
	var respuesta='si';

	while(respuesta!='no')
	{
		nombreAnimal = prompt("ingrese el nombre del animal.");
		nombreAnimal = parseInt(nombreAnimal);
		peso = prompt("ingrese el peso del animal.");
		peso = parseInt(peso);
		temperatura = prompt("ingrese la temperatura del habitad del animal.");
		temperatura = parseInt(temperatura);
		respuesta= prompt("ingrese no para que continue la operacion, ingrese si para seguir agregando datos.")
		
		while(peso>0)
		{
			if(contador==1)
			{
				maximoPeso = peso;
				minimoPeso = peso;
			}
			if(peso>maximoPeso)
			{
				maximoPeso = peso;
				alert("el peso maximo del animal es: " +maximoPeso);
			}
			if(peso<minimoPeso)
			{
				minimoPeso = peso;
				alert("el peso minimo del animal es: " +minimoPeso);
			}
			promedio = nombreAnimal / peso;
			alert("el promedio del peso de todos los animales es: " +promedio);
		}
		while(temperatura>=-40 && temperatura<=40)
		{
			if(temperatura % 2 == 0)
			{
				alert("la temperatura es par: " +temperatura);
			}
			else
			{
				alert("la temperatura es impar: " +temperatura);
			}
			if(temperaturaAnimal>=-40 && temperaturaAnimal<=0)
			{
				if(temperaturaAnimal && nombreAnimal);
				{
					temperaturaAnimal = nombreAnimal;
					alert("la cantidad de animales que viven a menos de 0 grados son: " +temperaturaAnimal);
				}
			}
			if(contador==1)
			{
				temperaturaMaxima = temperatura;
				temperaturaMinima = temperatura;
			}
			if(temperatura>temperaturaMaxima)
			{
				temperaturaMaxima = temperatura;
				alert("la temperatura maxima es: " +temperaturaMaxima);
			}
			if(temperatura<temperaturaMinima)
			{
				temperaturaMinima = temperatura;
				alert("la temperatura minima es: " +temperaturaMinima);
			}
		}
	}
}


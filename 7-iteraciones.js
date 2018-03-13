//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var letra;
	var numero;
	var respuesta;
	var contador=0;
	var numerosPares;
	var numerosImpares;
	var numerosCeros;
	var promedio;
	var maximo;
	var minimo;

	while(!(numero < -100 || numero > 100 || isNaN(letra)))
	{
		if(numero % 2 == 0)
		{
			contador++;
			numerosPares = contador;
			document.write("la cantidad de numeros pares es: " +numerosPares+ "<br/>");
		}
		if(numero % 2 != 0)
		{
			contador++;
			numerosImpares = contador;
			document.write("la cantidad de numeros impares es: " +numerosImpares+ "<br/>");
		}
		if(numero == 0)
		{
			contador++;
			numerosCeros = contador;
			document.write("la cantidad de numeros ceros es: " +numerosCeros+ "<br/>");
		}
	}
	
}


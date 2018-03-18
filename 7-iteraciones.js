//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var letra;
	var letraMax;
	var letraMin;
	var numero;
	var promedio;
	var maximo;
	var minimo;
	var respuesta = true;
	var contadorPar=0;
	var contadorImpar=0;
	var contadorCeros=0;
	var acumulador=0;
	var acumuladorPositivo=0;
	var contadorPositivo=0;
	var acumuladorNegativos=0;
	var flag = true;

	while(respuesta == true)
	{
		letra = prompt("ingrese una letra.");	
		do
		{
			numero = prompt("ingrese un numero entre -100 y 100.");
			numero = parseInt(numero);
		}
		while(numero < -100 || numero > 100 || isNaN(numero))

		if(numero % 2 == 0)
		{
			contadorPar++;
		}
		if(numero % 2 != 0)
		{
			contadorImpar++;
		}

		if(numero == 0)
		{
			contadorCeros++;
		}
		else if(numero > 0)
		{
			acumuladorPositivo += numero;
			contadorPositivo++;
		}
		else
		{
			acumuladorNegativos += numero;
		}

		if(true == flag || numero > maximo)
		{
			maximo = numero;
			letraMax = letra;
		}
		if(flag == true || numero < minimo)
		{
			minimo = numero;
			letraMin = letra;
			flag = false;
		}
		respuesta = confirm("¿Desea continuar?");
	}
	promedio = acumuladorPositivo / contadorPositivo;

	document.write("la cantidad de numeros pares es: " +contadorPar+ "<br/>");
	document.write("la cantidad de numeros impares es: " +contadorImpar+ "<br/>");
	document.write("la cantidad de numeros ceros es: " +contadorCeros+ "<br/>");
	document.write("el promedio de todos los numeros positivos es: " +promedio+ "<br/>");
	document.write("la suma de todos los numeros negativos es: " +acumuladorNegativos+ "<br/>");
	document.write("el numero maximo es: " +maximo+ " y su letra es: " +letraMax+ "<br/>");
	document.write("el numero minimo es: " +minimo+ " y su letra es: " +letraMin+ "<br/>");
}


//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var letra;
	var numero;
	var contador=0;
	var promedio;
	var maximo;
	var minimo;
	var respuesta = true;
	var contadorPar=0;
	var contadorImpar=0;
	var contadorCeros=0;
	var acumulador=0;
	var acumuladorPositivo=0;
	var acumuladorNegativos=0;
	var suma;
	var flag = true;

	while(respuesta == true)
	{
		contador++;

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
		if(numero > 0 && numero < 100)
		{
			acumuladorPositivo = numero;
			promedio = acumuladorPositivo / numero;
		}
		if(numero > -100 && numero < 0)
		{
			acumuladorNegativos = numero;
			suma = acumuladorNegativos + numero;
		}
		while(true)
		{
			if(true == flag)
			{
				maximo = numero;
				minimo = numero;
				flag = false;
			}
			else
			{
				if(numero > maximo)
				{
					maximo = numero;
				}
				if(numero < maximo)
				{
					minimo = numero;
				}
			}//como coloco la letra con el maximo y el minimo.
		}
		respuesta = confirm("¿Desea continuar?");
	}
	document.write("la cantidad de numeros pares es: " +contadorPar+ "<br/>");
	document.write("la cantidad de numeros impares es: " +contadorImpar+ "<br/>");
	document.write("la cantidad de numeros ceros es: " +contadorCeros+ "<br/>");
	document.write("el promedio de todos los numeros positivos es: " +promedio+ "<br/>");
	document.write("la suma de todos los numeros negativos es: " +suma+ "<br/>");
	document.write("el numero maximo es: " +maximo+ " y su letra es: " +letra+ "<br/>");
	document.write("el numero minimo es: " +minimo+ " y su letra es: " +letra+ "<br/>");
}


function Mostrar()
{

	var contadorPares=0;
	var contadorCeros=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var numero;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var resultado;

	while(true)
	{
		numero = prompt("ingrese un numero");
		if(numero == null)
		{
			break;
		}
		numero = parseInt(numero);
		if(numero % 2 == 0)
		{
			contadorPares++;
		}
		if(numero==0)
		{
			contadorCeros++;
		}
		else if(numero>0)
		{
			contadorPositivos++;
			acumuladorPositivos += numero;
		}
		else
		{
			contadorNegativos++;
			acumuladorNegativos += numero;
		}
	}
	document.write('el promedio de los positivos es: ' +acumuladorPositivos / contadorPositivos+ '<br/>');
	document.write('el promedio de los negativos es: ' +acumuladorNegativos / contadorNegativos+ '<br/>');
	document.write('la diferenfia entre positivos y negativos es: ' + (acumuladorPositivos - acumuladorNegativos) + '<br/>');
	document.write('la suma de positivos es: ' +acumuladorPositivos+ '<br/>');
	document.write('la suma de los negativos es: ' +acumuladorNegativos+ '<br/>');
	document.write('la cantidad de numeros pares son: ' +contadorPares+ '<br/>');
	document.write('la cantidad de ceros son: ' +contadorCeros+ '<br/>');
	document.write('la cantidad de numeros positivos son: ' +contadorPositivos+ '<br/>');
	document.write('la cantidad de numeros negativos son: ' +contadorNegativos+ '<br/>');

}//FIN DE LA FUNCIÓN
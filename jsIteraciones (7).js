function Mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta ='si';
	var numero;
	var promedio;

	while(respuesta = "si")
		{
			contador++;
			numero = prompt("ingrese un numero.");
			numero = parseInt(numero);
			acumulador = acumulador + numero;

		}

		promedio = acumulador / contador;

		document.getElementById('suma').value = acumulador;
		document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN
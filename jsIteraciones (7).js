function Mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta;
	var numero;
	var promedio;

	while(respuesta = 'si')
		{
			contador++;
			numero = prompt("ingrese un numero.");
			numero = parseInt(numero);
		    respuesta = prompt("ingrese 'si' para continuar");
		
		    if(respuesta = 'no')
		    {
				numero = parseInt(numero);
				acumulador = acumulador + numero;
		    }
	    }
		promedio = acumulador / contador;

		document.getElementById('suma').value = acumulador;
		document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN
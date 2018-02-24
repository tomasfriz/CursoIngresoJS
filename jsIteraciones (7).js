function Mostrar() 
{
	var contador = 0;
	var acumulador = 0;
	var numero;
	var promedio;

    
	while (true) 
	{
		numero = prompt("ingrese un numero. Si desea de ingresar numeros, escriba no");
		if (numero == 'no') 
		{
			break;	
		}
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador++;
	}

	promedio = acumulador / contador;
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN
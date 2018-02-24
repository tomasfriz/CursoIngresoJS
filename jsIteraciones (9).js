function Mostrar()
{
	var numero;
	var contador=0;
	var maximo;
	var minimo;
	var bandera=true;

	while(true)
	{
		numero=prompt("ingrese un numero");
		if(numero == null)
		{
			break;
		}
		if(true == bandera)
		{
			maximo = numero;
			minimo = numero;
			bandera = false;
		}
		else
		{
			if(numero > maximo)
			{
				maximo = numero;
			}
			if(numero < minimo)
			{
				minimo = numero;
			}
			
		}
	}
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;
	


}//FIN DE LA FUNCIÓN
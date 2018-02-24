function Mostrar()
{
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;

	while(true)
	{
		numero = prompt("ingrese un numero.");
		
		if(numero == null)
		{
			break;
		}
		numero = parseInt(numero);
		contador++;

		if(numero < 0)
		{
			negativo = negativo * numero;
		}
		else
		{
			positivo = positivo + numero;
		}
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
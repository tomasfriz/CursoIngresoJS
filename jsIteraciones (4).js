function Mostrar()
{

	var numero;

	numero = prompt("ingrese un número entre 0 y 10.");

	//while(!(numero>0 && numero<10))
	while(numero<0 || numero>10)
	{
		numero = prompt("error, ingrese un número entre 0 y 10.");
	}
	alert("estan dentro de 0 y 10");

	document.getElemenById("Numero").value = numero;

}//FIN DE LA FUNCIÓN
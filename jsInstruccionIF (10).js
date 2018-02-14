function Mostrar()
{
	var numero;

	numero = Math.floor((Math.random() * 10) + 1);
	console.log(numero);

	if(numero >= 9)
	{
		alert("EXCELENTE");
	}
	if(numero >= 4)
	{
		alert("APROBO");
	}
	if(numero < 4)
	{
		alert("Vamos, la proxima se puede");
	}
	

}//FIN DE LA FUNCIÓN
function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	
	numero = document.getElementById("FromIngreso").value;

	numero = Math.floor((Math.random() * 10) + 1);
	console.log(numero);

	if(numero > 8)
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
	
//hay errores.
}//FIN DE LA FUNCIÓN
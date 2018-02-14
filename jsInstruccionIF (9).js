function Mostrar()
{
	var numero;
	
	numero = document.getElementById("FormIngreso").value;

	numero = Math.floor((Math.random() * 10) + 1);
	console.log(numero);

	alert("el numero aleatorio es : " + numero);
	

}//FIN DE LA FUNCIÓN
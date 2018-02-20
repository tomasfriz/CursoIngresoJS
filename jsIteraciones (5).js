function Mostrar()
{
	var sexo;

	sexo = prompt("ingrese femenino ó masculino.");

	while(sexo != "femenino" && sexo != "masculino")
	{
		sexo = prompt("error, ingrese femenino ó masculino.");
	}
	alert("es un sexo");

	document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN
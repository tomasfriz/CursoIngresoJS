//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var DiaDeLaSemana;
	var maximoImporte;
	var minimoImporte;
	var interacciones=7;

	while(!(importe<0))
	{
		switch(DiaDeLaSemana)
		{
			case "lunes":
			     break;
			case "martes":
			     break;
			case "miercoles":
			     break;
			case "jueves":
			     break;
			case "viernes":
			     break;
			case "sabado":
			     break;
			case "domingo":
		}
		importe = prompt("ingrese el importe de las ventas");
		importe = parseInt(importe);
		DiaDeLaSemana = prompt("ingrese el dia de la semana");
		DiaDeLaSemana = parseInt(DiaDeLaSemana);

		if(importe>maximoImporte)
		{
			maximoImporte = importe;
			alert("el mayor importe es: " +maximoImporte);
		}
		if(importe<minimoImporte)
		{
			minimoImporte = importe;
			alert("el menor importe es: " +minimoImporte);
		}

	}
	
}


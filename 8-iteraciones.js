//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() 
{
	var producto;
	var peso;
	var temperatura;
	var maximo;
	var minimo;
	var respuesta=true;
	var contador=0;
	var contadorPar;
	var maximoProducto;
	var contadorProducto;
	var promedio;
	var flag1=true;
	var acumulador=0;
	var flag2


	while (respuesta == true) 
	{
		contador++;

		producto = prompt("ingrese la marca del producto.");

		do
		{
			peso = prompt("ingrese el peso del producto.");
			peso = parseInt(peso);
		}
		while (peso < 1 || peso > 100)

		do 
		{
			temperatura = prompt("ingrese la temperatura del almacenamiento");
			temperatura = parseInt(temperatura);
		}
		while (temperatura < -30 || temperatura > 30)

		if(temperatura % 2 == 0)
		{
			contadorPar++;
		}
		if(flag1 == true || producto < maximoProducto)
		{
			maximoProducto = producto;
			flag1 = false;
		}
		if(producto < 0)
		{
			contadorProducto++;
		}
		while(true)
		{
			if(true == flag2)
			{
				maximo = peso;
				minimo = peso;
				flag2 = false;
			}
			else
			{
				if(peso > maximo)
				{
					maximo = peso;
				}
				if(peso < maximo)
				{
					minimo = peso;
				}
			}
		}		
		acumulador += peso;

		respuesta = confirm("¿desea continuar?");

	}
	promedio = acumulador / contador;

	document.write("la cantidad de temperaturas pares es: " +contadorPar+ "<br/>");
	document.write("la marca del producto mas pesado es: " +maximoProducto+ "<br/>");
	document.write("la cantidad de productos que se conservan a menos de 0 grados es: " +contadorProducto+ "<br/>");
	document.write("el promedio del peso de todos los productos es: " +promedio+ "<br/>");
	document.write("el peso maximo es: " +maximo+ "<br/>");
	document.write("el peso minimo es: " +minimo+ "<br/>");


}


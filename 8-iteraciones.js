//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() 
{
	var producto;
	var peso;
	var temperatura;
	var maximo;
	var minimo;
	var respuesta=true;
	var contadorPar=0;
	var maximoProducto;
	var contadorProducto=0;
	var promedio;
	var flag=true;
	var acumulador=0;
	var contador=0;


	while (respuesta == true) 
	{
	
		
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
		
		if(temperatura < 0)
		{
			contadorProducto++;
		}

		if(true == flag || peso > maximo)
		{
			maximo = peso;
			maximoProducto = producto;
		}
		if(true == flag || peso < minimo)
		{
			minimo = peso;
			flag = false;
		}
		acumulador += peso;
		contador++;
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


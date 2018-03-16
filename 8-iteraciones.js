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
	var temperaturasPares;
	var productoPesado;
	var productoMenorA0Grados;
	var promedio;


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

		respuesta = confirm("¿desea continuar?");

	}
	document.write("la cantidad de temperaturas pares es: " +temperaturasPares+ "<br/>");
	document.write("la marca del producto mas pesado es: " +productoPesado+ "<br/>");
	document.write("la cantidad de productos que se conservan a menos de 0 grados es: " +productoMenorA0Grados+ "<br/>");
	document.write("el promedio del peso de todos los productos es: " +promedio+ "<br/>");
	document.write("el peso maximo es: " +maximo+ "<br/>");
	document.write("el peso minimo es: " +minimo+ "<br/>");


}


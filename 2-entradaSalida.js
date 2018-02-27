//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
    var importeFinal;

    importe = prompt("ingrese el importe del producto");

    importe = parseInt(importe);

    importeFinal = importe * 0.21;

    importeFinal = parseInt(importeFinal);

    importeFinal = importe + importeFinal;

    document.getElementById("importe").value = importeFinal;
}


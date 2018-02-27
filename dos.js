function Mostrar()
{
    var descuento
    var importe;
    var importeFinal;

    importe = prompt("ingrese el precio del producto");
    descuento = prompt("ingrese el porcentaje del descuento.");

    importe = parseInt(importe);
    descuento = parseInt(descuento);

    importeFinal = importe * descuento;

    importeFinal = parseInt(importeFinal);

    importeFinal = importe + importeFinal;

    document.getElementById("importeFinal").value = importeFinal;

  
}

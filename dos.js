function Mostrar() 
{
    var importe;
    var importeFinal;

    importe = prompt("ingrese el importe del producto");

    importe = parseInt(importe);

    importeFinal = importe * 0.25;

    importeFinal = parseInt(importeFinal);

    importeFinal = importe - importeFinal;

    document.getElementById("importeFinal").value = importeFinal;
}

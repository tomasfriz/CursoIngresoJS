function Mostrar()
{
    var importe;
    var importeFinal;
    importe = prompt("ingrese precio");
    importe = parseInt(importe);
    importeFinal = importe * 0.21;
    importeFinal = parseInt(importeFinal);
    importeFinal = importe + importeFinal;
    document.getElementById('importeFinal').value= importeFinal;




  
}

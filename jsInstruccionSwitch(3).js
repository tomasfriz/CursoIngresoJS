function Mostrar()
{
    var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño)
    {
        case "Enero":
            alert("este mes tiene 30 o mas dias");
            break;
        case "Febrero":
            alert("este mes no tiene mas de 29 dias");
            break;
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        case "Julio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("este mes tiene 30 o mas dias");
            
    }

}//FIN DE LA FUNCIÓN
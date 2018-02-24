function Mostrar() 
{

    var nombre;
    var cantidad = 0;
    var sexo;
    var continuar = "si";
    sexo = "m";
    sexo = "f";

    while (continuar != "no") 
    {
        nombre = prompt("ingrese nombre");
        cantidad = cantidad + 1;
        sexo = prompt("ingrese sexo");

        if (sexo = "m")
        {
            alert("es masculino");
        }
        if (sexo = "f")
        {
            alert("es femenino");
        }
         continuar = prompt("no, para continuar");
    }
}
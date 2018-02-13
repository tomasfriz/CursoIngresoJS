function Mostrar()
{
    var edad;
    edad<=12;
    edad>=18;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    if(edad<=12 || edad>=18)
    {
        alert("no es un adolescente");
    }

}//FIN DE LA FUNCIÓN
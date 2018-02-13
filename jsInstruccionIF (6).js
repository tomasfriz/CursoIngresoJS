function Mostrar()
{
    var edad;
    edad>=18;
    edad<=12;
    edad>=13 && edad<=17;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    if(edad>=18)
    {
        alert("es mayor de edad");
    }
    if(edad<=12)
    {
        alert("es menor de edad");
    }
    if(edad>=13 && edad<=17)
    {
        alert("es un adolescente");
    }
    



}//FIN DE LA FUNCIÓN

function Mostrar()
{
    var base;
    var perimetro;

    base = document.getElementById("laBase").value;
    base = parseInt(base);

    perimetro = base * 4;

    alert("el perimetro del cuadrado es: " +perimetro);

}

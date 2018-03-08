function Mostrar()
{
    var largo;
    var ancho;
    var perimetro;

    largo = document.getElementById("alrgo").value;
    ancho = document.getElementById("ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro =  (2 * largo +  2 * ancho) * 3;

    alert("se necesitan " +perimetro+ " metros de alambre.");

}

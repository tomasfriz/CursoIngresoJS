/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var radio;
    var resultado;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    radio = document.getElementById("Radio").value;

    resultado = (largo * 2 + ancho * 2) * 3;

    alert("el resultado es :" +resultado);
}
function Circulo () 
{
    radio = document.getElementById("Radio").value;

    resultado = radio * 2 * 3.14 * 3;

    alert("el resultado es :" +resultado);
}
function Materiales () 
{
    var cemento;
    var cal;
    cemento = 2;
    cal = 3;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    cemento = largo * ancho * cemento;
    alert("se necesitan " +cemento+ " bolsas de cemento");

    cal = largo * ancho * cal;
    alert("se necesitan " +cal+ " bolsas de cal");
}
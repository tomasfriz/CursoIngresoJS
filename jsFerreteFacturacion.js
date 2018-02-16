/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Resultado;

    PrecioUno = document.getElementById("PrecioUno").value;
    PrecioDos = document.getElementById("PrecioDos").value;
    PrecioTres = document.getElementById("PrecioTres").value;

    PrecioUno = parseInt(PrecioUno);
    PrecioDos = parseInt(PrecioDos);
    PrecioTres = parseInt(PrecioTres);
    Resultado = parseInt(Resultado);

    Resultado = PrecioUno + PrecioDos + PrecioTres;

    alert("la suma es :" +Resultado);
}
function Promedio () 
{
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Resultado;

    PrecioUno = document.getElementById("PrecioUno").value;
    PrecioDos = document.getElementById("PrecioDos").value;
    PrecioTres = document.getElementById("PrecioTres").value;

    PrecioUno = parseInt(PrecioUno);
    PrecioDos = parseInt(PrecioDos);
    PrecioTres = parseInt(PrecioTres);
    Resultado = parseInt(Resultado);

    PrecioTres = PrecioUno + PrecioDos + PrecioTres;
    Resultado = PrecioTres / 3;

    alert("el promedio es :" +Resultado);
}
function PrecioFinal () 
{
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Resultado;

    PrecioUno = document.getElementById("PrecioUno").value;
    PrecioDos = document.getElementById("PrecioDos").value;
    PrecioTres = document.getElementById("PrecioTres").value;

    PrecioUno = parseInt(PrecioUno);
    PrecioDos = parseInt(PrecioDos);
    PrecioTres = parseInt(PrecioTres);
    Resultado = parseInt(Resultado);

    PrecioTres = PrecioUno + PrecioDos + PrecioTres;
    Resultado = PrecioTres * 0.21;
    Resultado = PrecioTres - Resultado;

    alert("el precio final es :" +Resultado);
}
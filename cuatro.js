function Mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = prompt("ingrese un numero.");
    numeroDos = prompt("ingrese un segundo numero.");

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    if(numeroUno>numeroDos)
    {
        resultado = numeroUno - numeroDos;
        document.write("el resultado de la resta es: " +resultado);
    }
    else if(numeroUno<numeroDos)
    {
        resultado = numeroUno + numeroDos;
        document.write("el resultado de la suma es: " +resultado);
    }
    else
    {
        resultado = numeroUno * numeroDos;
        document.write("el resultado de la multiplicacion es: " +resultado);
    }

}

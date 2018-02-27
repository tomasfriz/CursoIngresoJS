function Mostrar()
{
    var numeroUno;
    var numeroDos;
    var numeroPositivo;
    var numeroNegativo;
    var numeroCero;
    var resultado;

    numeroUno = prompt("ingrese un numero");
    numeroDos = prompt("ingrese un segundo numero");

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    resultado = numeroUno + numeroDos;
    
    if(resultado>0)
    {
        numeroPositivo = resultado;
        document.write("el resultado es positivo " +numeroPositivo+ "<br/>");
    }
    else if(resultado<0)
    {
        numeroNegativo = resultado;
        document.write("el resultado es negativo " +numeroNegativo+ "<br/>");
    }
    else
    {
        numeroCero = resultado;
        document.write("el resultado es igual a cero " +numeroCero+ "<br/>");
    } 
}

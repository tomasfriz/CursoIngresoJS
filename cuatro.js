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
       
        document.write("el resultado es positivo " +resultado+ "<br/>");
    }
    else if(resultado<0)
    {
       
        document.write("el resultado es negativo " +resultado+ "<br/>");
    }
    else
    {
      
        document.write("el resultado es igual a cero " +resultado+ "<br/>");
    } 
}

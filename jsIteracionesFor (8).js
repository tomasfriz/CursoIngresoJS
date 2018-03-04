function Mostrar()
{
    var numero;
    var respuesta = " es primo";
    var divisor;

    numero = prompt("ingrese un número positivo mayor a 1 para saber si es primo");
    numero = parseInt(numero);

    while(isNaN(numero) || numero<2)
    {
        numero = prompt("error, ingrese un número positivo mayor a 1 para saber si es primo");
        numero = parseInt(numero);
    }
    for(divisor-- ;divisor > 1;divisor--)
    {
        if(numero % divisor == 0)
        {
            respuesta = " no es primo";
            break;
        }
    }
   alert(numero + respuesta);




}//FIN DE LA FUNCIÓN
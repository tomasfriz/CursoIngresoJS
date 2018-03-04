function Mostrar()
{
    var numero;
    var numerosPares = 0;
    numero = prompt("ingrese un numero igual o mayor a 0");
    numero = parseInt(numero);

    while(isNaN(numero) || numero<0)
    {
        numero = prompt("error, ingrese un numero igual o mayor a cero");
        numero = parseInt(numero);
    }
    for(var repeticiones = numero;repeticiones > 0;repeticiones--)
    {
        if(repeticiones % 2 == 0)
        {
            numerosPares++;
            console.log(repeticiones);
        }
    }
    console.log("la cantidad de numeros pares es: " +numerosPares);



}//FIN DE LA FUNCIÓN
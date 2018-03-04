function Mostrar()
{
    var numero;
    var numerosDivisores = 1;
    numero = prompt("ingrese un numero que no sea 0");
    numero = parseInt(numero);

    while(isNaN(numero) || numero == 0)
    {
        numero = prompt("error, ingrese un numero que no sea 0");
        numero = parseInt(numero);
    }
    console.log(1);

    for(var repeticiones = numero;repeticiones != 1;)
    {
        if(numero % repeticiones == 0)
        {
            numerosDivisores++;
            console.log(repeticiones);
        }
        if(numero > 0)
        {
            repeticiones--;
        }
        else
        {
            repeticiones++;
        }
    }
    console.log("la cantidad de numeros divisores es: " +numerosDivisores);





}//FIN DE LA FUNCIÓN
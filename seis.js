function Mostrar()
{
    var contador=0;
    var maximo;
    var minimo;
    var contadorPares=0;
    var contadorImpares=0;
    var contadorPositivos=0;
    var flag=true;
    var numero;
    var acumuladorPositivos=0;
    var promedio;


    while(true)
    {
        numero = prompt("ingresar un numero");

        if(numero == null)
        {
            break;
        }
        numero = parseInt(numero);
        if(numero % 2 == 1)
        {
            contadorImpares++;
        }
        if(numero % 2 == 0)
        {
            contadorPares++;
        }
        if(numero>0)
        {
            contadorPositivos++;
        }
        
    }



}
/*contadorpare
contadorimpares
contadorpositivo
promedio
numero*/
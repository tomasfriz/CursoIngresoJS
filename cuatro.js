function Mostrar()
{
   var numeroUno;
   var numeroDos;
   var numeroTres;
   
   numeroUno = prompt("ingrese un numero");
   numeroUno = parseInt(numeroUno);
   numeroDos = prompt("ingrese un segundo numero");
   numeroDos =parseInt(numeroDos);
   numeroTres = prompt("ingrese un tercer numero");
   numeroTres = parseInt(numeroTres);
   
   if(numeroUno<numeroDos && numeroUno<numeroTres)
   {
       alert("el numero menor es: " +numeroUno);
   }
   else
   {
       if(numeroDos<numeroUno && numeroDos<numeroTres)
       {
           alert("el numero intermedio es: " +numeroDos);
       }
       else
       {
           alert("el numero mayor es: " +numeroTres);
       }
   }

}
/*var numero;
var maximo;
var minimo;
var contador=0;
var flag=true;

while(true)
{
    numero = prompt("ingrese un numero");
    if(numero == null)
    {
        break;
    }
    if(true == flag)
    {
        maximo = numero;
        minimo = numero;
        flag = false;
    }
    else
    {
        if(numero>maximo);
        {
            maximo = numero;
        }
        if(numero<minimo);
        {
            minimo = numero;
        }
        document.write("el maximo de los numeros es: " +maximo+ "<br/>");
        document.write("el minimo de los numeros es " +minimo+ "<br/>");
    }

}*/
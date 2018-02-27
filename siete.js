function Mostrar()
{
    var numMin;
    var letraMin;
    var numMax;
    var letraMax;
    var letra;
    var numero;
    var respuesta="si";
    var interacciones;

    while(respuesta!="no")
    {
        interacciones++;
        letra=prompt("ingrese una letra");
        while(!(isNaN(letra)))
        {
            letra=prompt("ingrese una letra");
        }
        numero=prompt("ingreso un numero");
        numero =parseInt(numero);
        while(numero>200 || numero<-200 || isNaN(numero))
        {
            numero = prompt("ingrese un numero entre 200 y -200");
            numero = parseInt(numero);
        }
        if(interacciones==1)
        {
            numMin = numero;
            letraMin = letra;
            numMax = numero;
            letraMax = letra;
        }
        if(numMin<numero)
        {
            numMin = numero;
            letraMin = letra;
        }
        if(numMax>numero)
        {
            numMax = numero;
            letraMax = letra;
        }
        switch(letra)
              {
                  case "a":
                  case "e":
                  case "i":
                  case "o":
                  case "u":
                      numeroVocal++;
                      contarVocal=contarVocal+numero;
                      break;
                  default:    
              }
    }
    



    

}

function Mostrar() 
{
    var contador=0;
    var peso;
    var interacciones=5;
    var maximoPeso;
    var minimoPeso;


    while (contador < interacciones) 
    {
        contador++;
        peso = prompt("ingrese peso del contenedor");
        peso = parseInt(peso);
        if(contador==1)
        {
            maximoPeso=peso;
            minimoPeso=peso;
        } 

        if (peso > maximoPeso) 
        {
            maximoPeso = peso;
            document.write("el contenedor mas pesado es: " + maximoPeso + "<br/>");
        }
        if (peso < minimoPeso)
        {
            minimoPeso = peso;
            document.write("el contenedor menos pesado es: " + minimoPeso + "<br/>");
        }
    }
}
//no se como lograrlo que funcione. no se lo que esta mal. requiero ayuda profesional.

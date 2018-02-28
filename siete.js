function Mostrar() {
    var edad;
    var sexo;
    var interacciones = 3;
    var contador = 0;
    var promedio;
    var edadBaja;
    var edadAlta;
    sexo = "f";
    sexo = "m";

    while (contador < interacciones) 
    {
        contador++;
        edad = prompt("ingrese una edad");
        edad = parseInt(edad);
       while(edad< 0|| edad > 100) 
        {
            edad = prompt("ingrese una edad");
            edad = parseInt(edad);
        } 




        if (sexo == "f" || sexo == "m") 
        {
            sexo = prompt("ingrese un sexo");
            sexo = parseInt("sexo");
        }
        else 
        {
            if(edad>edadAlta)
            {
                edadAlta = edad;
            }
            if(edad<edadBaja)
            {
                edadBaja = edad;
                alert("la edad mas baja es: " +edadBaja+ "<br/>");
            }
            
        }
        
        
    }
    //no lo puedo terminar porque creo que se usa "for" y yo lo estoy haciendo de la manera dificil. nunca me enceñaron "for".




}

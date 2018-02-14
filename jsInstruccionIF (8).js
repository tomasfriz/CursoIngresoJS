function Mostrar()
{
    var estadoCivil;
    var edad;

    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;
    
    if(estadoCivil != "Soltero")
    {
        if(edad <=17)
        {
            console.log("NO HACER NADA");
        }   
    }
    if(estadoCivil == "Soltero")
    {
        if(edad >=18)
            {
                alert("es soltero y no es menor");
            }

    }
}//FIN DE LA FUNCIÓN
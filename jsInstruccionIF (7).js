function Mostrar()
{
    var estadoCivil;
    var edad;

    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;
    
    if(estadoCivil != "Soltero")
    {
        if(edad <18)
        {
            alert("es muy pequeño para NO ser soltero");
        }
    }

	
}//FIN DE LA FUNCIÓN
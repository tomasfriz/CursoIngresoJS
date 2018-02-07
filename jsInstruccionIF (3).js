function Mostrar()
{
    //la funcion solo funciona con numeros menor a 12 y con numeros mayor 17; los numeros entre el 12 y 17,inclusive 12 y 17, no funcionan.
    
    var edad;
    edad=12;
    edad=17;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    
    if (edad<12)
      {
          alert("es menor de edad");  
    }
    if (edad>17)
     {
        alert("es mayor de edad");
    }

}//FIN DE LA FUNCIÓN
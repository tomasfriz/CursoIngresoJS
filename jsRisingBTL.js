/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() 
{
    var datos;
    var edad;
    var sexo;
    var estadoCivil;
    var sueldoBruto;
    var legajo;
    var nacionalidad;
    sexo = "m";
    sexo = "f";
    estadoCivil = soltero;
    estadoCivil = casados;
    estadoCivil = divorciados;
    estadoCivil =



    while(edad >= 18 && edad <= 90) 
    {
        edad = prompt("ingrese la edad entre 18 y 90 años inclusive.")
        edad = parseInt(edad);
        document.write("la edad de la persona es: " + edad + "<br/>");
    }
                 while (sexo == "m" || sexo == "f") 
     {
        sexo = prompt("ingrese el sexo, m para masculino y f para femenino.");
        sexo = parseInt(sexo);
    }
    if (sexo == "m") 
    {
        document.write("la persona es masculino: " + sexo + "<br/>");
    }
    else 
    {
        document.write("la persona es femenino: " + sexo + "<br/>");
    }
    while (estadoCivil == soltero || estadoCivil == casados || estadoCivil == divorciados || estadoCivil == viudos) 
    {
        estadoCivil = prompt("ingrese el estado civil de la persona.");
        estadoCivil = parseInt(estadoCivil);
    }
    if (estadoCivil == soltero) 
    {
        document.write("la persona es soltero: " + estadoCivil + "<br/>");
    }

}

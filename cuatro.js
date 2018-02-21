function Mostrar() {
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = prompt("ingrese el primer numero");
    numeroDos = prompt("ingrese el segundo numero");

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    if (numeroUno == numeroDos) {
        resultado = numeroUno * numeroDos;
    }
    if (numeroUno > numeroDos) {
        resultado = numeroUno - numeroDos;
    }
    else {
        resultado = numeroUno + numeroDos;
    }
    document.write("el resultado es: " + resultado);
}

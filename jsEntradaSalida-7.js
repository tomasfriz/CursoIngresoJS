/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
     var numero1;
     var numero2;

    numero1 = document.getElementById('numeroUno').value;
    numero2 = document.getElementById('numeroDos').value;

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    numero2 = numero1 + numero2;

    alert("la suma es: " + numero2);
}

function restar()
{
    var numero1;
    var numero2;

    numero1 = document.getElementById('numeroUno').value;
    numero2 = document.getElementById('numeroDos').value;

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    numero2 = numero1 - numero2;

    alert("la resta es: " + numero2);
}

function multiplicar()
{ 
    var numero1;
    var numero2;

    numero1 = document.getElementById('numeroUno').value;
    numero2 = document.getElementById('numeroDos').value;

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    numero2 = numero1 * numero2;

    alert("la multiplicacion es: " + numero2);
}

function dividir()
{
    var numero1;
    var numero2;

    numero1 = document.getElementById('numeroUno').value;
    numero2 = document.getElementById('numeroDos').value;

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    numero2 = numero1 / numero2;

    alert("la division es: " + numero2);
}


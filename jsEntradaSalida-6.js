/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numero1;
var numero2;

numero1= document.getElementById("numeroUno").Value;
numero2= document.getElementById("numeroDos").value;

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

alert("la suma es " + numero1 + numero2);


}


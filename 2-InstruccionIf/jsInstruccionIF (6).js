function mostrar()
{
//tomo la edad  
var edad;

edad=document.getElementById("edad").value;

if(edad>18){
  alert("ud es mayor de edad");
}else if(edad>=13 && edad<=17){
  alert("Ud es adolescente");
}else{
  alert("Ud es menor");
}




}//FIN DE LA FUNCIÓN
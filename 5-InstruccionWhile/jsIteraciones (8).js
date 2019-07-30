function mostrar()
{
var num;
var respuesta=true;
var suma=0;
var multiplicacion=1;


while(respuesta==true){
num=prompt("Ingrese un numero");
num=parseInt(num);
respuesta=confirm("¿desea introducir mas numeros?");
if(num>0){
    suma=suma+num;
    document.getElementById("suma").value=suma;
   
  }else{
   multiplicacion=multiplicacion*num;
   document.getElementById("producto").value=multiplicacion;
 }

}



}//FIN DE LA FUNCIÓN
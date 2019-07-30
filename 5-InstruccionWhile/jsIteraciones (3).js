function mostrar()
{
var clave;
var contador=0;
clave=prompt("ingrese su clave por favor");
do{
  clave=prompt("la clave que ha ingresado es erronea, ingrese la clave correcta");
  contador++;
  if(contador==2){
    alert("excedio el numero de intentos");
    break;
  }
}
while(clave!="utn750");

}//FIN DE LA FUNCIÓN
/*var cont=0;   
var clave=prompt("Ingrese su clave por favor");

while(clave!="utn750"){
 clave=prompt("Clave erronea.Ingrese la clave correcta por favor");
 cont++;
 if(cont==2){
   break;
 }
}*/
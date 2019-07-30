function mostrar()
{
var numero;
var contador=0;

numero=prompt("ingrese un numero entre 0 y 10");
numero=parseInt(numero);
do{
  numero=prompt("El numero ingresado no es valido.Ingrese un numero nuevamente");
  contador++;
  
  if(contador==3){
    break;
  }
}
while(numero<0 || numero>10);


}


//FIN DE LA FUNCIÓN
/*var cont=0;
var numero = prompt("ingrese un número entre 0 y 10.");

while(numero<0 || numero>9){
  numero=prompt("este numero no es valido.Ingrese el numero nuevamente");
  cont ++;
  if(cont==3){
    break;
  }
}
*/
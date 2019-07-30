function mostrar()
{
var respuesta=true;
var num;
var acumuladorPositivo=0;
var acumuladorNegativo=0;
var contadorPositivos=0;
var contadorNegativos=0;
var contadorNeutro=0;
var contadorPares=0;
var promedioPositivo;
var promedioNegativo;
var diferencia;

while(respuesta==true){
  num=prompt("ingrese un numero");
  respuesta=confirm("¿desea ingresar mas numeros?");
  num=parseInt(num);

  if(num<0){
	acumuladorNegativo=acumuladorNegativo+num;
	contadorNegativos++;
	
  }else{ if(num>0){
	 acumuladorPositivo=acumuladorPositivo+num;
	 contadorPositivos++; 
  }else{
     contadorNeutro++;
   }
 }
 if(num%2==0){
    contadorPares++;
  }
  
}
promedioNegativo=acumuladorNegativo/contadorNegativos;
promedioPositivo=acumuladorPositivo/acumuladorPositivo;
diferencia= acumuladorNegativo+acumuladorPositivo;
 

document.write("Suma de negativos:"+acumuladorNegativo+"<br>");
document.write("Suma de positivos:"+acumuladorPositivo+"<br>");
document.write("cantidad de negativos:"+contadorNegativos+"<br>");
document.write("cantidad de positivos:"+contadorPositivos+"<br>");
document.write("cantidad de ceros:"+contadorNeutro+"<br>");
document.write("cantidad de pares:"+contadorPares+"<br>");
document.write("promedio Negativos:" +promedioNegativo+"<br>");
document.write("promedio positivos:" +promedioPositivo+"<br>");
document.write("diferencia positivos y negativos:"+ diferencia);

}//FIN DE LA FUNCIÓN
function mostrar()
{
var suma=0;
var num;
var cont=0;

while(cont<5){
 num=prompt("ingrese un numero");
 num=parseInt(num);
 suma=num+suma;
 cont++;
 document.getElementById("suma").value=suma;
 document.getElementById("promedio").value=suma/5;
 }
	
 
  
 
 
 

	

}//FIN DE LA FUNCIÓN



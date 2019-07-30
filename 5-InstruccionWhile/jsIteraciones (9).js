function mostrar()
{
var respuesta=true;
var maximo;
var minimo;
var num;
var valormax=0;
var valormin=0;

while(respuesta==true)
{
  num=prompt("ingrese un numero"); 
  num=parseInt(num);
  maximo=num;
  minimo=num;

  
  if(valormax<=maximo){
	valormax=maximo;
	
  }else{
    if(valormin>=minimo){
	valormin=minimo;
	}
  }
  
  respuesta=confirm("¿desea ingresar mas numeros?"); 
  
}  
document.getElementById("minimo").value=valormin;
document.getElementById("maximo").value=valormax;
  
  


}//FIN DE LA FUNCIÓN
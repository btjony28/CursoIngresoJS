function mostrar()
{
var num;
var suma=0;
var cont=0;
var respuesta=true;



while(respuesta==true){
  num=prompt("ingrese un numero");
  num=parseInt(num);
  suma=(suma+num);
  respuesta=confirm("desea ingresar otro numero?");
  cont++;
  document.getElementById("suma").value=suma;
  document.getElementById("promedio").value=suma/cont;

  
}



	
}//FIN DE LA FUNCIÓN
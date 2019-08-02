function mostrar()
{var notas;
var notaSuma=0;
 var sexo;
 var contadorDeDatos=0;
 var promedioNotasTotales;
 
while(contadorDeDatos!=5){
 notas=prompt("ingrese una nota entre 0 y 10");
 notaSuma=parseInt(notas);
 sexo=prompt("ingrese sexo f ó m ");
 
 if(notas<0 || notas>10){
   alert("ingreso un dato no valido.");
   break;
 }else if(sexo!="f" && sexo!="m"){
   alert("ingreso un dato no valido.");
   break;
 }
 contadorDeDatos++;
 contadorDeDatos=parseInt(contadorDeDatos);
 

}
promedioNotasTotales=notaSuma/contadorDeDatos;
alert("el promedio de las notas es: "+promedioNotasTotales+", ")
}

function mostrar()
{var notas;
 var sumaNotas=0;
 var sexo;
 var contadorDeDatos=0;
 var promedioNotasTotales;
 var notabaja=0;
 var notaalta=0;
 var notabajasexo;
 var notaaltasexo;

 
 
while(contadorDeDatos!=5){
 notas=prompt("ingrese una nota entre 0 y 10");
 notas=parseInt(notas);
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
 sumaNotas=sumaNotas+notas;
 notabaja=notas;
 promedioNotasTotales=sumaNotas/contadorDeDatos;
 notaalta=notas;
 

} 
while(contadorDeDatos==0 ||notas<notabaja){
  notabaja=notas;
  notabajasexo=sexo;
}
while(sexo=="m"&& nota>notaalta){
  notaalta=nota;
  notaaltasexo=sexo;
}


alert("el promedio de las notas es: "+promedioNotasTotales+". "+"la nota mas baja es: "+notabaja+
" de sexo "+notabajasexo);

}

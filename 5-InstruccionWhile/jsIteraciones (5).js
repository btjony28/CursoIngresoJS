function mostrar()
{
var sexo;
var cont=0;

sexo=prompt("por favor ingrese su sexo f o m");

while(sexo!= "f" && sexo!= "m"){
  sexo=prompt("sexo no valido, ingrese nuevamente");
  cont++;
  if(cont==2){
    break;
 }else{
    document.getElementById("Sexo").value=(sexo+" Validado");     
 }
  
  
  
}

}//FIN DE LA FUNCIÓN




  //if(sexo=="f"&& sexo=="m"){
    //document.getElementById("Sexo").value=(sexo+" Validado");
  //}if(cont==2){
      //break;
  //}
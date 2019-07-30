function mostrar()
{
  //Genero el número RANDOM entre 1 y 10
  var num;
  
  num=Math.floor(Math.random()*(11-1)+1)
   if(num>=9){
     alert(num +" Excelente");
   }else if(num>4){
     alert(num +" Aprobo");
   }else{
    alert(num +" la proxima se puede")
   }


}//FIN DE LA FUNCIÓN

function mostrar()
{
//tomo la edad
var mesDelAño;
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
  case "Febrero":
   alert("este mes no tiene mas de 29 dias");
   break;
  default:
   alert("este mes tiene mas de 30 dias");
   break;
}

//alert (mesDelAño);




}//FIN DE LA FUNCIÓN

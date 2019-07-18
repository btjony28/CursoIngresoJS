function mostrar()
{
//tomo la edad
var mesDelAño;
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
  case "Febrero":
   alert("Febrero tiene 28 dias");
   break;
  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
    alert(mesDelAño+" tiene 30 dias");
    break;
  default:
    alert(mesDelAño+" tiene 31 dias");
    break;

}
//alert (mesDelAño);





}//FIN DE LA FUNCIÓN

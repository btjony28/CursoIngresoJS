function mostrar()
{
//tomo la edad
var mesDelAño;
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
  case"Enero":
  case"Febrero":
  case"Marzo":
  case"Abril":
  case"Mayo":
  case"Junio":
   alert("falta para el invierno");
   break;
  case"Julio":
  case"Agosto":
   alert("Abrigate que hace frio");
  case"Septiembre":
  case"Octubre":
  case"Noviembre":
  case"Diciembre":
   alert("Ya pasamos el frio ahora hace calor");
   break;
}




}//FIN DE LA FUNCIÓN

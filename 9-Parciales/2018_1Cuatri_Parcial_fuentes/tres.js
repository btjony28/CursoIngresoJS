function mostrar()
{
var precio;
var porcentaje;
var descuento;

precio=prompt("por favor ingrese el precio");
porcentaje=prompt("por favor ingrese el porcentaje de descuento");
precio=parseInt(precio);
porcentaje=parseInt(porcentaje);

descuento=(precio*porcentaje/100);
descuento=(precio-descuento);

document.getElementById("elPrecioFinal").value=descuento;
}

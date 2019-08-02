function mostrar()
{
var planeta;

planeta=prompt("por favor escribir el nombre de un planeta(solo ingresar letras minusculas)");

switch(planeta){
    case"mercurio":
    case"venus":
     alert("aca esta mas hot");
     break;

    case"tierra":
     alert("hallo vecino");
     break;

    case"marte":
    case"jupiter":
    case"saturno":
    case"urano":
    case"neptuno":
    case"pluto":
     alert("aca hace mas frio");
     break;
     
    default:
     alert("el planeta ingresado no es valido");
     break;
}
}

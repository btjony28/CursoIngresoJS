function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;

edad=document.getElementById("edad").value;
estadoCivil=document.getElementById("estadoCivil").value;

if(edad<18 && estadoCivil!="soltero"){
  alert("Es muy pequeño para no ser soltero");
}else if(edad>17 && estadoCivil == "Casado"){
    alert("Lo sentimos por usted");
}else{
  alert("Bienvenido a la vida");

}

	


}//FIN DE LA FUNCIÓN
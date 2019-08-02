function mostrar()
{
var numeroUno;
var numeroDos;
var resultado;
var resultadoSuma;


numeroUno=prompt("por favor ingrese un numero");
numeroDos=prompt("por favor ingrese otro numero");
numeroUno=parseInt(numeroUno);
numeroDos=parseInt(numeroDos);

if(numeroUno>numeroDos){
    resultado=(numeroUno-numeroDos);
    alert(resultado);
}else{if(numeroUno<numeroDos){
    resultadoSuma=(numeroDos+numeroUno);
    resultadoSuma=parseInt(resultadoSuma);
}else{
    alert(numeroUno+","+numeroDos);
    }
    
    if(resultadoSuma>10){
        alert(resultadoSuma+" la suma es mayor a 10")
    }else{
        alert(resultadoSuma);
    }
}

}



var calculadora = Calculator();

atualizarResultado();

completarNumeracao("primeiroOperador");
completarNumeracao("segundoOperador");

//Função para retornar Hello World
document.getElementById("btnHello").onclick = function () {
    calculadora.sayHello();
    atualizarResultado();

}

//Função para limpar o resultado
document.getElementById("btnClean").onclick = function (){
    calculadora.cleanResult();
    atualizarResultado();
}

//Retornar o resultado
function atualizarResultado(){
    document.getElementById("resultado").value = calculadora._getResult();
}


//Completar numeração nos options
function completarNumeracao(idOpcao){
    for (var i=0; i < 10; i++){
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        document.getElementById(idOpcao).appendChild(opt);
    }
}

document.getElementById("operador").onchange = function(){
    console.log(document.getElementById("operador").value);

    // pega valor dos combos
    var primeiroNumero = document.getElementById("primeiroOperador").value;
    var segundoNumero = document.getElementById("segundoOperador").value;
    
    // verifica se o valor eh um numero de 0 a 9
    if (primeiroNumero != "-" && segundoNumero != "-"){
       calculadora.createOperation(primeiroNumero, segundoNumero, "+");
       atualizarResultado();
    }

    // chama metodo calcular operacao da `calculadora`
    
}
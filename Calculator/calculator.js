var Calculator = /*Essa é a função*/function () {

    var result = 0;

    this.sayHello = function () {
        this.result = 'Hello world!';
    }

    this.cleanResult = function () {
        this.result = 0;
    }

    // Criada para testar o 'return'
    // Inicia com '_' pra passar a ideia de que não deve ser usada
    // Como se quando olhasse para o '_' pensasse que é 'privado'. Mas não é!
    this._getResult = function () {
        return this.result;
    }

    this.createOperation = function (num1, num2, tipoOperacao) {
        if (tipoOperacao == '+') {
            this.result = num1 + num2;
        }
        else {
            this.result = "Operação inválida";
            console.log("Só suportamos '+' até o momento!");
        }
    }

    // Retorna a função ela mesma
    return this;
}
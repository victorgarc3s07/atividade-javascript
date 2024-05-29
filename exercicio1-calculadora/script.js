//Iniciando a calculadora

function calcular(operacao) {
    // Obtendo os valores dos campos de entrada como strings e convertendo-os para números de ponto flutuante
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    // Variável para armazenar o resultado
    let resultado;

    // Verificando a operação e calculando o resultado

    switch (operacao) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            // Verificando se o divisor não é zero
            if (numero2 === 0) {
                resultado = 'Erro: Divisão por zero';
            } else {
                resultado = numero1 / numero2;
            }
            break;
        default:
            resultado = 'Operação inválida';
            break;
    }

    // Exibindo o resultado no parágrafo com id "resultado"
    document.getElementById('resultado').textContent = `resultado será:${resultado}`;

}
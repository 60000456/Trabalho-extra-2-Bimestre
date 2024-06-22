function calcularImposto() {
    // Obter os valores dos campos de entrada
    var ano = parseInt(document.getElementById('ano').value);
    var valor = parseFloat(document.getElementById('valor').value);

    // Calcular o imposto baseado no ano do veículo
    var taxa = (ano < 1990) ? 0.01 : 0.015;
    var imposto = valor * taxa;

    // Exibir o resultado na página
    var resultadoElement = document.getElementById('resultado');
    var impostoValorElement = document.getElementById('impostoValor');

    impostoValorElement.textContent = 'R$ ' + imposto.toFixed(2);
    resultadoElement.style.display = 'block';
}
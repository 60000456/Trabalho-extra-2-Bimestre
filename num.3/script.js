document.getElementById('formCalculadora').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter o valor digitado pelo usuário
    let valor = parseFloat(document.getElementById('valor').value);

    // Array com as denominações de notas em ordem decrescente
    let notas = [100, 50, 10, 5, 1];

    // Objeto para armazenar a quantidade de cada nota
    let quantidadeNotas = {};

    // Calcular a quantidade de cada nota necessária
    notas.forEach(function(nota) {
      quantidadeNotas[nota] = Math.floor(valor / nota);
      valor %= nota; // Atualiza o valor restante
    });

    // Gerar o texto do resultado
    let resultadoHTML = '<h2>Resultado:</h2>';
    resultadoHTML += `<p>Valor lido: R$ ${parseFloat(document.getElementById('valor').value).toFixed(2)}</p>`;
    resultadoHTML += '<p>Quantidade de notas:</p>';
    resultadoHTML += '<ul>';
    notas.forEach(function(nota) {
      resultadoHTML += `<li>${quantidadeNotas[nota]} nota(s) de R$ ${nota.toFixed(2)}</li>`;
    });
    resultadoHTML += '</ul>';

    // Exibir o resultado na div resultado
    document.getElementById('resultado').innerHTML = resultadoHTML;
  });
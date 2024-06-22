function calcularNovoSalario() {
    // Obter valores do formulário
    var salarioAntigo = parseFloat(document.getElementById('salarioAntigo').value);
    var cargo = parseInt(document.getElementById('cargo').value);
    var novoSalario = 0;
    var diferenca = 0;

    // Calcular o novo salário de acordo com o cargo
    switch (cargo) {
      case 1: // Gerente
        novoSalario = salarioAntigo * 1.10; // 10% de aumento
        break;
      case 2: // Analista
        novoSalario = salarioAntigo * 1.05; // 5% de aumento
        break;
      case 3: // Assistente
        novoSalario = salarioAntigo * 1.03; // 3% de aumento
        break;
      default:
        novoSalario = salarioAntigo * 1.4; // 40% de aumento padrão se o cargo não estiver na tabela
        break;
    }

    // Calcular a diferença
    diferenca = novoSalario - salarioAntigo;

    // Exibir os resultados na div de resultado
    document.getElementById('salarioAntigoMostrar').textContent = salarioAntigo.toFixed(2);
    document.getElementById('novoSalario').textContent = novoSalario.toFixed(2);
    document.getElementById('diferenca').textContent = diferenca.toFixed(2);

    // Mostrar a div de resultado
    document.getElementById('resultado').style.display = 'block';
  }
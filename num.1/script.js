function ordenarDecrescente() {
    // Lendo os cinco valores do usuário
    let valores = [];
    for (let i = 1; i <= 5; i++) {
        let valor = parseInt(prompt(`Digite o ${i}º valor:`));
        valores.push(valor);
    }

    // Ordenando os valores em ordem decrescente
    valores.sort((a, b) => b - a);

    // Exibindo os valores ordenados
    alert(`Valores em ordem decrescente: ${valores.join(', ')}`);
}

// Chamando a função ao carregar a página
ordenarDecrescente();
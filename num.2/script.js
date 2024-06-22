function verificarTriangulo() {
    // Obter os valores dos lados do triângulo
    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);
    var z = parseInt(document.getElementById('z').value);

    // Verificar se os valores formam um triângulo
    if (formaTriangulo(x, y, z)) {
        var tipoTriangulo = determinarTipoTriangulo(x, y, z);
        exibirResultado(`Os valores formam um triângulo ${tipoTriangulo}.`);
    } else {
        exibirResultado("Os valores não formam um triângulo.");
    }
}

function formaTriangulo(x, y, z) {
    return (x + y > z) && (x + z > y) && (y + z > x);
}

function determinarTipoTriangulo(x, y, z) {
    if (x === y && y === z) {
        return "equilátero";
    } else if (x === y || x === z || y === z) {
        return "isósceles";
    } else {
        return "escaleno";
    }
}

function exibirResultado(mensagem) {
    document.getElementById('result').textContent = mensagem;
}
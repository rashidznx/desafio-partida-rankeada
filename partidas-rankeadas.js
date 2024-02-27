function calcularVitorias(vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    let nivel;

    for (let contador = 0; contador <= 60; contador += 1) {
        switch (true) {
            case contador < 10:
                nivel = "ferro";
                break;
            case contador >= 11 && contador <= 20:
                nivel = "Bronze";
                break;
            case contador >= 21 && contador <= 50:
                nivel = "Prata";
                break;
            case contador >= 51 && contador <= 80:
                nivel = "Ouro";
                break;
            case contador >= 81 && contador <= 90:
                nivel = "Diamante";
                break;
            case contador >= 91 && contador <= 100:
                nivel = "Lendário";
                break;
            default:
                nivel = "Imortal";
                break;
        }
    }

    return { resultado, nivel };
}

let { resultado, nivel } = calcularVitorias(50, 5);
console.log("O Herói tem um saldo de " + resultado + " está no nível de " + nivel);


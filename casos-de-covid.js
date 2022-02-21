let popuInicialInfectada = 1000, quantiDeTransmissao = 4;
let tempoDecorrido = 100;

let infectados = popuInicialInfectada * (quantiDeTransmissao ** (tempoDecorrido / 7));

console.log(`O numero de infectados é de cerca de ${infectados}`);
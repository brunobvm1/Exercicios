let taxaDeJuros, montante = 90000, capital = 60000;
let numeroDePeriodos = 24;

taxaDeJuros = ((montante / capital) ** (1 / numeroDePeriodos) - 1);
console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${taxaDeJuros * 100}%, pois após ${numeroDePeriodos} meses você teve que pagar ${montante} reais`)
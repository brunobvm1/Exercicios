let taxaDeJuros, montante = 90000, capital = 60000;
let numeroDePeriodos = 24;

taxaDeJuros = (montante / capital) * (1 / numeroDePeriodos) - 1;
console.log(taxaDeJuros)
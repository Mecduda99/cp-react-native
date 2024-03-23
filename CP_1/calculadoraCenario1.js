// calculadoraCenario1.js
const calcularCenario1 = (valorCompra, taxaJuros, numeroParcelas, valorEntrada) => {
    const i = parseFloat(taxaJuros) / 100; // taxa de juros em decimal
    const n = parseInt(numeroParcelas); // número de parcelas
    const VE = parseFloat(valorEntrada); // valor de entrada
    const PV = parseFloat(valorCompra); // valor a ser financiado
    const CF = i / (1 - (1 / Math.pow(1 + i, n))); // Coeficiente de Financiamento
  
    const semEntrada = {
      valorEntrada: 0,
      valorParcela: (PV * CF).toFixed(2),
      totalPagar: ((PV * CF) * n).toFixed(2),
    };
  
    return semEntrada;
  };
  
  export default calcularCenario1;
  
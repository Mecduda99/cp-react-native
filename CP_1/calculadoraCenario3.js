// calculadoraCenario3.js
const calcularCenario3 = (valorCompra, taxaJuros, numeroParcelas, valorEntrada) => {
  const i = parseFloat(taxaJuros) / 100; // taxa de juros em decimal
  const n = parseInt(numeroParcelas); // número de parcelas
  const VE = parseFloat(valorEntrada); // valor de entrada
  const PV = parseFloat(valorCompra); // valor a ser financiado
  const CF = i / (1 - (1 / Math.pow(1 + i, n))); // Coeficiente de Financiamento

  const entradaParcelasIguais = {
      valorEntrada: (PV * CF / (1 + CF)).toFixed(2), // Calcula o valor da entrada
      valorParcela: ((PV * CF / (1 + CF))).toFixed(2), // Calcula o valor da parcela
      totalPagar: (VE + ((PV * CF / (1 + CF)) * n)).toFixed(2), // Total a pagar é a soma da entrada com o valor financiado
  };

  return entradaParcelasIguais;
};
  
  export default calcularCenario3;
  
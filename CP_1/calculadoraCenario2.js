// calculadoraCenario2.js
const calcularCenario2 = (valorCompra, taxaJuros, numeroParcelas, valorEntrada) => {
    const i = parseFloat(taxaJuros) / 100; // taxa de juros em decimal
    const n = parseInt(numeroParcelas); // número de parcelas
    const VE = parseFloat(valorEntrada); // valor de entrada
    const PV = parseFloat(valorCompra - VE); // valor a ser financiado
    const CF = i / (1 - (1 / Math.pow(1 + i, n))); // Coeficiente de Financiamento
  
    const comEntrada = {
      valorEntrada: VE,
      valorParcela: (PV * CF).toFixed(2),
      totalPagar: (VE + ((PV * CF) * n)).toFixed(2),
    };
  // 0,16 * 8 =
    return comEntrada;
  };
  
  export default calcularCenario2;
  
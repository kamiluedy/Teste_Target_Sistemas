const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

const valorTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

const percentualSP = (faturamentoSP / valorTotal) * 100;
const percentualRJ = (faturamentoRJ / valorTotal) * 100;
const percentualMG = (faturamentoMG / valorTotal) * 100;
const percentualES = (faturamentoES / valorTotal) * 100;
const percentualOutros = (faturamentoOutros / valorTotal) * 100;

console.log("Percentual de representação por estado:");
console.log("SP:", percentualSP.toFixed(2) + "%");
console.log("RJ:", percentualRJ.toFixed(2) + "%");
console.log("MG:", percentualMG.toFixed(2) + "%");
console.log("ES:", percentualES.toFixed(2) + "%");
console.log("Outros:", percentualOutros.toFixed(2) + "%");

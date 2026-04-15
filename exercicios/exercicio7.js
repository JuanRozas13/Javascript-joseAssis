/**
 * Cálculo do valor da conta de luz
 * @author Juan Rozas
 */

prompt = require('prompt-sync')()
let consumoKwh, tarifaKwh, valorConta

console.clear()
console.log('Esse app ele calcula o valor da conta de luz. O usuário deve fornecer o consumo de energia em kWh e a tarifa por kWh, e o programa deve calcular e exibir o valor total da conta de luz.'
)

// entrada de dados
consumoKwh = Number(prompt('Digite o consumo de energia em Kwh: '))
tarifaKwh = Number(prompt('Digite a tarifa por Kwh: '))

// processamento
valorConta = consumoKwh * tarifaKwh

// saída de dados
console.log(' ')
console.log(`O valor total da conta de luz é de R$ ${valorConta.toFixed(2)}.`) // toFixed(2) limita a 2 casas decimais
/**
 * Cálculo do consumo diário de água
 * @author Juan Rozas
 */

const prompt = require('prompt-sync')()
let peso, consumoAgua

console.log(' ')
console.log('Esse app ele calcula o consumo diário de agua, que cada pessoa deve consumir.')
console.log(' ')

// entrada de dados
peso = Number(prompt('Digite o seu peso (em kg): '))

// processamento
consumoAgua = peso * 0.035

// saída de dados 
console.log(' ')
console.log(`o consumo de água que você deve consumir diariamente é de ${consumoAgua.toFixed(2)} litros.`) // toFixed(2) limita a 2 casas decimais
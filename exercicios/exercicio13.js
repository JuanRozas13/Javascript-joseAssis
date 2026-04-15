/**
 * Cálculo da quantidade de latas de tinta:
 * @author Juan Rozas
 */

const prompt = require('prompt-sync')()
let lata, parede, redimento

console.clear()
console.log('Esse app ele calcula a quantidade de latas de tinta necessárias para pintar uma parede. O usuário deve fornecer a área da parede e o rendimento da tinta.')
console.log(' ')

// entrada de dados
parede = Number(prompt('Digite a area da parede a ser pintada (em m²): '))
redimento = Number(prompt('Digite o rendimento da tinta (em m² por litro): '))

// processamento
lata = parede / redimento

// saída de dados
console.log(' ')
console.log(`A quantidade de latas de tinta necessárias para pintar a parede é de ${Math.ceil(lata)} latas.`) // toFixed(2) limita a 2 casas decimais
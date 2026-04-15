/**
 * Cálculo da área de um terreno:
 * @author Juan Rozas
 */

const prompt = require('prompt-sync')()
let comprimento, largura, area

console.clear()
console.log('Esse app ele calcula a área de um terreno. O usuário deve fornecer o comprimento e a largura do terreno, e o programa deve calcular e exibir a área do terreno.')
console.log(' ')

// entrada de dados
comprimento = Number(prompt('Digite o comprimento do terreno (em metros): '))
largura = Number(prompt('Digite a largura do terreno (em metros): '))

// processamento
area = comprimento * largura

//saida de dados
console.log('')
console.log(`A área do terreno é de ${area.toFixed(2)} metros quadrados.`)
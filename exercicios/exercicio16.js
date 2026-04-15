/**
 * Calculo de regra de 3
 * @author Juan Rozas
 */

const prompt = require('prompt-sync')()

console.clear()
console.log('Esse app ele calcula a regra de 3. O usuário deve fornecer os valores de A, B e C, e o programa deve calcular o valor de D usando a fórmula: D = (B * C) / A.')
console.log(' ')    

// entrada de dados
let x, y, d
x = Number(prompt('Digite o valor de A: '))
y = Number(prompt('Digite o valor de B: '))


// processamento
d = (x * y) / 100


// saída de dados
console.log(' ')
console.log(`O valor de D é: ${d.toFixed(2)}`) // toFixed(2) limita a 2 casas decimais
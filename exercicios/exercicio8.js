/**
 * calculo de troco
 * @author Juan Rozas
 */

const prompt = require('prompt-sync')()
let valorCompra, valorPago, troco

console.clear()
console.log('Esse app ele calcula p valor que uma pessoa deve receber ao comprar um produto')
console.log(' ')

//entrada de dados
valorCompra = Number(prompt('Digite o valor da compra: '))
valorPago = Number(prompt('Digite o valor pago: '))

//processamento
troco = valorPago - valorCompra

//saida de dados
console.log(' ')
if (troco < 0) {
    console.log('valor pago é menor que o valor da compra. Por favor, pague o valor correto.')
} else if (troco === 0) {
    console.log('Valor pago é igual ao valor da compra. Não há troco a ser devolvido.')
} else {
    console.log(`Valor do troco: R$ ${troco.toFixed(2)}`)
}
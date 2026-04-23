/**
 * calcula o IMC (Índice de Massa Corporal) de uma pessoa
 * Exemplo de encadeamento da estrutura if
 * @author Juan Rozas
 */

const prompt = require('prompt-sync')()

let peso, altura, imc

console.clear()
console.log('Cálculo do IMC (Índice de Massa Corporal)')
console.log(' ')

// entrada de dados
peso = Number(prompt('Digite seu peso (em kg): '))
altura = Number(prompt('Digite sua altura (em metros): '))

imc = peso /(altura * altura)

// saída de dados
console.log(' ')

if (imc < 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(2)}`)
    console.log('Você está abaixo do peso.')
} else if ( imc < 24.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}`)
    console.log('Você está com peso normal.')
} else if (imc < 29.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}`)
    console.log('Você está levemente acima do peso.')
} else if (imc < 34.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}`)
    console.log('Obesidade grau I.')
} else if (imc < 39.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}`)
    console.log('Obesidade grau II (Severa).')
} else {
    console.log(`Seu IMC é ${imc.toFixed(2)}`)
    console.log('Obesidade grau III (Mórbida).')
}


/**
 * Estudo das variáveis em JavaScript
 * @author [Juan Rozas]
 */

const prompt = require('prompt-sync')()
const colors = require('colors')

console.clear()
console.log('Ficha do aluno'.italic)
console.log('') 

// a linha a baixo mostra uma string no console 
console.log('String')

// a linha a baixo cria uma variavel do tipo string e mostra seu tipo no console
let nome = prompt('Digite seu nome:')
let idade = Number(prompt('Digite sua idade: '))
let peso = Number(prompt('Digite seu peso: '))
let altura = Number(prompt('Digite a sua altura: '))
let vip = true

// tipos prtimitivos: string, number, boolean
console.log(typeof(nome))
console.log('')
console.log(typeof(idade))
console.log('')
console.log(typeof(peso))
console.log('')
console.log(typeof(altura))
console.log('')
console.log(typeof(vip))



console.log('----------------------------')
console.log(' -     Ficha do aluno     - ')
console.log('----------------------------')

// alinha abaixo concatena (uniao) um texto com o conteudo da variavel nome e mostra no console
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}kg`)
console.log(`Altura: ${altura}m`)
console.log(`Vip: ${vip}`)
console.log(`Batimento por minuto: ${208 - (idade * 0.7)}bpm`)
// .toFixed(2) é usado para limitar o numero de casas decimais a 2
console.log(`Índice de Massa Corporal: ${(peso / (altura * altura)).toFixed(2)} `)
console.log('-----------------------------')

/**
 * Treinamento de JavaScript - Fundamentos
 * @author Juan Rozas
 * @author Diego Fernandes
 */

const prompt = require('prompt-sync')()

// Variáveis
let pedido

// UX 
console.clear()
console.log('Bem-vindo ao nossa confeitaria!')

// entrada
console.log('Menu de opções')
console.log('')
console.log('1 - Bolos caseiros')
console.log('2 - Bolos de pote')
console.log('3 - Bolos de festa')
console.log('')

pedido = Number(prompt("Selecione a baixo o menu desejado: "))

// Processamento e saída
switch (pedido) {
    case 1: 
        console.clear()
        console.log('Você selecionou Bolos caseiros')
        break
    case 2:
        console.clear()
        console.log('Você selecionou Bolos de pote')
        break
    case 3:
        console.clear()
        console.log('Você selecionou Bolos de festa')
        break
    default:
        console.clear()
        console.log('Opção inválida')
        break
}
/**
 * Tabuada usando estrutura while 
 * @author Juan Rozas
 */

const prompt = require('prompt-sync')()

let x = 1
let tabuada

console.clear()
console.log('Tabuada')

tabuada = Number(prompt('Digite o valor da tabuada que deseja: '))

while (x < 11){
    console.log(`${tabuada} x ${x} = ${tabuada * x}`)
    x++
}

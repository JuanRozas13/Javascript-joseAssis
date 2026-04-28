/**
 * 
 * @author Juan Rozas
 */

// for (let i = 10; i > 0 ; i-- ){
//     console.log(i)
// }

const prompt = require('prompt-sync')()

let tabuada
console.clear()

console.log('Tabuada')

tabuada = Number(prompt('Digite o valor da tabuada: '))

for (let i = 1; i < 11; i++){
    console.log(`${tabuada} x ${i} = ${tabuada * i}`)
}
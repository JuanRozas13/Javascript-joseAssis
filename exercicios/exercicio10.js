/**
 * Cálculo do tempo de viagem
 * @author Juan Rozas
 */

const prompt = require('prompt-sync')()

let tempo, distanciaTotal, velocidadeMedia

console.clear()
console.log('Esse app ele calcula o tempo necessário para uma viagem. O usuário deve fornecer a distância a ser percorrida e a velocidade média do veículo. O programa deve calcular e exibir o tempo de viagem.')
console.log(' ')

// entrada de dados
distanciaTotal = Number(prompt('Didite a distancia total da viagem em km: '))
velocidadeMedia = Number(prompt('Digite a velocidade média do veículo em km/h: '))

// processamento
tempo = distanciaTotal / velocidadeMedia

// saída de dados
console.log(' ')
console.log(`O tempo necessário para a viagem é de ${tempo.toFixed(2)} horas.`) // toFixed(2) limita a 2 casas decimais
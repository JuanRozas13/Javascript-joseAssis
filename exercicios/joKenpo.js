/**
 * Jogo do jokepo 
 * @author Juan Rozas 
*/

//importação de pacotes
const prompt = require('prompt-sync')()

//variáveis
let jogador, computador, novoJogo

//UX
do {
    console.clear()

    console.log('                    $$\   $$\         ')                               
    console.log('                    $$ | $$  |      ')                                 
    console.log('      $$\  $$$$$$\  $$ |$$  / $$$$$$\  $$$$$$$\   $$$$$$\   $$$$$$\ ')
    console.log('      \__|$$  __$$\ $$$$$  / $$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ ')
    console.log('      $$\ $$ /  $$ |$$  $$<  $$$$$$$$ |$$ |  $$ |$$ /  $$ |$$ /  $$ |')
    console.log('      $$ |$$ |  $$ |$$ |\$$\ $$   ____|$$ |  $$ |$$ |  $$ |$$ |  $$ |')
    console.log('      $$ |\$$$$$$  |$$ | \$$\\$$$$$$$\ $$ |  $$ |$$$$$$$  |\$$$$$$  |')
    console.log('      $$ | \______/ \__|  \__|\_______|\__|  \__|$$  ____/  \______/')
    console.log('$$\   $$ |                                       $$ |')
    console.log('\$$$$$$  |                                       $$ |')
    console.log(' \______/                                        \__|')

    novoJogo = 'n'


    //logica do jogador
    console.log('1. Pedra')
    console.log('2. Papel')
    console.log('3. Tesoura')
    jogador = Number(prompt('Escolha uma opção: '))
    console.log('')


    switch (jogador) {
        case 1:
            console.log('jogador escolheu pedra')
            break;
        case 2:
            console.log('jogador escolheu papel')
            break;
        case 3:
            console.log('jogador escolheu tesoura')
            break;
        default:
            console.log('Opção inválida')
            break;
    }

    // logica do computador
    computador = Math.floor(Math.random() * 3) 

    switch (computador) {
        case 1:
            console.log('computador escolheu pedra')
            break;
        case 2:
            console.log('computador escolheu papel')
            break;
        case 3:
            console.log('computador escolheu tesoura')
            break;
    }


    //logica para determinar o vencedor ou determinar empate
    if (jogador === computador) {
        console.log('Empate')

    } else if ((jogador === 1 && computador ===3) || (jogador ===2 && computador ===1) || (jogador === 3 && computador === 2)){
        console.log('Jogador venceu')
    } else {
        console.log('Computador venceu')
    }

    novoJogo = prompt('Deseja jogar novamente(s/n)')
} while (novoJogo === 's' || novoJogo === 'S')
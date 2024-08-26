/***
Instruções para entrega
# 1 Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" 
*/

let nome = "Super Tupiniquim"
//let xp = 1000
// let xp = 2000
// let xp = 5000
// let xp = 7000
// let xp = 8000
// let xp = 1000
// let xp = 9000
// let xp = 10000
 let xp = 11000

let nivelDoHeroi;

if(xp < 1000) {
    nivelDoHeroi = "ferro"
} else if (xp <= 2000) {
    nivelDoHeroi = "Bronze" 
} else if (xp <= 5000) {
    nivelDoHeroi = "Prata"
} else if (xp <= 7000) {
    nivelDoHeroi = "Ouro"
} else if (xp <= 8000) {
    nivelDoHeroi
} else if (xp <= 9000) {
    nivelDoHeroi = "Ascendente"
} else if (xp <= 10000) {
    nivelDoHeroi = "Imortal"
} else {
    nivelDoHeroi = "Radiante"
}

console.log(`O Herói chamado ${nome} está no nível ${nivelDoHeroi}`);

//Fim

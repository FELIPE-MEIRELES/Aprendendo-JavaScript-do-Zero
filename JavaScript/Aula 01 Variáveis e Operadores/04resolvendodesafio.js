/*Faça um programa para calcular o valor de uma viagem.

Você Terá 3 Variáveis, Sendo Elas:
1 - Preço do Combustível 
2 - gasto médio de combustível por km
3 - Distância em KM viagem

Imprima no console o valor que será gasto de combustível para realizar essa viagem.*/

const combustivel = 5;
const gastomedio = 10;
const viagemkm = 100;

const resultado = (viagemkm / gastomedio) * combustivel;

console.log("R$"+resultado)


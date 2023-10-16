/*
IMC = Peso / (altura * altura)
abaixo de 18.5 abaixo do peso
entre 18.5 e 25 peso normal
entre 25 e 30 acima do peso
entre 30 e 40 obeso
acima de 40 Obesidade Grave
*/
const altura = 1.80;
const peso = 75;
const imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("Abaixo do Peso")
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso Normal")
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso")
} else if (imc >= 30 && imc < 40) {
    console.log("Obeso")
} else {
    console.log("Obesidade Grave")
}

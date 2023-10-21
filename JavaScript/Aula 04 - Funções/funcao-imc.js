function calcularimc(peso, altura) {
    return peso / (altura * altura);
}
function classificarimc(imc) {
    if (imc < 18.5) {
        return "Abaixo do Peso"
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso Normal"
    } else if (imc >= 25 && imc < 30) {
        return "Acima do peso"
    } else if (imc >= 30 && imc < 40) {
        return "Obeso"
    } else {
        return "Obesidade Grave"
    }
}

const altura = 1.80;
const peso = 75;
const imc = calcularimc(peso, altura);
console.log(classificarimc(imc));
/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class carros {
    marca;
    cor;
    gastomedio;

    constructor (marca, cor, gastomedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastomedio = gastomedio;
    }
}

function calcular(carros, km, preco) {
    valormedio = km / (carros.gastomedio)
    gastoreais = valormedio * preco
    console.log(`O carro ${carros.marca} da cor ${carros.cor} gastou R$${gastoreais} em ${km}km`)
}

const lancer = new carros ("Honda-Civic","Preta",10)

calcular(lancer, 100, 10)
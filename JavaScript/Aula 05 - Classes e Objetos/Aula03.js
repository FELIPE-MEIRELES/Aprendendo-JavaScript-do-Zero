class pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`)
    }
}

const felipe = new pessoa();
felipe.nome = "Felipe Meireles";
felipe.idade = 20;

const bruno = new pessoa();
felipe.nome = "Bruno da Silve";
felipe.idade = 25;

console.log(felipe)
console.log(bruno)

felipe.descrever();
bruno.descrever();
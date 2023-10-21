class pessoa {
    nome;
    idade;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function compararpessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho(a) do que ${pessoa2.nome}`)
    } else if (pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} é mais velho(a) do que ${pessoa1.nome}`)
    } else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`)
    }
    
}

const felipe = new pessoa ("Felipe Meireles", 20);
const bruno = new pessoa ("Bruno da Silva", 25);

compararpessoas(felipe,bruno);
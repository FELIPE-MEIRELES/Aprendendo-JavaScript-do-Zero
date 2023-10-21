function formapagamento (pagamento) {
    if (pagamento === "Debito") {
        return produto - (produto*10/100) 
    } else if (pagamento === "PIX") {
        return produto - (produto*15/100)
    } else if (pagamento === "2 vezes") {
        return produto
    } else {
        return produto + (produto*10/100) 
    }
}

const produto = 50;
const valorapagar = formapagamento ("PIX")
console.log("R$"+valorapagar)


const produto = 50;
const pagamento = "PIX";
console.log("R$"+produto)

if (pagamento === "Debito") {
    const valorcomdesconto = produto - (produto*10/100) 
    console.log("R$"+valorcomdesconto)
} else if (pagamento === "PIX") {
    const valorcomdesconto = produto - (produto*15/100)
    console.log("R$"+valorcomdesconto)
} else if (pagamento === "2 vezes") {
    const valorcomdesconto = produto
    console.log("R$"+valorcomdesconto)
} else {
    const valorcomdesconto = produto + (produto*10/100)
    console.log("R$"+valorcomdesconto) 
}
let soma = 0;

for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt("Digite o " + i + "º número:"));
    soma += num;
}

console.log("Soma total:", soma);
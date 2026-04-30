let soma = 0;

for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt("Digite a " + i + "ª nota:"));
    soma += nota;
}

let media = soma / 5;

console.log("Média:", media);
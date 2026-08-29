const nome = prompt("Por favor, digite o seu nome:");
const elementosaudacao = document.getElementById("saudacao");

// Solicita os dados (lembre o usuário de usar PONTO na altura)
const peso = parseFloat(prompt("Por favor, digite seu peso em kg (ex: 70):"));
const altura = parseFloat(prompt("Digite a sua altura em metros (ex: 1.75):"));

if (peso > 0 && altura > 0) {
    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);

    let mensagem = "";

    if (imc < 18.5) {
        mensagem = `Abaixo do peso (IMC: ${imcFormatado})`;
    } else if (imc >= 18.5 && imc < 25) {
        mensagem = `Peso normal (IMC: ${imcFormatado})`;
    } else if (imc >= 25 && imc < 30) {
        mensagem = `Sobrepeso (IMC: ${imcFormatado})`;
    } else {
        mensagem = `Obesidade (IMC: ${imcFormatado})`;
    }

    // Insere o resultado na página HTML dentro do elemento id="saudacao"
    if (nome && nome.trim() !== "") {
        elementosaudacao.textContent = `Olá, ${nome.trim()}! Seu IMC é:  ${mensagem}`;
    } else {
        elementosaudacao.textContent = `Olá, visitante! Seu IMC é: ${mensagem}`;
    }

} else {
    elementosaudacao.textContent = "Por favor, insira valores válidos para peso e altura.";
}
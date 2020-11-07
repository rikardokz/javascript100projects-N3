const button = document.getElementById("button");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const quotes = [
    {
        quote: "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
        author: "Zig Ziglar",
    },
    {
        quote: "Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.",
        author: "Dwight Eisenhower",
    },
    {
        quote: "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
        author: "Dalai Lama",
    },
    {
        quote: "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.",
        author: "Charlie Brown Jr",
    },
    {
        quote: "A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.",
        author: "Frederick Herzberg",
    },
    {
        quote: "É parte da cura o desejo de ser curado.",
        author: "Sêneca",
    },

]

function randomQuote() {
    const rand = Math.floor(Math.random() * 6)
    quote.innerHTML = `"${quotes[rand].quote}"<span>- ${quotes[rand].author}</span>`;
}

button.addEventListener("click", randomQuote);
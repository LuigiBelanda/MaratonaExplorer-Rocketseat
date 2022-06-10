// pegando o elemento HTML com o id resposta
const elementoResposta = document.querySelector("#resposta");

// pegando nosso input com o id inputPergunta
const elementoInput = document.querySelector("#inputPergunta");

// pegando nosso button com o id buttonPerguntar
const buttonPerguntar = document.querySelector("#buttonPerguntar");

// lista de respostas que podem ser exibidas para o user
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim",
];

// numero total de respostas
const total_respostas = respostas.length;

// clicar em fazer pergunta
function fazerPergunta() {
    // elementoInput.value -> vendo se nós temos algum conteúdo vindo do user pelo input
    if (elementoInput.value === "") {
        alert("Por favor, digite uma pergunta!");
        return;
    } else {
        console.log("Cliquei no botão");

        // setAttribute -> Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico.
        // aqui estamos falando que o atributo "disabled" do button é true
        // ou seja, nosso botão não irá funcionar enquanto a resposta do user não sumir
        buttonPerguntar.setAttribute("disabled", true);

        // criando a estrutura de como iremos mostrar a pergunta que o user fez
        const pergunta = "<div>" + elementoInput.value + "</div>";

        // num aleatório para pegar alguma resposta
        const numAleatorio = Math.floor(Math.random() * total_respostas);

        // pegando nosso elemento HTML com id resposta e passando o que queremos que ele exiba, neste caso será alguma resposta do nosso array
        // estamos concatenando também com a pergunta que o user fez, ou seja, será exibida a pergunta também
        elementoResposta.innerHTML = pergunta + respostas[numAleatorio];

        // voltando a opacidade para 1, assim conseguiremos ver o resultado na tela
        elementoResposta.style.opacity = 1;

        // sumindo a pergunta e resposta depois de 3s
        // setTimeout(função() {}, tempo);
        // tempo -> ms
        // função -> o que será executado depois de passar o tempo que colocamos
        setTimeout(function () {
            elementoResposta.style.opacity = 0;
            // retirando o atributo "disabled" do button, ou seja, ele volta a funcionar
            buttonPerguntar.removeAttribute("disabled");
        }, 3000);
    }
}

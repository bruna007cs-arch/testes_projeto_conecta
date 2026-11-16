
const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const retorno = document.getElementById("retorno");

    retorno.textContent =
        "Obrigado, " + nome +
        "! Sua mensagem foi recebida com sucesso.";

    formulario.reset();

});

const form = document.getElementById ("form-cadastro");
const campoA = document.getElementById ("campo-A");
const campoB = document.getElementById ("campo-B"); // definindo as constantes que serão usadas no código: a constante do formulário - de onde virão os dados - do campo A e do campo B

form.addEventListener("submit", function(e) { // começando a função após o evento submit - envio do formulário
    e.preventDefault();

    const mensagemSucesso = `Formulário enviado com sucesso`;
    const mensagemFalha = `<b>ATENÇÃO:</b> valor do Campo B <b>deve ser maior</b> que o campo A`;
    const textoMensagemSucesso = document.querySelector('.mensagem-sucesso');
    const textoMensagemFalha = document.querySelector('.alerta-erro');

    if (campoB.value > campoA.value) {
        textoMensagemSucesso.innerHTML = mensagemSucesso;
        textoMensagemSucesso.style.display = 'block';

        textoMensagemFalha.innerHTML = mensagemFalha;
        textoMensagemFalha.style.display = 'none';

        campoA.value = ' ';
        campoB.value = ' ';
    }

    else {
        textoMensagemFalha.innerHTML = mensagemFalha;
        textoMensagemFalha.style.display = 'block';

        textoMensagemSucesso.innerHTML = mensagemSucesso;
        textoMensagemSucesso.style.display = 'none';
    }

})
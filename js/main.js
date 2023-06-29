$('document').ready (function(){
    $('#cpf').mask ('000.000.000-00', {
        placeholder: 'CPF:'
    })
    $('#celular').mask ('(00) 00000-0000', {
        placeholder: 'Celular:'
    })
    $('#cep').mask ('00000-000', {
        placeholder: 'CEP:'
    })

    $('form').validate ({
        rules: {
            nomeCompleto: {
                required: true
            },
            celular: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: false
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            },
            cidade: {
                required: true
            },
            estado: {
                required: true
            }
        },
        messages: {
            nomeCompleto:'campo obrigatório',
            email: 'campo obrigatório',
            celular: 'campo obrigatório',
            cep: 'campo obrigatório',
            endereco: 'campo obrigatório',
            cidade: 'campo obrigatório',
            estado: 'campo obrigatório'
        },
    })
})
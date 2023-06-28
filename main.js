$(document).ready(function() { 
    $('form').on('submit', function(e) {
    e.preventDefault();
    const nomeNovaTarefa = $('#nome-nova-tarefa').val();
    const novaLinha = $('<li></li>');
    $(`<p>${nomeNovaTarefa}</p>`).appendTo(novaLinha);
    $(novaLinha).appendTo('ul');
    
    $('#nome-nova-tarefa').val('');
})
    $('ul').on('click', 'li', function() {
        $(this).css({'text-decoration': 'line-through'}); // forma simplificada de chamar o css, o 'this' se referencia ao seletor principal
    })
})
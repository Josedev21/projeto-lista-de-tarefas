let linhas
$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const Tarefa = $('#adiciona-tarefa').val();   
        const novaLinha = $('<tr></tr>');

        $(`<td>${Tarefa}</td>`).appendTo(novaLinha);
        $(novaLinha).appendTo('tbody');

        $('#adiciona-tarefa').val('');
    })
        
})
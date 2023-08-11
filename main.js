$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const Tarefa = $('#adiciona-tarefa').val();
        const adicionaTarefa = $('<li style="display: none"></li>');

        $(`<td>${Tarefa} </td>`).appendTo(adicionaTarefa);

        $(adicionaTarefa).appendTo('td');

    })
})
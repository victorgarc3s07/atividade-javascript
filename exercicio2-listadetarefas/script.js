//INICIANDO OS TRABALHOS

document.getElementById('form-tarefas').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let novaTarefaInput = document.getElementById('novaTarefa');
    let novaTarefa = novaTarefaInput.value.trim();

    if (novaTarefa !== '') {
        const listaTarefas = document.getElementById('lista-tarefas');

        const tarefaItem = document.createElement('p');
        tarefaItem.textContent = novaTarefa;

        listaTarefas.appendChild(tarefaItem);

        novaTarefaInput.value = '';
    }
});
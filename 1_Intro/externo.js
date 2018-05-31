window.onload = function () {
    carrega_nome();


    document.getElementById('um').onclick = function () {
        informacao()
    };

    document.getElementById('dois').ondblclick = function () {
        informacao()
    };

    function informacao() {
        var nome = window.prompt('Digite seu nome:');
        var idade = prompt('Digite sua idade:');
        alert('Nome: ' + nome + ' Idade: ' + idade);
    }

    function carrega_nome() {
        document.getElementById('nome').value = 'Giuseppe';
    }
};

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, insira um nome.');
    } else {
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i].toLowerCase() == amigo.toLowerCase()) {
                alert('Este amigo já foi adicionado!');
                return;
            }
        }
        amigos.push(amigo);
        exibirNaLista(amigo, 'listaAmigos');
        limparCampo();
    }
}

function limparCampo() {
    let nome = document.getElementById('amigo');
    nome.value = '';
}

function exibirNaLista(amigo, id) {
    let pessoa = document.getElementById(id);
    let p = document.createElement('p');
    p.innerHTML = amigo;
    pessoa.appendChild(p);
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('A lista de amigos está vazia!');
    } else {
        let sorteio = parseInt(Math.random() * amigos.length);
        let sorteado = `O amigo secreto sorteado é: ${amigos[sorteio]}`;
        removerLista();
        let listaSorteio = document.getElementById('resultado');
        listaSorteio.innerHTML = sorteado;
    }
}

function removerLista() {
    let lista = document.getElementById('listaAmigos');
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    amigos = [];
}
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;    
    if (amigo == ''){
        alert ('Por favor, insira um nome.');        
    }else{
        for (let i=0; i<amigos.length; i++){            
            if (amigos[i].toLowerCase() == amigo.toLowerCase()){
                alert ('Este amigo já foi adicionado!');
                return;
            }
        }
        amigos.push(amigo);
        limparCampo();
    }
}

function limparCampo(){
    let amigo = document.getElementById('amigo');
    amigo.value = '';
}
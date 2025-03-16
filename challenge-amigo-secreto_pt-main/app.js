//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
/* Array para armazenar os amigos */
let amigos = [];

/* Função para adicionar amigos à lista */
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');  /* Captura o valor do campo de entrada */
    const amigoNome = amigoInput.value.trim();  /* Remove espaços extras ao redor do nome */

    /* Verificar se o campo está vazio */
    if (amigoNome === '') {
        alert('Por favor, insira um nome.');
        return;  /* Não faz nada se o nome estiver vazio */
    }

    /* Adicionar o nome ao array de amigos */
    amigos.push(amigoNome);

    /* Atualizar a lista na página */
    atualizarListaAmigos();

    /* Limpar o campo de entrada */
    amigoInput.value = '';
}

/* Função para atualizar a lista de amigos visível na página */
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');  /* Referência ao elemento de lista */
    listaAmigos.innerHTML = '';  /* Limpa a lista atual */
        amigos.forEach(amigo => {
        const itemLista = document.createElement('li');  /* Cria um novo item de lista */
        itemLista.textContent = amigo;  /* Adiciona o nome do amigo ao item */
        listaAmigos.appendChild(itemLista);  /* Adiciona o item à lista */
    });
}

/* Função para sortear um amigo secreto aleatoriamente */
function sortearAmigo() {
    /* Verificar se há amigos na lista para sortear */
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome para sortear!');
        return;  /* Não faz nada se a lista estiver vazia */
    }

    /* Gerar um índice aleatório */
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    /* Obter o nome sorteado */
    const amigoSorteado = amigos[indiceAleatorio];

    /* Exibir o nome sorteado na área de resultados */
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}

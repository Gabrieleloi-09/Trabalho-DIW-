const dados = [
  {
    "id": 1,
    "titulo": "freddy krueger",
    "descricao": "é o icônico antagonista da franquia de terror A Hora do Pesadelo",
    "conteudo": "Ele é um espírito maligno com o rosto desfigurado por queimaduras, que veste um suéter listrado e usa uma luva com garras afiadas de metal, aterrorizando e assassinando suas vítimas dentro dos seus próprios sonhos",
    "categoria": "Personagens",
    "autor": "Eloi",
    "data": "2026-05-17",
    "imagem": "https://upload.wikimedia.org/wikipedia/pt/b/b2/Freddy_Krueger.jpg" 
  },
  {
    "id": 2,
    "titulo": "Chucky",
    "descricao": "O brinquedo assassino possuído por um serial killer.",
    "conteudo": "Charles Lee Ray, o famoso 'Estrangulador de Lakeshore', usa magia vodu para transferir sua alma para um boneco da linha Good Guy. Agora, ele busca um corpo humano para possuir de verdade.",
    "categoria": "Personagens",
    "autor": "Eloi",
    "data": "2026-05-15",
    "imagem": "https://www.turbinado.art.br/site/img/artigos/large/4377-1.jpg"
  },
  {
    "id": 3,
    "titulo": "Sexta-Feira 13",
    "descricao": "Um dos maiores clássicos do terror slasher.",
    "conteudo": "Lançado originalmente em 1980, o filme conta a história de um grupo de monitores de acampamento que são assassinados um a um por um perseguidor desconhecido enquanto tentam reabrir Crystal Lake.",
    "categoria": "Filmes",
    "autor": "Eloi",
    "data": "2026-05-10",
    "imagem": "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/08/sexta-feira-13.jpg?w=1200&h=900&crop=1"
  }
];

document.addEventListener("DOMContentLoaded", () => {
    // Se existir o elemento container de listagem, estamos na index.html
    const containerLista = document.getElementById("catalogo-itens");
    if (containerLista) {
        renderizarLista(containerLista);
    }

    // Se existir o elemento de detalhes, estamos na detalhes.html
    const containerDetalhe = document.getElementById("detalhe-item");
    if (containerDetalhe) {
        renderizarDetalhes(containerDetalhe);
    }
});

function renderizarLista(container) {
    container.innerHTML = ""; // Limpa o container

    dados.forEach(item => {
        // Criando a estrutura do card do Bootstrap de forma dinâmica
        const cardHtml = `
            <div class="col-md-4 col-sm-6 mb-4">
                <div class="card h-100 bg-secondary border border-light text-white">
                    <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${item.titulo}</h5>
                        <p class="card-text">${item.descricao}</p>
                        <span class="badge bg-dark mb-2 align-self-start">${item.categoria}</span>
                        <a href="detalhes.html?id=${item.id}" class="btn btn-danger mt-auto">Ver Detalhes</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });
}

function renderizarDetalhes(container) {
    // Pegar o ID enviado na URL (?id=X)
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = parseInt(urlParams.get('id'));

    // Encontra o item correspondente no JSON
    const itemEncontrado = dados.find(item => item.id === idParam);

    if (!itemEncontrado) {
        container.innerHTML = `<div class="alert alert-danger">Item não encontrado! <a href="index.html">Voltar</a></div>`;
        return;
    }

    container.innerHTML = `
        <div class="row m-4">
            <div class="col-md-5">
                <img src="${itemEncontrado.imagem}" class="img-fluid rounded border border-light" alt="${itemEncontrado.titulo}">
            </div>
            <div class="col-md-7 text-white">
                <h1 class="display-4">${itemEncontrado.titulo}</h1>
                <p class="text-muted">Publicado por ${itemEncontrado.autor} em ${itemEncontrado.data} | Categoria: <strong>${itemEncontrado.categoria}</strong></p>
                <hr class="border-light">
                <p class="lead">${itemEncontrado.descricao}</p>
                <p>${itemEncontrado.conteudo}</p>
                <a href="index.html" class="btn btn-outline-light mt-3">Voltar para a Vitrine</a>
            </div>
        </div>
    `;
}
  
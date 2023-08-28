// Obter a url
let url = window.location.href;

// Posição do código do filme
let posicaoNome = url.indexOf("filme=") + 6;

// Código do filme
let codigoFilme = url.substring(posicaoNome);

const apikey = 'bc4a94c4';

fetch(`https://www.omdbapi.com/?i=${codigoFilme}&apikey=${apikey}`)
    .then(result => result.json())
    .then(json => {
        const titleElement = document.createElement('h1');
        titleElement.textContent = json.Title;
        document.body.appendChild(titleElement);

        const yearElement = document.createElement('p');
        yearElement.textContent = `Year: ${json.Year}`;
        document.body.appendChild(yearElement);

        const plotElement = document.createElement('p');
        plotElement.textContent = `Plot: ${json.Plot}`;
        document.body.appendChild(plotElement);

        const genreElement = document.createElement('p');
        genreElement.textContent = `Genre: ${json.Genre}`;
        document.body.appendChild(genreElement);

        const runtimeElement = document.createElement('p');
        runtimeElement.textContent = `Runtime: ${json.Runtime}`;
        document.body.appendChild(runtimeElement);
    })
    .catch(error => console.error('Erro ao buscar informações do filme:', error));


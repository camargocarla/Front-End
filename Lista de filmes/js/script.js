function pesquisar() {
    const apikey = 'c89dd112';
    const filme = document.getElementById("filme").value;

    if (filme === "") {
        alert('Preencha o campo!');
        return;
    }

    fetch(`https://www.omdbapi.com/?s=${filme}&apikey=${apikey}`)
        .then(result => result.json())
        .then(json => carregaLista(json));
}

const carregaLista = (json) => {
    const lista = document.querySelector(".lista");
    lista.innerHTML = "";

    if (!json.Response) {
        console.log("Nenhum resultado encontrado.");
        return;
    }

    json.Search.forEach(element => {
        const item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<a href="info.html?filme=${element.imdbID}"><img src="${element.Poster}"/> <h2>${element.Title}</h2></a>`;

        lista.appendChild(item);
    });
}


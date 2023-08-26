function pesquisar() {
    const apikey = 'bc4a94c4';
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

        item.innerHTML = `<img src="${element.Poster}"/> <h2>${element.Title}</h2>`;

        lista.appendChild(item);
    });
}

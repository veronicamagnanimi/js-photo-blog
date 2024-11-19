//prelevo elementi dal dom 
const rowElem = document.querySelector(".row");
let image = [];


//esecuzione logica
const printPosts = () => {
    image.forEach(curItem => {
        rowElem.innerHTML += `<div class="col-12 col-md-6 col-lg-4 py-4 d-flex ptrel">
                <div class="card flex-fill">
                    <img src="${curItem.thumbnailUrl}">
                    <div class="card-body">
                        <p class="p-style">${curItem.title}</p>
                    </div>
                </div>
            </div>`;
    });
}

//api
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp => {
    console.log(resp.data);  //restituisce l'intera risposta del server
    image = resp.data;
    printPosts();
})


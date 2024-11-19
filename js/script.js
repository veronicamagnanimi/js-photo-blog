

//prelevo elementi dal dom 
const rowElem = document.querySelector(".row");
let image = [];

//esecuzione logica
const printPosts = () => {
    image.forEach(curItem => {
        rowElem.innerHTML += `<div class="col-lg-6 col-md-3 col-12 ptrel">
                <div class="card">
                    <img src="${curItem.thumbnailUrl}">
                    <div class="card-body">
                        <p class="p-style">${curItem.title}</p>
                    </div>
                </div>
            </div>`
    })
}

//api
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp => {
    console.log(resp.data);  //restituisce l'intera risposta del server
    printPosts();
})


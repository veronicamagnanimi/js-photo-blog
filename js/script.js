//prelevo elementi dal dom 
const rowElem = document.querySelector(".row");
const overlayElem = document.getElementById("overlay");
const btnElem = document.getElementById("overlay-btn");
const imgElem = document.getElementById("overlay-img");


let image = [];

//esecuzione logica
const printPosts = () => {
    image.forEach(curItem => {
        rowElem.innerHTML += `<div class="col-12 col-md-6 col-lg-4 py-4 d-flex posrel">
                <div class="card flex-fill" data-post-id="${curItem.id}">
                    <img src="${curItem.thumbnailUrl}">
                    <div class="card-body">
                        <p class="p-style">${curItem.title}</p>
                    </div>
                </div>
            </div>`;
    });
}

//funzioni per aggiungere/rimuovere l'overlay
const addOverlay = () => {
    overlayElem.classList.remove("d-none");
    overlayElem.classList.add("d-flex");
}

const notOverlay = () => {
    overlayElem.classList.remove("d-flex");
    overlayElem.classList.add("d-none");
}


//evento sul click della card
const addClick = () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(curCard => {
        curCard.addEventListener("click", addOverlay);
    })
}

//api
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp => {
    console.log(resp.data);  //restituisce l'intera risposta del server
    image = resp.data;
    printPosts();
    addClick();
})


//evento bottone chiudi
btnElem.addEventListener("click", notOverlay);


//prelevo i nodi
const rowElem = document.querySelector(".row");
const overlayElem = document.getElementById("overlay");
const btnElem = document.getElementById("overlay-btn");
const imgElem = document.getElementById("overlay-img");


let image = [];

//esecuzione logica data-post-id memorizza l'id dell'elemento
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

/////FUNZIONI//////

//aggiungo l'overlay
const addOverlay = (imageId) => {

    const selectImg = image.find(itemImg => itemImg.id === imageId);  //trovo l'immagine con l'ID corrispondente
    console.log(selectImg);

    if (selectImg) {   //se l'immagine con l'id trovato sopra esiste, si aggiorna l'overlay
        imgElem.src = selectImg.url;
    
    overlayElem.classList.remove("d-none");
    overlayElem.classList.add("d-flex");
}}


//nascondo l'overlay
    const notOverlay = () => {
    overlayElem.classList.remove("d-flex");
    overlayElem.classList.add("d-none");
}

//evento sul click
const addClick = () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(curCard => {
    curCard.addEventListener("click", () => {
    const imageId = parseInt(curCard.dataset.postId); //l'attributo data mi restituisce la stringa, undefined, quindi converto per avere l'id
        addOverlay(imageId);
        });
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


const listbooks = document.getElementById("listbooks");
const listanime = document.getElementById("listanime")

async function getBooks(){
    const response = await fetch('/books/results');
    const json = await response.json();
    const { title,author,genre,description } = json;
    var books = '';
    
    json.data.forEach(book => {
        books += `
        <div class="row">
            <div class="col-md>
                <div class="card">
                    <h5 class="card-header">${book.title}</h5>
                    <div class="card-body">
                    <h5 class="card-title">${book.author}</h5>
                    <h6 class="card-title">${book.genre}</h6>
                    <p class="card-text">${book.description}</p>
                    </div>
                </div>
            </div>
        </div>
        `
        listbooks.innerHTML += books;
        
    });

}
getBooks();

async function getAnime(){
    const response = await fetch('/anime/results');
    const json = await response.json();
    const {anime_id,anime_name,anime_img} = json;
    var animes = '';

    json.data.forEach(anime => {
        animes += `
        <div class="card m-1" style="width: 18rem;">
            <img src="${anime.anime_img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${anime.anime_id}</h5>
                <p class="card-text">${anime.anime_name}</p>
            </div>
        </div>
        
        `
        listanime.innerHTML += animes;
    })

};
getAnime();
const listbooks = document.getElementById("listbooks");

async function getBooks(){
    const response = await fetch('/results');
    const json = await response.json();
    const { title,author,genre,description } = json;
    var books = '';
    
    json.data.forEach(book => {
        books += `
        <div class="card">
            <h5 class="card-header">${book.title}</h5>
            <div class="card-body">
            <h5 class="card-title">${book.author}</h5>
            <h6 class="card-title">${book.genre}</h6>
            <p class="card-text">${book.description}</p>
            </div>
        </div>
        
        `
        listbooks.innerHTML += books
        
    });

}
getBooks()
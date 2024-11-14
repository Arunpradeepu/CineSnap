const APILINK = 'https://www.omdbapi.com/?s=war&apikey=c40ec274';
const SEARCHAPI = "https://www.omdbapi.com/?s=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);

function returnMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(function(data) {
            console.log(data.Search);
            if (data.Search) {
                main.innerHTML = ''; 
                data.Search.forEach(element => {
                    const div_card = document.createElement('div');
                    div_card.setAttribute('class', 'card');

                    const image = document.createElement('img');
                    image.setAttribute('class', 'thumbnail');
                    image.src = element.Poster !== "N/A" ? element.Poster : "placeholder.jpg"; 

                    const title = document.createElement('h3');
                    title.innerHTML = `${element.Title}<br><a href="movie.html?id=${element.imdbID}&title=${element.Title}">reviews</a>`;

                    div_card.appendChild(image);
                    div_card.appendChild(title);
                    main.appendChild(div_card);
                });
            } else {
                main.innerHTML = '<p>No results found.</p>'; 
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            main.innerHTML = '<p>There was an error fetching the movie data. Please try again later.</p>'; 
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + encodeURIComponent(searchItem) + "&apikey=c40ec274");
        search.value = "";
    }
});

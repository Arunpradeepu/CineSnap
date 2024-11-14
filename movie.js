window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id'); // Get the IMDb ID from the URL

    if (movieId) {
        const movieDetailsURL = `https://www.omdbapi.com/?i=${movieId}&apikey=c40ec274`;

        fetch(movieDetailsURL)
            .then(res => res.json())
            .then(data => {
              
                document.getElementById('movieTitle').innerText = data.Title;
                document.getElementById('moviePoster').src = data.Poster;

                document.getElementById('movieRating').innerText = `IMDb Rating: ${data.imdbRating}`;
                document.getElementById('movieDirector').innerText = `Director: ${data.Director}`;
                document.getElementById('movieActors').innerText = `Actor: ${data.Actors}`;
                document.getElementById('movieRuntime').innerText = `Runtime: ${data.Runtime}`;


                document.getElementById('movieYear').innerText = `Released: ${data.Released}`;
                document.getElementById('movieGenre').innerText = ` ${data.Genre}`;


                document.getElementById('moviePlot').innerText = `Plot: ${data.Plot}`;
             
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
                document.getElementById('error').innerText = 'Failed to load movie details.';
            });
    } else {
        document.getElementById('error').innerText = 'Movie not found!';
    }
};

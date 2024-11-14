const animatedMovies = [
    {
      title: "Toy Story",
      year: "1995",
      genre: "Animation, Adventure, Comedy",
      imdbID: "tt0114709",
      poster: "https://covers.mymovies.dk/631ac509-2712-48ad-b7a4-0a36961591d9.jpg",
      plot: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."
    },
    {
      title: "Shrek",
      year: "2001",
      genre: "Animation, Adventure, Comedy",
      imdbID: "tt0126029",
      poster: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/shrek_27.jpg",
      plot: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back."
    },
    {
      title: "Finding Nemo",
      year: "2003",
      genre: "Animation, Adventure, Comedy",
      imdbID: "tt0266543",
      poster: "https://image.tmdb.org/t/p/original/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
      plot: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home."
    },
    {
      title: "The Incredibles",
      year: "2004",
      genre: "Animation, Action, Adventure",
      imdbID: "tt0317705",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkAgV_vWG9VxxKkPHN74dgNcMEirAubzLtEA&s",
      plot: "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world."
    },
    {
      title: "Spirited Away",
      year: "2001",
      genre: "Animation, Adventure, Family",
      imdbID: "tt0245429",
      poster: "https://m.media-amazon.com/images/I/71jt+BIRZlL.jpg",
      plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts."
    },
    {
      title: "Up",
      year: "2009",
      genre: "Animation, Adventure, Comedy",
      imdbID: "tt1049413",
      poster: "https://c8.alamy.com/comp/P2XGHP/original-film-title-i-english-title-i-film-director-pete-docter-year-2009-credit-pixar-animation-studios-album-P2XGHP.jpg",
      plot: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway."
    },
    {
      title: "Coco",
      year: "2017",
      genre: "Animation, Adventure, Comedy",
      imdbID: "tt2380307",
      poster: "https://m.media-amazon.com/images/M/MV5BZGE4NmY0MjYtOTE1YS00NTU1LTlmYjktNmE4NWMwOTg3NzdjXkEyXkFqcGc@._V1_QL75_UX480_.jpg",
      plot: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer."
    },
    {
      title: "Ratatouille",
      year: "2007",
      genre: "Animation, Adventure, Comedy",
      imdbID: "tt0382932",
      poster: "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
      plot: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant."
    },
    {
      title: "Inside Out",
      year: "2015",
      genre: "Animation, Adventure, Comedy",
      imdbID: "tt2096673",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOChzbAVxomR8C_1Lwz_wrlssxRFd_lVWtA&s",
      plot: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions—Joy, Fear, Anger, Disgust, and Sadness—conflict on how best to navigate a new city, house, and school."
    },
    {
      title: "Zootopia",
      year: "2016",
      genre: "Animation, Adventure, Comedy",
      imdbID: "tt2948356",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbw3MDkj956ekfrWnkxCYBW6JVnUmWlYxoA&s",
      plot: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy."
    }
  ];
  
  function displayTopAnimatedMovies(movies) {
    const movieSection = document.getElementById('top-animated-section');
    movieSection.innerHTML = ''; 
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `
            <img class="post" src="${movie.poster}" alt="${movie.title} Poster" />
    
      <h2>${movie.title}</h2>
        <p class="year"> ${movie.year}</p>
        <p class="genre"> ${movie.genre}</p>
        <p class="reviews">REVIEW</p>
      `;
      movieSection.appendChild(movieElement);
    });
  }
  
  displayTopAnimatedMovies(animatedMovies);
  
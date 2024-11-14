const topThrillerMovies =[
  {
    title:"Inception",
    year: "2010",
    genre:"Thriller",
    poster:"https://posterspy.com/wp-content/uploads/2024/05/inception.jpg",
    plot:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."
  },
  {
    title: "Shutter Island",
    year: "2010",
    genre: "Thriller",
    imdbID: "tt1130884",
    poster:"https://media-cache.cinematerial.com/p/500x/kh8fpere/shutter-island-movie-poster.jpg?v=1456831510", 
    plot: "A U.S. Marshal investigates the disappearance of a prisoner from a hospital for the criminally insane."
  },
  {
    title: "The Dark Knight",
    year: "2008",
    genre: "Thriller, Action, Crime",
    imdbID: "tt0468569",
    poster:  "https://c8.alamy.com/comp/2JJHH6W/christian-bale-poster-the-dark-knight-rises-2012-2JJHH6W.jpg",
    plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, forcing Batman to come out of retirement."
  },
  {
    title: "Gone Girl",
    year: "2014",
    genre: "Thriller, Mystery, Drama",
    imdbID: "tt2267998",
    poster: "https://image.tmdb.org/t/p/original/yOGG2o157R4b5XpfiRVRrVqMRIx.jpg",
    plot: "With his wife's disappearance, a man becomes the prime suspect in a modern-day whodunit."
  },
  {
    title: "Se7en",
    year: "1995",
    genre: "Thriller, Crime, Drama",
    imdbID: "tt0114369",
    poster: "https://i.pinimg.com/474x/f0/3e/d1/f03ed1203abf1830029c0cfb471571a9.jpg",
    plot: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi."
  },
  {
    title: "Prisoners",
    year: "2013",
    genre: "Thriller, Crime, Drama",
    imdbID: "tt1392214",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71YOq9uB18oQfuWMe3FI2e6_kqaYYUFqxOA&s",
    plot: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the investigation unfolds."
  },
  {
    title: "The Sixth Sense",
    year: "1999",
    genre: "Thriller, Mystery, Drama",
    imdbID: "tt0167404",
    poster: "https://www.hdmoviesource.com/v/vspfiles/photos/16061-2T.jpg",
    plot: "A troubled young boy is visited by spirits who seek the help of a disheartened child psychologist."
  },
  {
    title: "The Girl with the Dragon Tattoo",
    year: "2011",
    genre: "Thriller, Crime, Mystery",
    imdbID: "tt1568346",
    poster: "https://image.tmdb.org/t/p/original/j4Ra0SvYM08winX6fxn6AknlygV.jpg",
    plot: "A journalist and a computer hacker work together to solve the case of a missing woman from 40 years ago."
  },
  {
    title: "Zodiac",
    year: "2007",
    genre: "Thriller, Crime, Mystery",
    imdbID: "tt0443706",
    poster: "https://image.tmdb.org/t/p/original/ydIO7g1XWLoWdTwVURsrQFfl0uW.jpg",
    plot: "A cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer."
  },
  {
    title: "Memento",
    year: "2000",
    genre: "Thriller, Mystery, Drama",
    imdbID: "tt0209144",
    poster: "https://posterspy.com/wp-content/uploads/2021/01/memento2020-1.jpg",
    plot: "A man suffering from short-term memory loss attempts to track down his wife's murderer."
  }

];

function displayTopThrillerMovies(movies) {
  const movieSection = document.getElementById('top-thriller-section');
  movieSection.innerHTML = ''; 
  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.className="movie_card";
    movieElement.innerHTML = `
          <img class="post" src="${movie.poster}" alt="${movie.title} Poster" />
  
    <h2 class="movie">${movie.title}</h2>
      <p class="year"> ${movie.year}</p>
      <p class="genre"> ${movie.genre}</p>
      <p class="reviews">REVIEW</p>
    `;
    movieSection.appendChild(movieElement);
  });
}

displayTopThrillerMovies(topThrillerMovies);


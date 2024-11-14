const fantasyMovies = [
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: "2001",
      genre: "Adventure, Drama, Fantasy",
      imdbID: "tt0120737",
      poster: "https://posterdrops-images.s3.amazonaws.com/art_images/middle/LOTR_WEB_1024x1024_20231006_124332_1.webp",
      plot: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      year: "2001",
      genre: "Adventure, Family, Fantasy",
      imdbID: "tt0241527",
      poster: "https://m.media-amazon.com/images/I/81m9fP+LIPL._UF1000,1000_QL80_.jpg",
      plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family, and the terrible evil that haunts the magical world."
    },
    {
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      year: "2003",
      genre: "Action, Adventure, Fantasy",
      imdbID: "tt0325980",
      poster: "https://external-preview.redd.it/h9rhz79CJXhUu3VKlBBElQ5ioLWwFl31gneHjS7fcsY.jpg?auto=webp&s=9f7cbe3dbb77bf77d9576d6744ca543ed20413d4",
      plot: "Blacksmith Will Turner teams up with eccentric pirate Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are undead."
    },
    {
      title: "Pan's Labyrinth",
      year: "2006",
      genre: "Drama, Fantasy, War",
      imdbID: "tt0457430",
      poster: "https://alternativemovieposters.com/wp-content/uploads/2022/06/JoshSpicer_Pans-Labyrinth.jpg",
      plot: "In 1944 Spain, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world."
    },
    {
      title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      year: "2005",
      genre: "Adventure, Family, Fantasy",
      imdbID: "tt0363771",
      poster: "https://m.media-amazon.com/images/M/MV5BOTBiYzYyYWYtYTZlMC00OGYyLTg1ZTYtYWU4OGY4NTRhMzg4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      plot: "Four kids travel through a wardrobe to the land of Narnia and learn of their destiny to free it with the guidance of a mystical lion."
    },
    {
      title: "Alice in Wonderland",
      year: "2010",
      genre: "Adventure, Family, Fantasy",
      imdbID: "tt1014759",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwzklqGQcge_OfZYrjzDNnrrWYVhnqHpzRA&s",
      plot: "Alice, now nineteen years old, returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny."
    },
    {
      title: "Stardust",
      year: "2007",
      genre: "Adventure, Family, Fantasy",
      imdbID: "tt0486655",
      poster: "https://www.cinemaemcena.com.br/uploads/criticas_old/filmes-4858-cartazes-stardust_07.jpg",
      plot: "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm."
    },
    {
      title: "Big Fish",
      year: "2003",
      genre: "Adventure, Drama, Fantasy",
      imdbID: "tt0319061",
      poster: "https://alternativemovieposters.com/wp-content/uploads/2021/03/BenPinwill_BigFish.jpg",
      plot: "A frustrated son tries to determine the fact from fiction in his dying father's life."
    },
    {
      title: "The Shape of Water",
      year: "2017",
      genre: "Drama, Fantasy, Romance",
      imdbID: "tt5580390",
      poster: "https://thedigitalbits.com/images/reviews/bluray09_lg/shapeoftwaterbrd_lg.jpg",
      plot: "At a top-secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity."
    },
    {
      title: "The Hobbit: An Unexpected Journey",
      year: "2012",
      genre: "Adventure, Fantasy",
      imdbID: "tt0903624",
      poster: "https://shop.warnerbros.co.uk/cdn/shop/products/1000418433-3_3db9c8f8-1ce8-47f6-abb8-98bf5a70c458_1080x.jpg?v=1637148789",
      plot: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it, from the dragon Smaug."
    }
  ];
  
  function displayTopFantasyMovies(movies) {
    const movieSection = document.getElementById('top-fantasy-section');
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
  
  displayTopFantasyMovies(fantasyMovies);
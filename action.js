const actionMovies = [
    {
      title: "Mad Max: Fury Road",
      year: "2015",
      genre: "Action, Adventure, Sci-Fi",
      imdbID: "tt1392190",
      poster: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/6/2/b/medium-madmax4-mad-max-fury-road-poster-for-room-office-13-inch-original-imafehz6xhz8f6sh.jpeg?q=20&crop=false",
      plot: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of female prisoners, a psychotic worshiper, and a drifter named Max."
    },

    {
      title: "Gladiator",
      year: "2000",
      genre: "Action, Adventure, Drama",
      imdbID: "tt0172495",
      poster: "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg",
      plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
    },

    {
      title: "The Matrix",
      year: "1999",
      genre: "Action, Sci-Fi",
      imdbID: "tt0133093",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDi2eN39_TH0qvG3Qju4sE7wg6zCtVWtZy6g&s",
      plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    {
      title: "Die Hard",
      year: "1988",
      genre: "Action, Thriller",
      imdbID: "tt0095016",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Mi2Eg_JVWgFxuDwCNY27tZmhUCr3raIXNA&s",
      plot: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles."
    },
    {
      title: "Terminator 2: Judgment Day",
      year: "1991",
      genre: "Action, Sci-Fi",
      imdbID: "tt0103064",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz4vMDI6KcvjIpBwp5tg1TzckJK_uM_CJlcQRTiTDNaNk3YxweWtqoEVJxHhUoZagLLvU&usqp=CAU",
      plot: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son from a more advanced and powerful cyborg."
    },
    {
      title: "John Wick",
      year: "2014",
      genre: "Action, Crime, Thriller",
      imdbID: "tt2911666",
      poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
      plot: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him."
    },
    {
      title: "Inception",
      year: "2010",
      genre: "Action, Adventure, Sci-Fi",
      imdbID: "tt1375666",
      poster:"https://posterspy.com/wp-content/uploads/2024/05/inception.jpg",
      plot: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
    },
    {
      title: "The Avengers",
      year: "2012",
      genre: "Action, Adventure, Sci-Fi",
      imdbID: "tt0848228",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnf_ZGvKEh8zSrYxHnkY6EBh_9pOVHqOhwQxjlx7tr8391xk_exVqp-x2CpEZ_RGzGt4&usqp=CAU",
      plot: "Earth's mightiest heroes must come together and learn to fight as a team to stop the mischievous Loki and his alien army from enslaving humanity."
    },
    {
      title: "The Dark Knight",
      year: "2008",
      genre: "Action, Crime, Drama",
      imdbID: "tt0468569",
      poster:  "https://c8.alamy.com/comp/2JJHH6W/christian-bale-poster-the-dark-knight-rises-2012-2JJHH6W.jpg",
      plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, forcing Batman to come out of retirement."
    },
    {
      title: "The Bourne Identity",
      year: "2002",
      genre: "Action, Mystery, Thriller",
      imdbID: "tt0258463",
      poster: "https://sixactstructure.com/wp-content/uploads/2021/02/Bourne-Identity-Movie-Poster-Alternate.png",
      plot: "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and regain his memory."
    }
  ];
  
  
  function displayActionMovies(movies) {
    const movieSection = document.getElementById('top-action-section');
    movieSection.innerHTML = ''; 
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `
        <img class="post" src="${movie.poster}" alt="${movie.title} Poster" />

        <h2>${movie.title}</h2>
        <p class="year">${movie.year}</p>
        <p class="genre"> ${movie.genre}</p>
              <p class="reviews">REVIEW</p>

      `;
      movieSection.appendChild(movieElement);
    });
  }
  
  displayActionMovies(actionMovies);
  
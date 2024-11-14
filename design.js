const genreElement = document.getElementById('movieGenre');
const genres = data.Genre.split(" "); // Split the genres into words

genres.forEach((genre, index) => {
  const span = document.createElement("span");
  span.classList.add(`genre${index + 1}`); // Apply a unique class
  span.textContent = genre;
  genreElement.appendChild(span);

  if (index < genres.length - 1) {
    genreElement.appendChild(document.createTextNode(" ")); // Add a space between words
  }
});

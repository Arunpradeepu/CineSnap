const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movieDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Movie Schema
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  genre: String,
  imdbID: String,
  poster: String,
  plot: String
});

const Movie = mongoose.model('Movie', movieSchema);

// Add movie to watchlist
app.post('/watchlist', async (req, res) => {
  const movie = new Movie(req.body);
  try {
    await movie.save();
    res.status(200).send('Movie added to watchlist');
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all movies from watchlist
app.get('/watchlist', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

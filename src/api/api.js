import axios from 'axios';
const API_KEY = '53263a417bdf2aa4ac46d1a4836d7bf0';

export async function fetchMoviesTrend() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  return response.data.results;
}

export async function fetchSearchMovies(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
}

export async function fetchDetailsMovie(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function fetchCastMovie(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
}

export async function fetchReviewsMovie(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
}

import axios from 'axios';
const API_KEY = '53263a417bdf2aa4ac46d1a4836d7bf0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {};
axios.defaults.params['api_key'] = API_KEY;
axios.defaults.params['language'] = 'en-US';

export async function fetchMoviesTrend() {
  const response = await axios.get(`/trending/all/day`);
  return response.data.results;
}

export async function fetchSearchMovies(query) {
  const response = await axios.get('/search/movie', {
    params: { query: query },
  });

  return response.data.results;
}

export async function fetchDetailsMovie(id) {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
}

export async function fetchCastMovie(id) {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data.cast;
}

export async function fetchReviewsMovie(id) {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data.results;
}

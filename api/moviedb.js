import axios from 'axios';
import { apiKey } from '../constants';

//endpionts
const apiBase = `https://api.themoviedb.org/3`;
const trendingMoviesEndpoints = `${apiBase}/trending/movie/day?api_key=${apiKey}`;
const upComingMoviesEndpoints = `${apiBase}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoints = `${apiBase}/movie/top_rated?api_key=${apiKey}`;

export const image500 = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = (path) =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = (path) =>
  path ? `https://image.tmdb.org/t/p/w185${path}` : null;

const apiCall = async (endpoints, params) => {
  const options = {
    method: 'GET',
    url: endpoints,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoints);
};

export const fetchUpcomingMovies = () => {
  return apiCall(upComingMoviesEndpoints);
};

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoints);
};

import axios from 'axios';
import { apiKey } from '../constants';

//endpionts
const apiBase = `https://api.themoviedb.org/3`;
const trendingMoviesEndpoints = `${apiBase}/trending/movie/day?api_key=${apiKey}`;
const upComingMoviesEndpoints = `${apiBase}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoints = `${apiBase}/movie/top_rated?api_key=${apiKey}`;

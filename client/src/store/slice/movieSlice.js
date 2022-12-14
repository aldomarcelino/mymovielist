import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const key = process.env.REACT_APP_TMDBKEY;
const key2 = process.env.REACT_APP_OMDBKEY;

const initialState = {
  genres: [],
  movies: [],
  serchMovies: null,
  movie: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSerchMovies: (state, action) => {
      state.serchMovies = action.payload;
    },
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { setMovies, setMovie, setGenres, setSerchMovies } =
  movieSlice.actions;

export const getMoviesTmdb = (page) => async (dispatch) => {
  try {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${page}`
    );
    data = data.results.slice(0, 18);
    dispatch(setMovies(data));
  } catch (error) {
    console.log(error);
  }
};

export const getAllGenres = () => async (dispatch) => {
  try {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`
    );
    dispatch(setGenres(data.genres));
  } catch (error) {
    console.log(error);
  }
};

export const getMmoviesOmdb = (search) => async (dispatch) => {
  try {
    let { data } = await axios.get(
      `https://www.omdbapi.com/?s=${search}&apikey=${key2}`
    );
    dispatch(setSerchMovies(data.Search));
  } catch (error) {
    console.log(error);
  }
};

export const getTheMovie = (id) => async (dispatch) => {
  try {
    let { data } = await axios.get(
      `http://www.omdbapi.com/?i=${id}&apikey=${key2}`
    );
    dispatch(setMovie(data));
  } catch (error) {
    console.log(error);
  }
};

export const selectMovies = (state) => state.movie.movies;
export const selectMovie = (state) => state.movie.movie;
export const selectGenres = (state) => state.movie.genres;
export const selectSerchMovies = (state) => state.movie.serchMovies;

export default movieSlice.reducer;

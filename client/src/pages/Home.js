import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import SearchPage from "../components/SearchPage";
const key = process.env.REACT_APP_TMDBKEY;

export default function Home() {
  const [movies, setMovies] = useState([]);
  console.log(key, "keyyyy");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("Succes:", res.results);
        setMovies(res.results);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <SearchPage />
      <div className="mt-10 mx-auto sm:px-6 lg:max-w-7xl lg:px-12">
        <h1 className="text-white font-extrabold text-3xl">
          Original MyMovieList
        </h1>
        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-7 xl:grid-cols-7 xl:gap-x-8">
          {movies?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

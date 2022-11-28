import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesTmdb, selectMovies } from "../store/slice/movieSlice";

export default function Home() {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMoviesTmdb(page));
  }, [page]);

  const handlePage = (page) => {
    console.log("current page", page);
    setPage(page);
  };

  return (
    <div>
      <div className="mt-10 mx-auto sm:px-6 lg:max-w-[74%] lg:px-12">
        <h1 className="text-white font-extrabold text-3xl">
          Original MyMovieList
        </h1>
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
          {movies?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <Pagination handlePage={handlePage} />
      </div>
    </div>
  );
}

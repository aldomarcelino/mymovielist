import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { MdPhotoLibrary, MdVideoLibrary } from "react-icons/md";

const key = process.env.REACT_APP_TMDBKEY;

export default function MovieDetail() {
  const [movie, setMovie] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("Succes:", res);
        setMovie(res);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);
  useEffect(() => {
    if (!trailerUrl && movie) {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const ulrParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(ulrParams.get("v"));
        })
        .catch((error) => console.log(error));
    } else setTrailerUrl("");
  }, [movie]);
  return (
    <div className="mx-[16%] mt-10 text-teal-50 font-semibold">
      {movie ? (
        <div>
          <h1 className="text-white sm:text-xl md:text-3xl lg:text-5xl">
            {movie.title}
          </h1>
          <div className="flex flex-row text-gray-300 gap-1 text-sm my-3">
            <p>{movie.release_date.substr(0, 4)}</p>
            <p>•</p>
            {movie.adult ? <p>R</p> : <p>PG-13</p>}
            <p>•</p>
            <span>
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </span>
          </div>
          <div className="flex flex-row gap-1">
            <div className="w-[200px] sm:w-[220px] md:w-[250px] lg:w-[280px]">
              <img
                className="w-full h-auto block rounded-sm"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            {trailerUrl ? (
              <YouTube
                className="w-[800px] sm:w-[820px] md:w-[840px] lg:w-[860px]"
                videoId={trailerUrl}
                opts={{
                  height: "100%",
                  width: "100%",
                  playerVars: {
                    autoplay: 0,
                  },
                }}
              />
            ) : (
              <div className="h-full w-full bg-[#171717]" />
            )}
            <div className="w-[200px] flex flex-col gap-1 text-white text-sm">
              <div className="bg-[#0f0e0e] w-[100%] h-full items-center justify-center flex flex-col gap-2">
                <MdVideoLibrary className="h-10 w-10" />
                <p>MORE VIDEOS</p>
              </div>
              <div className="bg-[#0f0e0e] w-[100%] h-full items-center justify-center flex flex-col gap-2">
                <MdPhotoLibrary className="h-10 w-10" />
                <p>PHOTOS</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-row gap-3">
              {movie?.genres.map((genre) => (
                <div className="rounded-3xl py-1 px-3 border-2 border-gray-500 ">
                  {genre.name}
                </div>
              ))}
            </div>
            <div className="mt-5">
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

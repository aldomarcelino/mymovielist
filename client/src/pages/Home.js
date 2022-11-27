import React from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import SearchPage from "../components/SearchPage";

const movies = [
  "https://vuclipi-a.akamaihd.net/p/cloudinary/h_276,w_184,dpr_1.5,f_auto,c_thumb,q_auto:low/1166071189/d-1",
  "https://vuclipi-a.akamaihd.net/p/cloudinary/h_276,w_184,dpr_1.5,f_auto,c_thumb,q_auto:low/1166071189/d-1",
  "https://vuclipi-a.akamaihd.net/p/cloudinary/h_276,w_184,dpr_1.5,f_auto,c_thumb,q_auto:low/1166071189/d-1",
  "https://vuclipi-a.akamaihd.net/p/cloudinary/h_276,w_184,dpr_1.5,f_auto,c_thumb,q_auto:low/1166071189/d-1",
  "https://vuclipi-a.akamaihd.net/p/cloudinary/h_276,w_184,dpr_1.5,f_auto,c_thumb,q_auto:low/1166071189/d-1",
  "https://vuclipi-a.akamaihd.net/p/cloudinary/h_276,w_184,dpr_1.5,f_auto,c_thumb,q_auto:low/1166071189/d-1",
  "https://vuclipi-a.akamaihd.net/p/cloudinary/h_276,w_184,dpr_1.5,f_auto,c_thumb,q_auto:low/1166071189/d-1",
  "https://vuclipi-a.akamaihd.net/p/cloudinary/h_276,w_184,dpr_1.5,f_auto,c_thumb,q_auto:low/1166071189/d-1",
  "https://vuclipi-a.akamaihd.net/p/cloudinary/h_276,w_184,dpr_1.5,f_auto,c_thumb,q_auto:low/1166071189/d-1",
  "https://vuclipi-a.akamaihd.net/p/cloudinary/h_276,w_184,dpr_1.5,f_auto,c_thumb,q_auto:low/1166071189/d-1",
  "https://vuclipi-a.akamaihd.net/p/cloudinary/h_276,w_184,dpr_1.5,f_auto,c_thumb,q_auto:low/1166071189/d-1",
  "https://vuclipi-a.akamaihd.net/p/cloudinary/h_276,w_184,dpr_1.5,f_auto,c_thumb,q_auto:low/1166071189/d-1",
  "https://vuclipi-a.akamaihd.net/p/cloudinary/h_276,w_184,dpr_1.5,f_auto,c_thumb,q_auto:low/1166071189/d-1",
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <SearchPage />
      <div className=" mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

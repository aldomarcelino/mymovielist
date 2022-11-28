import MuiModal from "@mui/material/Modal";
import { AiOutlineRise } from "react-icons/ai";
import { BsKeyboardFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import SearchMovieCard from "./SearchMovieCard";
const key = process.env.REACT_APP_TMDBKEY;
const key2 = process.env.REACT_APP_OMDBKEY;

export default function SearchPage({ open, setOff }) {
  const [genres, setGenres] = useState([]);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("Success:", res.genres);
        setGenres(res.genres);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  useEffect(() => {
    if (!open) {
      setMovies("");
      setSearch("");
    }
  }, [open]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=${key2}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("Success:", res.Search);
        setMovies(res.Search);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const handleClose = () => {
    setMovies("");
    setSearch("");
    setOff();
  };

  return (
    <div>
      <MuiModal
        open={open}
        onClose={handleClose}
        className="fixex !top-16 left-0 right-0 z-50 mx-auto w-full overflow-hidden overflow-y-scroll scroll-smooth"
        hideBackdrop={true}
      >
        <div className="text-xl">
          <form
            className="flex space-x16 bg-[#141414] px-10 items-center flex-col text-white text-3xl"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="search"
              placeholder="Search By Title"
              className="w-1/2 py-2 bg-[#141414] focus:border-b outline-none focus:border-gray-400 text-center mt-3"
              value={search}
              onChange={handleChange}
            />
          </form>
          {movies ? (
            <div className="flex space-x16 bg-[#121212] px-10 py-8 items-center text-white flex-col font-semibold">
              <p className="text-xl">Results</p>
              {movies.map((movie, index) => (
                <SearchMovieCard
                  movie={movie}
                  setOff={handleClose}
                  key={index}
                />
              ))}
            </div>
          ) : (
            <div className="flex space-x16 bg-[#121212] px-10 py-8 items-center text-white flex-col font-semibold">
              <h2 className="text-2xl">Try Type</h2>
              <div className="flex gap-10 mt-5 mb-10">
                <div className="flex gap-2 items-center bg-[#252525] text-[#ffbf00] px-7 py-4 rounded-3xl">
                  <BsKeyboardFill />
                  <p>avatar...</p>
                </div>
                <div className="flex gap-2 items-center bg-[#252525] text-[#ffbf00] px-7 py-4 rounded-3xl">
                  <BsKeyboardFill />
                  <p>doctor...</p>
                </div>
              </div>
              <h2 className="text-2xl">All Genre</h2>
              <div className="grid grid-cols-2 gap-4 mt-5">
                {genres?.map((genre) => (
                  <div
                    className="flex gap-2 items-center hover:bg-[#252525] hover:text-[#ffbf00] p-2 rounded-3xl duration-500"
                    key={genre.id}
                  >
                    <AiOutlineRise className="text-xl font-extrabold text-gray-400" />
                    <p>{genre.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </MuiModal>
    </div>
  );
}

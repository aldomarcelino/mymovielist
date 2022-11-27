import { AiFillStar } from "react-icons/ai";

export default function MovieCard({ movie }) {
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[170px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block rounded-sm"
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        alt={movie?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 duration-300 opacity-0 hover:opacity-100 text-white m-1">
        <p className="white-opacity-normal text-sm md:text-sm font-bold flex justify-center items-center h-full text-center">
          {movie?.title}
        </p>
        <div className="flex flex-row gap-1 items-center absolute top-4 left-4 text-gray-300">
          <AiFillStar />
          {movie.vote_average}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoSearch } from "react-icons/go";
import Card from "./components/Card";
// import MoviesCard from "./components/MoviesCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [active, setActive] = useState(false);
  const [identifier, setIdentifier] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [newValue, setNewValue] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmY4MjdlNTliZmQxMzMwM2ZkYjMyOTJlYjBjNTgzZiIsIm5iZiI6MTczODM1NzkwNy42NjIwMDAyLCJzdWIiOiI2NzlkM2M5M2E1NzkwOTcwMWFjYjI4YWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MSv4MacIr1PHpP52N6S181V2FKgt8M8hFETUvV9-3SA`,
          },
        }
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (id) => {
    setActive(true);
    setIdentifier(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewValue(inputValue);
    setInputValue("");
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="relative">
      <div className="text-center w-4/5 m-auto">
        <h1 className="mt-15 text-4xl font-bold sm:text-5xl md:text-7xl">
          <span className="text-teal-500">Movies</span> Hub
        </h1>
        <p className="mt-10 w-4/5 m-auto  md:font-medium">
          Our streaming platform offers a huge library of films, from the latest
          blockbusters to timeless classics, all available here.
        </p>

        <form className="mt-10 " onSubmit={handleSubmit}>
          <div className="flex justify-center items-center bg-gray-700  rounded-xl w-2/5 m-auto p-3 gap-5">
            <input
              type="text"
              placeholder="Search a movie..."
              className="border-none outline-none w-7/8 bg-transparent "
              value={inputValue}
              onChange={onChange}
            />
            <button type="submit">
              <GoSearch className="cursor-pointer text-2xl " />
            </button>
          </div>
        </form>
      </div>

      <div className="movies-card p-20  mb-20">
        <h1 className="mb-10">All Movies</h1>
        <div
          className={
            active
              ? " block bg-[rgb(5,5,34)] w-4/5 m-auto mb-10 relative rounded-3xl shadow-blue-950 shadow-inner "
              : "hidden"
          }
        >
          <Card setActive={setActive} identifier={identifier} movie={movies} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
          {movies.map((movie) => (
            <div
              className="max-w-[300px] bg-[rgb(14,5,41)] flex flex-col p-2 rounded-2xl  shadow-blue-950 shadow-inner"
              key={movie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
                className="rounded-t-2xl cursor-pointer hover:scale-102 transition-transform duration-500"
                onClick={() => handleClick(movie.id)}
              />
              <h2 className="m-2 font-bold ">{movie.title}</h2>
              <div className="flex gap-2 ml-2 pb-1">
                <p>
                  ⭐{" "}
                  {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                </p>{" "}
                <span>·</span>
                <p>{movie.original_language}</p> <span>·</span>
                <p>
                  {movie.release_date
                    ? movie.release_date.split("-")[0]
                    : "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;

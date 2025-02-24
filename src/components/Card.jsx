import React, { useState } from "react";

const Card = ({ setActive, movie, identifier }) => {
  const [copyMovie, setCopyMovie] = useState([]);

  const handleCopy = () => {
    setCopyMovie(movie.filter((m) => m.id === identifier));
  };

  return (
    <div className="">
      <h1
        className="absolute right-0 p-2 pr-5 cursor-pointer font-bold text-2xl"
        onClick={() => setActive(false)}
      >
        x
      </h1>
      {movie.map((m) => (
        <div className="" key={m.id}>
          {m.id === identifier ? (
            <>
              <div className="m-20 p-2 rounded lg-layout xl-layout " key={m.id}>
                <div className="">
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${m.poster_path}`}
                    alt={m.title}
                    className="w-3/4 hidden  lg:block xl:block"
                    onClick={() => handleClick(m.id)}
                  />
                </div>
                <div className="w-[100%] m-auto xl:w-[50%] lg:w-[50%]">
                  <h2 className="font-bold  lg:text-3xl xl:text-3xl mb-4">
                    {m.title}
                  </h2>
                  <p className="mb-3 text-[11px] md:text-[13px] xl:text-[15px]">
                    {m.overview}
                  </p>
                  <div className="">
                    <p className="mb-1">
                      · <span className="font-bold ">Ratings</span> :{" "}
                      {m.vote_average ? m.vote_average.toFixed(1) : "N/A"}
                    </p>{" "}
                    <p className="mb-1">
                      · <span className="font-bold">Language </span>:{" "}
                      {m.original_language}
                    </p>
                    <p>
                      · <span className="font-bold">Release date</span> :{" "}
                      {m.release_date}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;

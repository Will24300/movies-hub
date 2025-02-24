import React from "react";

const MoviesCard = ({
  movie: {
    title,
    original_language,
    overview,
    release_date,
    vote_average,
    vote_count,
    poster_path,
    popularity,
  },
}) => {
  return (
    // <section className="flex flex-col">
    <div className="mt-10 bg-gray-700 rounded p-5 ">
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={title}
        className=""
      />
      <h2>{title}</h2>
      <div className="">
        <p>{vote_average}</p>
        <p>{original_language}</p>
        <p>{release_date}</p>
      </div>
    </div>
    // </section>
  );
};

export default MoviesCard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Rows = ({ title, fetchUrl, isLargeRow }) => {
  const base_url = "https://api.themoviedb.org/3/movie/";
  const [movies, setmovies] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setmovies(request.data.items);
      setIsLoading(true);
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    }
    movieTrailer(movie?.title || movie?.name || movie?.original_name)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="rowCards">
        {/* container -> cards */}
        {movies.map((movie) => {
          return (
            <img
              onClick={handleClick(movie)}
              className={`card ${isLargeRow && "largeCard"}`}
              key={movie.id}
              src={movie?.image}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Rows;

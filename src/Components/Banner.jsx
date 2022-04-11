import apicalls from "../apicalls";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [randomMovie, setRandomMovie] = useState([]);
  useEffect(() => {
    // API call for random movie
    async function fetchData() {
      const request = await axios.get(apicalls.popularMovies);
      // Capture Fandom Movie
      setRandomMovie(
        request.data.items[
          Math.floor(Math.random() * request.data.items.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const { image, title, fullTitle } = randomMovie;
  return (
    <header
      className="ban-wrp"
      //    Header has bg image
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundWidth: "100%",
        backgroundHeight: "100%",
      }}
    >
      <div className="ban-cont">
        {/* title */}
        <h1>{title}</h1>
        <div className="bnt-wrp">
          {/* 2 buttons */}
          <input className="bnt" type="button" value="Play" />
          <input className="bnt" type="button" value="My List" />
        </div>
        {/* Description */}
        <div className="ban-desc-wrp">
          <h4>{fullTitle}</h4>
          <p>
            Culpa do commodo ad reprehenderit nulla nostrud occaecat cillum
            Lorem esse est veniam eu. In adipisicing nostrud minim sint proident
            nostrud id labore ut nostrud nulla consectetur. Deserunt ullamco
            anim ad occaecat proident voluptate qui ex velit laboris consequat
            fugiat consectetur sint. Exercitation laboris in tempor est velit
            nulla fugiat ullamco qui consectetur eu quis culpa proident.
            Exercitation cillum ex do do quis aliquip enim mollit dolor sunt
            veniam eu officia. Nulla laboris ad pariatur laborum reprehenderit
            incididunt ipsum sint reprehenderit esse dolore minim voluptate.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Banner;

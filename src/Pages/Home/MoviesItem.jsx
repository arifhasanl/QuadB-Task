import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
const MoviesItem = ({ moviesItem }) => {
  const [showAllSummary, setShowAllSummary] = useState(false);
  const { name, language, image, summary, id } = moviesItem;
  const summaySlice = showAllSummary ? summary : summary.slice(0, 200);
  return (
    <div className="col-lg-6 col-md-12">
      <div className="shadow-lg moviItem">
        <div className="">
          <div className="row ">
            <div className="col-sm-12 col-md-6">
              <img className="p-2" src={image?.medium} alt="" />
            </div>
            <div className="col-md-6 col-12">
              <div className="d-flex  justify-content-center align-items-center">
                <div className="moive-content">
                  <h2>
                    Movie Name:<span>{name}</span>
                  </h2>
                  <h4>
                    Movie Language:<span>{language}</span>
                  </h4>
                  <div>
                    <p>
                      Summary:<span>{summaySlice}</span>
                      <button
                        onClick={() => setShowAllSummary(!showAllSummary)}
                      >
                        {showAllSummary ? "Read Less" : "Read More"}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-ticket">
          <Link className="button" to={`/movie/:${id}`}>
            Movie Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MoviesItem;

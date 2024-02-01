import { useEffect, useState } from "react";
import MoviesItem from "./MoviesItem";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useGetData from "../../Hook/useGetData";
const Home = () => {
  const { movies, isLoading, iserror } = useGetData();
  const [showAll, setShowAll] = useState(false);

  const displayedMovies = showAll ? movies : movies?.slice(0, 5);

  return (
    <div className="container mx-auto">
      {iserror && iserror.message}
      <div className="moveBaner">
        <h1>
          Dive into the Cinematic World<br></br> of Must-Watch Movies!
        </h1>
      </div>
      <div className="row mt-5">
        {isLoading ? (
          <div className="col-12">
            <p>Loading...</p>
          </div>
        ) : (
          displayedMovies?.map((item) => (
            <MoviesItem key={item.show.id} moviesItem={item.show}></MoviesItem>
          ))
        )}
        <div className="col-12">
          {showAll ? (
            <div className="showAllbutton">
              <button className="button" onClick={() => setShowAll(false)}>
                Show Less
              </button>
            </div>
          ) : (
            <div className="showAllbutton d-flex ">
              <button className="button" onClick={() => setShowAll(true)}>
                Show All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

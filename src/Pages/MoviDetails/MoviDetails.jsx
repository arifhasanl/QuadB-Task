import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetData from "../../Hook/useGetData";
import "../Home/home.css";
import { flushSync } from "react-dom";
import TicketBook from "./TicketBook";
const MoviDetails = () => {
  const { movies } = useGetData();
  const { movieId } = useParams();
  const movieIdN = parseFloat(movieId.slice(1, 10));
  const [isTicket, setTicket] = useState(false);
  const [singleData, setSingleData] = useState("");
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const singleData = movies?.find((item) => item.show.id === movieIdN);
    console.log(singleData);
    setSingleData(singleData?.show);
  }, [movieId, movies]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${movieId}`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data));
  }, [movieId]);
  console.log(singleData?.rating);
  const handleBookTicket = () => {
    // Handle booking logic using formData and movieDetails
    // Store user details in local/session storage
  };
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="signle-movie-banner-context ">
            <img
              className="single-movie-banner"
              src={singleData?.image?.original}
              alt={movieDetails.title}
            />
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="ms-3">
            <div className="d-flex  justify-content-center align-items-center">
              <div className="moive-content">
                <h2>
                  Movie Name:<span>{singleData?.name}</span>
                </h2>
                <h4>
                  Movie Language:<span>{singleData?.language}</span>
                </h4>
                <h4>
                  Schedule:
                  <span className="me-5">Date{singleData?.schedule?.days}</span>
                  <span>Time:{singleData?.schedule?.time} AM</span>
                </h4>
                <h4 className="d-flex justify-content-between">
                  <div>
                    Premiered:<span>{singleData?.premiered}</span>
                  </div>
                  <div>
                    Ratting:<span>{singleData?.rating?.average}</span>
                  </div>
                </h4>
                <h4></h4>
                <div>
                  <p>
                    Summary:<span>{singleData?.summary}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="movie-ticket">
              <button onClick={() => setTicket(!isTicket)} className="button">
                Ticket Book Now
              </button>
              <Link className="button ms-2" to={`/`}>
                Go To Home
              </Link>
            </div>
            <div>
              {isTicket && (
                <TicketBook
                  movieName={singleData?.name}
                  movieId={singleData?.id}
                ></TicketBook>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviDetails;

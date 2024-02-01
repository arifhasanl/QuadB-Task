import React, { useEffect, useState } from "react";

const useGetData = () => {
  const [movies, setMovies] = useState([]);
  const [iserror, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setMovies(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { movies, isLoading, iserror };
};

export default useGetData;

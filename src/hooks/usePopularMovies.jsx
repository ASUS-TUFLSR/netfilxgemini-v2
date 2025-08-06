import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMoives } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const response = await fetch("http://localhost:5173/api/tmdb/popular", API_OPTIONS); // ✅ Replace with your backend URL (e.g., https://netflix-api.vercel.app/api/tmdb/popular)
      const data = await response.json();
      dispatch(addPopularMoives(data.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    if (!popularMovies) {
      getPopularMovies();
    }
  }, [popularMovies, dispatch]);
};

export default usePopularMovies;

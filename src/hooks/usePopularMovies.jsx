import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMoives } from "../utils/movieSlice";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const response = await fetch("https://backend-ez66.onrender.com/api/tmdb/popular"); // ✅ Replace with your backend URL (e.g., https://netflix-api.vercel.app/api/tmdb/popular)
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

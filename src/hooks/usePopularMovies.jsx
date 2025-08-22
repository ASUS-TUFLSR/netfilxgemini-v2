import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMoives } from "../utils/movieSlice";


const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMoives(json.results));
  };

  useEffect(() => {
    if (!popularMovies) {
      getPopularMovies();
    }
  }, [popularMovies, dispatch]);
};

export default usePopularMovies;

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMoives } from "../utils/movieSlice";


const usePopularMovies = () => {

  //Fetching Data From TMDB API and updating the store

  const dispatch = useDispatch();
  const popularMovies = async () => {
   
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMoives(json.results));

  }
 
  useEffect(() => {
    popularMovies();
  }, [])
}
 

export default usePopularMovies;
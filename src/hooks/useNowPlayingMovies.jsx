import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMoives } from "../utils/movieSlice";


const useNowPlayingMovies = () => {

  //Fetching Data From TMDB API and updating the store

  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
   
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMoives(json.results));

  }
 
  useEffect(() => {
    nowPlayingMovies();
  }, [])
}
 

export default useNowPlayingMovies;
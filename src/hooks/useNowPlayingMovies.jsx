import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMoives } from "../utils/movieSlice";


const useNowPlayingMovies = () => {

  //Fetching Data From TMDB API and updating the store
    
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
   
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMoives(json.results));

  }
 
  useEffect(() => {
    const fetchData = async () => {
       if(!nowPlayingMovies){
        await getNowPlayingMovies();
       }
    };
    fetchData();
  }, [nowPlayingMovies, dispatch])
}
 

export default useNowPlayingMovies;
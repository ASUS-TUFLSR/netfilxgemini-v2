import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector, useStore } from "react-redux";
import { addPopularMoives } from "../utils/movieSlice";


const usePopularMovies = () => {

  const popularMovies = useSelector((store) => store?.movies?.popularMovies);

  const dispatch = useDispatch();
  const getPopularMovies = async () => {
   
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMoives(json.results));

  }
 
  useEffect(() => {
    const fetchData = async () => {
      if(!popularMovies){
        await getPopularMovies();
      }
    };
    fetchData();
  }, [popularMovies, dispatch])
}
 

export default usePopularMovies;
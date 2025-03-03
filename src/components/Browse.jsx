import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  
  const showGptSearchView = useSelector(store => store.gpt.showGptSearch);
  
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useTopRatedSeries();

  return <>
    <Header/>
    {
      showGptSearchView ? (
      <GptSearch/>
      ) : (
         <>  <MainContainer/>
             <SecondaryContainer/> </>
           )
    }
    
  </>
}

export default Browse
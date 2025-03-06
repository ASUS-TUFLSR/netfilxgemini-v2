import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GeminiSearch from "./GeminiSearch";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  
  const showGeminiSearchView = useSelector(store => store.gemini.showGeminiSearch);
  // Above is the gptFeature that we created which will change to gemini search after this commit
  
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useTopRatedSeries();
  // We are calling multiple hooks that we created to fetch data from our Redux store. => refer to each hooks and slices

  return <>
    <Header/>
    {
      showGeminiSearchView ? (
      <GeminiSearch/>
      ) : (
         <>  <MainContainer/>
             <SecondaryContainer/> </>
           )
    }
    
  </>
}

export default Browse
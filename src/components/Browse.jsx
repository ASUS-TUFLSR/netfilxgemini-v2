import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useTopRatedSeries();

  return <>
    <Header/>
     {/* 
      Main-Container
       - Video Background
       - Video Title
    */}
    <MainContainer/>
     {/* 
      Secondary-Container
       - MovieList * n
         - cards * n
    */}
    <SecondaryContainer/>
  </>
}

export default Browse
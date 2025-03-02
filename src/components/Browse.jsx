import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();

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
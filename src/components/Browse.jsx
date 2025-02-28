import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  
  useNowPlayingMovies();

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
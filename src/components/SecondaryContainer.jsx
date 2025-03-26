import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {
 
 
  const movies = useSelector(store => store.movies) 
  

 return <div className="bg-black" >
       <div className=" mt-0 md:-mt-50 relative z-2 " >
      <MovieList title={"Now-Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular-Movies"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming-Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Trending-Movies"} movies={movies.trendingMovies} />
      <MovieList title={"TopRated-Series"} movies={movies.topRatedSeries} />
      
       </div>
      
  </div>
}

export default SecondaryContainer
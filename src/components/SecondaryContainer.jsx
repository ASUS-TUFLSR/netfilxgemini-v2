import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {
 
 
  const movies = useSelector(store => store.movies) 
  console.log(movies)

 return <div className="bg-black" >
      <MovieList title={"Now-Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular-Movies"} movies={movies.popularMovies} />

      {/* 
      
        MovieList - Popular
         - MovieCards * N
        MovieList - NowPlayingMovies
        MovieList - Trending
        MovieList - Top-Rated
      
      */}
  </div>
}

export default SecondaryContainer
import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {

  if(movies){
    return <div className="px-6" >
      <h1 className="text-3xl text-white py-4" >{title}</h1>
    <div className="no-scrollbar flex overflow-x-scroll" >
        <div className="flex cursor-pointer" >
          {movies.map(movie => <MovieCard key={movie.id}  moviesData={movie} posterPath={movie.poster_path} />)}
        </div>
    </div>

    
  </div>
  }
  
}

export default MovieList
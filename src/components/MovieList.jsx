import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {

   console.log(title)
   console.log(movies)

  //  const mvCard = movies[0].poster_path;
  //  console.log(mvCard)
  //  console.log(mvCard)
  if(movies){
    return <div className="p-4" >
      <h1 className="text-3xl text-white py-2" >{title}</h1>
    <div className="flex overflow-x-scroll" >
        <div className="flex" >
          {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
        </div>
    </div>

    
  </div>
  }
  
}

export default MovieList
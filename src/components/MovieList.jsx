import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {

   console.log(title)
   console.log(movies)

  //  const mvCard = movies[0].poster_path;
  //  console.log(mvCard)
  //  console.log(mvCard)
  if(movies){
    return <div className="px-6" >
      <h1 className="text-3xl text-white py-4" >{title}</h1>
    <div className="no-scrollbar flex overflow-x-scroll" >
        <div className="flex" >
          {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
        </div>
    </div>

    
  </div>
  }
  
}

export default MovieList
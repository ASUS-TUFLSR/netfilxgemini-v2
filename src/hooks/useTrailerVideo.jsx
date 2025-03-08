import { useEffect  } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {

  
    const dispatch = useDispatch();

     const getMovieVideo = async () => {
     try {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
     const json = await data.json();

    const filterData = json.results.filter(video => video.type === 'Trailer');
    console.log(json)
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer || null));
     } catch (error) {
      console.error("Error fetching movie trailer:", error)
     }
   
    // if not trailer then present or show an error
    // new error there are some components such as anime which is not present in tmdb api 
    // gotta show an error

}
  
   useEffect(() => {
    if (!movieId) return;  // Prevent unnecessary API calls
    getMovieVideo();
  }, [movieId, dispatch]);


}

export default useTrailerVideo;

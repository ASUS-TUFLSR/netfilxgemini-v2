import { useEffect  } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useNavigate } from "react-router-dom";

const useTrailerVideo = (movieId) => {


    const dispatch = useDispatch();
    const navigate = useNavigate();


     const getMovieVideo = async () => {
     try {
     const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
     const json = await data.json();

     const filterData = json.results.filter(video => video.type === 'Trailer');
     const trailer = filterData.length ? filterData[0] : json.results[0];

     if(!trailer){
      navigate('/error');
     }else{
      dispatch(addTrailerVideo(trailer || null));
     }

     } catch (error) {
      console.error("Error fetching movie trailer:", error)
      navigate('/error')
   }
   
 

}
  
   useEffect(() => {
    if (!movieId) return; 
    getMovieVideo();
  }, [movieId, dispatch]);


}

export default useTrailerVideo;

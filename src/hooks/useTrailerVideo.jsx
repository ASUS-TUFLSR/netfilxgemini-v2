import { useEffect  } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

export const useTrailerVideo = (movieId) => {
  // TO fetch movie trailer we have to ways : use useState to manage and update the state 
  // Or use our Redux store to store trailer and fetch from the store
  
  //const [trailerId, setTrailerId] = useState(null);

    const dispatch = useDispatch();

     const getMovieVideo = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
     const json = await data.json();
     console.log(json)

    const filterData = json.results.filter(video => video.type === 'Trailer');
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));

   // setTrailerId(trailer.key); // Original
   // setTrailerId("9t1HyQuo6qo"); // Dark Knight Metamorphosis
   // setTrailerId("kmJLuwP3MbY"); // Dark Kinght
}
  
 useEffect(() => {
  getMovieVideo();
 },[])

 //kmJLuwP3MbY
//  src="https://www.youtube.com/embed/9t1HyQuo6qo?si=bTb1svSYn_c0WxiQ" 

}

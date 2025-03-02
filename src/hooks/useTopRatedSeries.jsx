import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedSeries } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedSeries = () => {

  
    const dispatch = useDispatch();

    const topRatedSeries = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedSeries(json.results));
    }

    useEffect(() => {
       topRatedSeries();     
    }, [])


}

export default useTopRatedSeries;
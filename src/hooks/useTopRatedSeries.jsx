import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedSeries } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedSeries = () => {

    const topRatedSeries = useSelector((store) => store?.movies?.topRatedSeries)

    const dispatch = useDispatch();

    const getTopRatedSeries = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedSeries(json.results));
    }

    useEffect(() => {
      const fetchData = async () => {
        if(!topRatedSeries){
            await getTopRatedSeries();  
        }
      };
      fetchData();
    }, [topRatedSeries, dispatch])


}

export default useTopRatedSeries;
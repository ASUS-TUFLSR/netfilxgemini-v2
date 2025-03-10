import { useNavigate } from "react-router-dom";
import { IMG_CDN } from "../utils/constants"


const MovieCard = ({posterPath, moviesData}) => {

 const navigate = useNavigate();
 
  const handleShowTrailer = () => {
        navigate("/vid", { state: { movie: moviesData } })
  }

  if(!posterPath) return null;
  return <div className="w-36 md:w-48 mr-4 cursor-pointer" onClick={handleShowTrailer}>
     <img  alt="MovieCard" src={IMG_CDN + posterPath}/>
  </div>
}

export default MovieCard
import { IoIosInformationCircleOutline, IoIosPlay } from "react-icons/io"
import { useNavigate } from "react-router-dom"

const VideoTitle = ({title, overview}) => {

  const navigate = useNavigate();

  const handlePlayError = () => {
        navigate('/noPlay');
  }
 
  return <div className="w-screen aspect-video  pt-[20%] md:pt-50 px-6 md:px-24 absolute text-white bg-gradient-to-r from-black" >
    <h1 className="text-xs py-1 md:text-4xl font-bold" >{title}</h1>
    <p className="hidden md:inline-block py-6 text-2xs w-1/2" >{overview}</p>
    <div className="flex" >
      <button className="flex items-center bg-white text-black cursor-pointer py-1 px-2 text-xs md:py-2 md:px-6 md:text-lg hover:opacity-80 rounded-md"
       onClick={handlePlayError}
      > 
      <IoIosPlay size={16} className="md:hidden" />
        <IoIosPlay size={24} className="hidden md:inline-block mr-2" />Play
        </button>
      <button className="hidden md:flex items-center bg-gray-600 text-white cursor-pointer py-2 px-6 text-lg opacity-90 rounded-md hover:bg-gray-700 ml-1" >
        <IoIosInformationCircleOutline size={24} className="md:mr-2" />MoreInfo
        </button>
         
    </div>
  </div>
}

export default VideoTitle
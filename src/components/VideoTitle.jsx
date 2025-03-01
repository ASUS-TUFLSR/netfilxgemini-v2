import { IoIosInformationCircleOutline, IoIosPlay } from "react-icons/io"

const VideoTitle = ({title, overview}) => {
  return <div className="w-screen aspect-video pt-58 px-24 absolute text-white bg-gradient-to-r from-black" >
    <h1 className="text-6xl font-bold" >{title}</h1>
    <p className="py-6 text-2xs w-1/2" >{overview}</p>
    <div className="flex" >
      <button style={{display: "flex", justifyContent: "center"}} className="bg-white text-black cursor-pointer p-3 px-11 text-xl hover:opacity-50">
        <IoIosPlay size={29} className="align-bottom" />Play
        </button>
      <button style={{display: "flex", justifyContent: "center"}} className="bg-gray-500 text-white cursor-pointer p-3 px-11 text-xl opacity-90 mx-2" >
        <IoIosInformationCircleOutline size={29} className="align-bottom" />MoreInfo
        </button>
    </div>
  </div>
}

export default VideoTitle
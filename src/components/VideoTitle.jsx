import { IoIosInformationCircleOutline, IoIosPlay } from "react-icons/io"

const VideoTitle = ({title, overview}) => {
  return <div className="pt-36 px-12" >
    <h1 className="text-6xl font-bold" >{title}</h1>
    <p className="py-6 text-2xs w-1/2" >{overview}</p>
    <div className="flex" >
      <button style={{display: "flex", justifyContent: "center"}} className="bg-gray-500 text-white p-4 px-11 text-lg opacity-30 ">
        <IoIosPlay size={27} className="align-bottom" />Play
        </button>
      <button style={{display: "flex", justifyContent: "center"}} className="bg-gray-500 text-white p-4 px-11 text-lg opacity-30 mx-2" >
        <IoIosInformationCircleOutline size={27} className="align-bottom" />MoreInfo
        </button>
    </div>
  </div>
}

export default VideoTitle
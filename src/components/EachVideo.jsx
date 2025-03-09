import React from 'react'
import {useLocation, Link} from 'react-router-dom'
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const EachVideo = () => {
  const location = useLocation();
  const movie = location.state?.movie; // Get movie data
 
   if (!movie) return <p>No movie selected</p>;

  return (
     <div className="relative min-h-screen bg-black text-white p-4 ">
      <div className="flex">
        <Link
          to="/browse"
          className="px-9 py-2 mt-2 ml-25 bg-red-700 hover:bg-red-900 cursor-pointer rounded-xs text-white inline-block"
        >
          Go Back
        </Link>
      </div>
      <VideoTitle title={movie?.title} overview={movie?.overview} />

      <VideoBackground movieId={movie?.id} />
    </div>
  );
}

export default EachVideo
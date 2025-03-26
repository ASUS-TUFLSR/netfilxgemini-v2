import React from 'react'
import {useLocation, Link} from 'react-router-dom'
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const EachVideo = () => {
  const location = useLocation();
  const movie = location.state?.movie; // Get movie data
 
   if (!movie) return <p>No movie selected</p>;

  return (
     <div className="relative overflow-x-hidden min-h-screen bg-black text-white p-4">
      <div className="flex">
        <Link
          to="/browse"
          className="flex items-center px-6 py-3 font-semibold text-white bg-red-700 rounded-lg hover:bg-red-600 transition-all duration-200"
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
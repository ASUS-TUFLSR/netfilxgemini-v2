import React from 'react'
import {useLocation} from 'react-router-dom'
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const EachVideo = () => {
  const location = useLocation();
  const movie = location.state?.movie; // Get movie data

  return (
    <div>
      <VideoTitle title={movie?.title} overview={movie?.overview}/>
      <VideoBackground movieId={movie?.id} />
    </div>
  );
}

export default EachVideo
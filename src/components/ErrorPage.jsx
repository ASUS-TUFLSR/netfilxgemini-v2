import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ErrorPage = () => {

  

  return <>
     <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Oops! No Trailer Found</h1>
      <p className="text-lg mb-6">The trailer for this movie is unavailable.</p>
      <Link to="/browse" className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white">
        Go Back to Home
      </Link>
    </div>
  </>
}

export default ErrorPage
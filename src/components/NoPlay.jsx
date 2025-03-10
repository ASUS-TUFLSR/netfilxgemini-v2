import { Link } from "react-router-dom";

const NoPlay = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-500">
        Movie Not Available
      </h1>
      <p className="text-lg text-gray-300 mb-6 text-center px-6 md:px-0">
        Sorry, this website has limited access, thanks for the visit....
      </p>
      <Link
        to="/browse"
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        ⬅ Go Back to Browse
      </Link>
    </div>
  );
};

export default NoPlay;

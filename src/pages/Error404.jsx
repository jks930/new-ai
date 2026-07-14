import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar';

const Error404 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center text-center p-4 pt-32">
         <div className="text-[150px] md:text-[250px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0CA59D] to-[#ffa800] leading-none mb-4 drop-shadow-sm">
            404
         </div>
         <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Oops! Page Not Found</h1>
         <p className="text-gray-600 max-w-lg mb-10 text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
         </p>
         <Link to="/" className="bg-[#0CA59D] hover:bg-[#169a8f] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-lg tracking-wide">
            Go Back Home
         </Link>
      </div>
    </div>
  );
};
export default Error404;

import React from "react";
import blog1 from '../assets/blog-1.png'
import blog2 from '../assets/blog-2.png'
import blog3 from '../assets/blog-3.png'
import { IoIosArrowForward } from "react-icons/io";

const Blogs = () => {
  return (
    <section className="bg-white mb-10 py-28" id="blog">
      <div className="max-w-screen-2xl container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Our newest updates and
            <span className="text-orange-500"> insights</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Stay informed with our newest updates and insights, offering valuable trends, tips, and market analysis for smarter decisions.
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">

          <div className=" rounded-lg relative overflow-hidden shadow-lg hover:scale-105 transition-all duration-200 ease-in">
            <img className="w-full h-48 md:h-56 object-cover" src={blog1}/>
            <div className="p-4">
              <p className="text-sm text-[#2d2d2d] mb-2">Jan 20, 2025</p>
              <h3 className="text-gray-800 font-semibold text-[23px] mb-3">Essential tips for first time home buyers your complete guide</h3>
            </div>
          </div>

          <div className="lg:mt-14 lg:mb-14 rounded-lg relative overflow-hidden shadow-lg hover:scale-105 transition-all duration-200 ease-in">
            <img className="w-full h-48 md:h-56 object-cover" src={blog2}/>
            <div className="p-4">
              <p className="text-sm text-[#2d2d2d] mb-2">Feb 14, 2025</p>
              <h3 className="text-gray-800 font-semibold text-[23px] mb-3">Smart Strategies for Selling Your Home</h3>
            </div>
          </div>


          <div className=" rounded-lg relative overflow-hidden shadow-lg hover:scale-105 transition-all duration-200 ease-in">
            <img className="w-full h-48 md:h-56 object-cover" src={blog3}/>
            <div className="p-4">
              <p className="text-sm text-[#2d2d2d] mb-2">March 05, 2025</p>
              <h3 className="text-gray-800 font-semibold text-[23px] mb-3">Understanding Mortgage Options</h3>
            </div>
          </div>
        </div>

         <div className="text-center mt-9 lg:mt-24">
                    <button className="px-6 py-3 border mx-auto text-[#0f0e0e] border-orange-600 flex items-center gap-2 text-sm font-medium rounded-md transition-transform transform hover:scale-105 cursor-pointer"> View All insights <span><IoIosArrowForward /></span></button>
                  </div>
      </div>
    </section>
  );
};

export default Blogs;

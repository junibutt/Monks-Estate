import React from "react";
import crd1 from "../assets/card-1.png";
import crd2 from "../assets/card-2.png";
import crd3 from "../assets/card-3.png";
import crd4 from "../assets/card-4.png";
import crd5 from "../assets/card-5.png";
import crd6 from "../assets/card-6.png";
import { IoIosArrowForward } from "react-icons/io";

const UniqueHome = () => {
  return (
    <section className="bg-white mb-10 py-28 " id="properties">
      <div className="max-w-screen-2xl container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Find your home with{" "}
            <span className="text-orange-500">unique preferences</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-[#0f0e0e] mt-4">
            Find your dream home by focusing on unique preferences like location, design, amenities, space, and lifestyle needs for comfort.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative overflow-hidden">
            <img
              src={crd1}
              className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer"
            />
            <div className="mt-4 flex justify-between items-center">
              <p className="text-[#0f0e0e] font-bold md:text-[20px]">
                Luxury Water Front
              </p>
              <h3 className="text-[#0f0e0e] font-bold">$235, 000</h3>
            </div>
          </div>

          <div className="relative lg:-mb-16 lg:mt-16 overflow-hidden">
            <img
              src={crd2}
              className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer"
            />
            <div className="mt-4 flex justify-between items-center">
              <p className="text-[#0f0e0e] font-bold md:text-[20px]">
              Seaside Elegance
              </p>
              <h3 className="text-[#0f0e0e] font-bold">$535, 000</h3>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src={crd3}
              className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer"
            />
            <div className="mt-4 flex justify-between items-center">
              <p className="text-[#0f0e0e] font-bold md:text-[20px]">
              Bayview Retreat
              </p>
              <h3 className="text-[#0f0e0e] font-bold">$330, 000</h3>
            </div>
          </div>
        </div>

        <div className="mt-20">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative overflow-hidden">
                <img
                  src={crd4}
                  className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer"
                />
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-[#0f0e0e] font-bold md:text-[20px]">
                  Coastal Paradise
                  </p>
                  <h3 className="text-[#0f0e0e] font-bold">$225, 000</h3>
                </div>
              </div>

              <div className="lg:-mb-16 lg:mt-16 overflow-hidden">
                <img
                  src={crd5}
                  className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer"
                />
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-[#0f0e0e] font-bold md:text-[20px]">
                  Oceanfront Oasis
                  </p>
                  <h3 className="text-[#0f0e0e] font-bold">$100, 000</h3>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={crd6}
                  className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer"
                />
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-[#0f0e0e] font-bold md:text-[20px]">
                  Tidewater Estates
                  </p>
                  <h3 className="text-[#0f0e0e] font-bold">$555, 000</h3>
                </div>
              </div>

            </div>
          </div>

          <div className="text-center mt-9 lg:mt-24">
            <button className="px-6 py-3 border mx-auto text-[#0f0e0e] border-orange-600 flex items-center gap-2 text-sm font-medium rounded-md transition-transform transform hover:scale-105 cursor-pointer"> View All Properties <span><IoIosArrowForward /></span></button>
          </div>
      </div>
    </section>
  );
};

export default UniqueHome;

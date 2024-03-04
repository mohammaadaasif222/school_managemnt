import { MdGroups } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { FaRupeeSign, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import { useState } from "react";
// import MyCalendar from "../Component/Calender";
import AccountChart from "./AccountChart";

const Blockone = [
  {
    icon: <MdGroups className="text-green-500 text-4xl mx-2" />,
    title: "Students",
    count: 5000,
  },
  {
    icon: <GiTeacher className="text-yellow-800 text-4xl mx-2" />,
    title: "Teachers",
    count: 10000,
  },
  {
    icon: <MdFamilyRestroom className="text-blue-800 text-4xl mx-2" />,
    title: "Parents",
    count: 15000,
  },
  {
    icon: <FaRupeeSign className="text-pink-800 text-4xl mx-2" />,
    title: "Earning",
    count: 30000,
  },
];

const socialMediaOne = [
  {
    icon: <FaFacebook className="text-4xl mx-2" />,
    title: "Like Us on Facebook",
    count: 1500,
    gradientClass: "from-blue-800 to-blue-200",
  },
  {
    icon: <FaInstagram className="text-4xl mx-2" />,
    title: "Follow Us on InstaGram",
    count: 4000,
    gradientClass: "from-purple-500 to-pink-500",
  },
];

const SocialMediaTwo = [
  {
    icon: <FaTwitter className="text-4xl mx-2" />,
    title: "Connect with Us on Twitter",
    count: 6500,
    gradientClass: "from-blue-200 to-blue-800",
  },
  {
    icon: <FaLinkedinIn className="text-4xl mx-2" />,
    title: "Connect with Us on Linkedin",
    count: 4200,
    gradientClass: "from-blue-800 to-blue-200",
  },
];
export default function AdminDashboard() {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <>
      <div className="h-auto w-full">
        <div className="lg:flex lg:justify-between">
          {Blockone.map((stat, index) => (
            <div
              key={index}
              className="flex items-center m-4 shadow-2xl py-3  justify-around lg:w-1/4 bg-white"
            >
              <div className="flex flex-col items-center">
                {stat.icon}
                <p className="text-xl">{stat.title}</p>
              </div>
              <div className="border-l border-gray-500 h-10 mx-2"></div>
              <div className="flex items-center">
                <h1 className="mr-2 text-3xl">{stat.count}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ////////////////////// block 2 ///////////////  */}
      <div className="h-auto w-full lg:flex justify-between">
        <div className=" m-4 lg:w-1/2 bg-white">
          <div className="flex justify-between items-center px-5 py-1  border-b-2 border-gray-400">
            <p className="text-md font-bold text-red-900">
              Fee Collection And Expense
            </p>
            <div>
              <IoMdRefresh
                className={`text-blue-900 font-bold ${
                  isRotated ? "rotate" : ""
                }`}
                onClick={handleClick}
              />
            </div>
          </div>
          <div>
            <AccountChart />
          </div>
        </div>

        <div className="lg:w-1/2  m-4">
          <div className="flex w-full justify-between ">
            {socialMediaOne.map((socialMedia, index) => (
              <div key={index} className="w-1/2 bg-gray-700 mx-1 ">
                <div
                  className={`bg-gradient-to-r ${socialMedia.gradientClass} text-white p-8 shadow-lg justify-around lg:w-full bg-white`}
                >
                  <div className="flex flex-col pb-4">{socialMedia.icon}</div>
                  <div className="lg:flex items-center">
                    <p className="text-md">{socialMedia.title}</p>
                    <div className="border-l border-gray-500 h-10 mx-2"></div>
                    <div className="flex items-center">
                      <h1 className="mr-2 text-3xl">{socialMedia.count}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-between ">
            {SocialMediaTwo.map((socialMedia, index) => (
              <div key={index} className="w-1/2 bg-gray-700 mt-4 mx-1 ">
                <div
                  className={`bg-gradient-to-r ${socialMedia.gradientClass} text-white p-6 shadow-lg justify-around lg:w-full bg-white`}
                >
                  <div className="flex flex-col pb-4">{socialMedia.icon}</div>
                  <div className="lg:flex items-center">
                    <p className="text-md">{socialMedia.title}</p>
                    <div className="border-l border-gray-500 h-10 mx-2"></div>
                    <div className="flex items-center">
                      <h1 className="mr-2 text-3xl">{socialMedia.count}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ////////////////////// block 3 ///////////////  */}
      <div className="h-auto w-full lg:flex justify-between">
        <div className="lg:flex m-4 lg:w-1/2 bg-white">
          <div className=" lg:w-1/2 bg-white">
            <div className="flex justify-between items-center px-5 py-1 bg-gradient-to-r from-pink-500 to-pink-100  border-b-2 border-gray-400">
              <p className="text-md font-bold text-red-900">Notice Board</p>
              <div>
                <IoMdRefresh
                  className={`text-green-600 font-bold ${
                    isRotated ? "rotate" : ""
                  }`}
                  onClick={handleClick}
                />
              </div>
            </div>
            <div className="">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Upcoming Notice</h2>
              </div>
            </div>
          </div>

          <div className="lg:ml-4 lg:w-1/2 bg-white">
            <div className="flex justify-between items-center px-5 py-1 bg-gradient-to-r from-green-500 to-green-100 border-b-2 border-gray-400">
              <p className="text-md font-bold  text-white">
                Recent Activity
              </p>
              <div>
                <IoMdRefresh
                  className={`text-green-600 font-bold ${
                    isRotated ? "rotate" : ""
                  }`}
                  onClick={handleClick}
                />
              </div>
            </div>
            <div className="">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              </div>
            </div>
          </div>
        </div>

        <div className=" m-4 lg:w-1/2 bg-white">
          <div className="flex justify-between items-center bg-gradient-to-r from-amber-500 to-amber-100 px-5 py-1  border-b-2 border-gray-400">
            <p className="text-md font-bold text-red-900">Event Calender</p>
            <div>
              <IoMdRefresh
                className={`text-green-600 font-bold ${
                  isRotated ? "rotate" : ""
                }`}
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

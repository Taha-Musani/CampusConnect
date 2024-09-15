import React from "react";
import AutoScrollingSlider from "./AutoScrollingSlider.js";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      {/* Header Section */}
      <AutoScrollingSlider />


      {/* Main Content */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Announcement Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-blue-600 text-xl font-bold mb-2">Latest Announcements</h2>
            <ul className="space-y-2">
              <li className="p-2 bg-gray-50 rounded">Alumni Meet 2024 - Date Announced!</li>
              <li className="p-2 bg-gray-50 rounded">Fundraising for New Library</li>
              <li className="p-2 bg-gray-50 rounded">Webinar: Careers in Data Science</li>
            </ul>
          </div>

          {/* Profile Summary Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <img
                className="w-16 h-16 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div>
                <h2 className="text-blue-600 text-xl font-bold">John Doe</h2>
                <p>Alumni, 2020 Batch</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">Connected Alumni: 256</p>
              <p className="text-gray-600">Following: 153</p>
              <p className="text-gray-600">Followers: 320</p>
            </div>
          </div>

          {/* Event Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-blue-600 text-xl font-bold mb-2">Upcoming Events</h2>
            <div className="bg-gray-50 p-2 rounded mb-2">
              <h3 className="text-blue-600 font-semibold">Alumni Meet 2024</h3>
              <p className="text-sm">Date: January 15, 2024</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <h3 className="text-blue-600 font-semibold">Alumni Webinar</h3>
              <p className="text-sm">Date: December 10, 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Alumni Connect. All Rights Reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;

import React from "react";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
      <div className="bg-gray-100 mb-4">
        <nav className="sticky top-0 z-50 bg-blue-600 p-4 shadow-md flex justify-between items-center">
            <div className="text-white font-bold text-2xl">CampusConnect</div>
            <ul className="space-x-4 flex text-white">
                <li><NavLink to="/"> Home </NavLink> </li>
                <li><NavLink to="/job-oppo"> Job Opportunities </NavLink></li>
                <li><NavLink to="/events"> Events </NavLink></li>
                <li><NavLink to="/fundraising"> Fundraising</NavLink></li>
                <li><NavLink to="/alumni"> Alumni Directory</NavLink></li>
                <li><NavLink to="/about-us"> About Us</NavLink></li>
                <li><NavLink to="/contact-us"> Contact Us</NavLink></li>
            </ul>
            <div className="text-white">Welcome, User</div>
      </nav>
      </div>
  );
};

export default Navbar;
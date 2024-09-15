// import React from 'react';
// import './App.css';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// import Home from './components/Home.js';
// import JobOpportunities from './components/JobOpportunities.js';
// import FundRaisingPage from './components/FundRaisingPage.js';
// import EventsPage from './components/EventPage.js';
// import Layout from "./components/Layout.js"; // Removed unused imports

// const router = createBrowserRouter([{
//     path: "/",
//     element: <Layout />,
//     children: [
//         {
//             path: "/",
//             element: <Home />,
//         },
//         {
//             path: "/job-oppo",
//             element: <JobOpportunities />,
//         },
//         {
//             path: "/events",
//             element: <EventsPage />,
//         },
//         {
//             path: "/fundraising",
//             element: <FundRaisingPage />,
//         }
//     ]
// }]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
        
//     </React.StrictMode>
// );

// // export default Main;

import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from './components/ContactUs.js';
// import ReactDOM from "react-dom/client";
import Home from './components/Home.js';
import AlumniDirectory from './components/AlumniDirectory.js';
import AboutUs from './components/AboutUs.js';
import JobOpportunities from './components/JobOpportunities.js';
import FundRaisingPage from './components/FundRaisingPage.js';
import EventsPage from './components/EventPage.js';
import Layout from "./components/Layout.js"; // Removed unused imports

const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "",
            element: <Home />,
        },
        {
            path: "job-oppo",
            element: <JobOpportunities />,
        },
        {
            path: "events",
            element: <EventsPage />,
        },
        {
            path: "fundraising",
            element: <FundRaisingPage />,
        },
        {
            path: "about-us",
            element: <AboutUs />,
        },
        {
            path: "alumni",
            element: <AlumniDirectory />,
        },
        {
            path: "contact-us",
            element: <ContactUs />,
        }
    ]
}]);

// Main component that wraps RouterProvider
const Main = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
};

// Export the Main component
export default Main;

// Render the Main component
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <Main />
// );

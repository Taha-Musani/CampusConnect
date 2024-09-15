import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Welcome to <span className="font-semibold">Campus Connect</span>, the alumni association for graduates of Your Institution! 
          We are a vibrant community dedicated to keeping the connections and friendships formed during our time at the institution alive and thriving.
          Our goal is to create a space where alumni can come together to network, share experiences, and continue to contribute to the success of our alma mater.
        </p>
      </div>

      {/* Mission Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Our Mission</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-blue-600">Reconnect</h3>
            <p className="text-gray-700 text-center">
              Reunite alumni from various years and disciplines to share their stories, experiences, and successes.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-blue-600">Support</h3>
            <p className="text-gray-700 text-center">
              Offer mentorship and career development opportunities to fellow alumni and current students.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-blue-600">Engage</h3>
            <p className="text-gray-700 text-center">
              Host engaging events, workshops, and reunions to foster personal and professional growth.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-blue-600">Give Back</h3>
            <p className="text-gray-700 text-center">
              Contribute to the institution through initiatives such as scholarships, fundraising, and volunteering.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our vision is to cultivate a thriving alumni network that serves as a bridge between the past, present, and future generations of students. We believe that by staying connected, we can contribute to each other's growth and help the institution continue its legacy of excellence.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Why Join Us?</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Reconnect with Friends</h3>
            <p className="text-gray-700">
              Opportunities to reconnect with old friends and meet new ones.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Exclusive Events</h3>
            <p className="text-gray-700">
              Invitations to alumni events, workshops, and reunions.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Mentorship</h3>
            <p className="text-gray-700">
              Access to mentorship and career development opportunities.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Support Future Students</h3>
            <p className="text-gray-700">
              A platform to give back to the institution and support future students.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Whether you’ve recently graduated or have been in the field for years, there are plenty of ways to get involved with Campus Connect. Attend our events, become a mentor, or participate in alumni projects. Together, we can create lasting connections and continue building a supportive alumni community.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Join Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

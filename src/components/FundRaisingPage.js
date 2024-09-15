import React from "react";

const Fundraising = () => {
  const projects = [
    {
      id: 1,
      title: "Scholarship Fund",
      description: "Help provide scholarships to deserving students in our alumni community.",
      raised: 14000,
      goal: 20000,
    },
    {
      id: 2,
      title: "Library Renovation",
      description: "Contribute to the renovation of our Alumni library and make it a modern resource center.",
      raised: 9000,
      goal: 20000,
    },
    {
      id: 3,
      title: "Alumni Meet Fund",
      description: "Help organize the annual Alumni meet, bringing together members from across the world.",
      raised: 18000,
      goal: 20000,
    },
  ];

  const progressBar = (raised, goal) => {
    const percentage = (raised / goal) * 100;
    return (
      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className="bg-green-500 h-3 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-10 text-center">
        <h1 className="text-3xl font-bold">Alumni Association Fundraising Projects</h1>
        <p className="text-lg mt-2">Support the projects that foster the growth of our Alumni community!</p>
      </header>

      {/* Fundraising Cards */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg p-4">
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-lg mb-4">
                <span className="text-gray-500 text-xl">300 x 200</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {progressBar(project.raised, project.goal)}
              <p className="text-sm text-gray-600 mt-2">
                Raised: ${project.raised.toLocaleString()} / ${project.goal.toLocaleString()}
              </p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Donate
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fundraising;

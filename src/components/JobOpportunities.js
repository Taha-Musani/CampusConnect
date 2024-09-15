import React, { useState } from 'react';

const JobPosting = () => {
  // Preloaded example job postings
  const [jobs, setJobs] = useState([
    {
      jobTitle: 'Software Engineer',
      company: 'Tech Innovators Ltd.',
      location: 'San Francisco, CA',
      salary: '120,000',
      jobDescription: 'We are looking for a talented software engineer with experience in JavaScript and Node.js. Join us to develop cutting-edge applications.',
    },
    {
      jobTitle: 'Data Analyst',
      company: 'Data Insights Co.',
      location: 'New York, NY',
      salary: '95,000',
      jobDescription: 'A skilled data analyst is required to work with large datasets, perform trend analysis, and create insightful reports using Python and SQL.',
    },
    {
      jobTitle: 'UX/UI Designer',
      company: 'Creative Labs',
      location: 'Austin, TX',
      salary: '85,000',
      jobDescription: 'Seeking an experienced UX/UI designer to design intuitive and user-friendly mobile applications and websites. Proficiency in Figma is a must.',
    },
  ]);

  // State to manage the visibility of the form
  const [showForm, setShowForm] = useState(false);

  // State to handle form inputs
  const [newJob, setNewJob] = useState({
    jobTitle: '',
    company: '',
    location: '',
    salary: '',
    jobDescription: '',
  });

  // Update the job list with new job
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setJobs([...jobs, newJob]);
    setNewJob({
      jobTitle: '',
      company: '',
      location: '',
      salary: '',
      jobDescription: '',
    });
    setShowForm(false);
  };

  // Toggle form visibility
  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Job Opportunities</h1>
        <p className="text-lg mt-2 text-gray-600">Explore current job opportunities for the alumni network. Add new job postings below.</p>
      </header>

      <section className="current-jobs">
        <h2 className="text-2xl font-semibold text-center mb-8">Current Job Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-xl font-semibold mb-2">{job.jobTitle}</h3>
              <p className="text-gray-600">Company: {job.company}</p>
              <p className="text-gray-600 location">Location: {job.location}</p>
              <p className="text-gray-600 salary">Salary: ${job.salary}</p>
              <p className="text-gray-600">{job.jobDescription}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="create-button-container text-center mt-8">
        <button
          onClick={toggleFormVisibility}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
        >
          {showForm ? 'Hide Job Posting Form' : 'Add a New Job Posting'}
        </button>
      </div>

      {showForm && (
        <section className="create-job-posting bg-white shadow-lg rounded-lg p-6 mt-8 mx-auto max-w-md">
          <h2 className="text-center text-2xl font-semibold mb-4">Create a New Job Posting</h2>
          <form onSubmit={handleFormSubmit} className="flex flex-col">
            <label htmlFor="job-title" className="mb-2 font-semibold">Job Title:</label>
            <input
              type="text"
              id="job-title"
              name="jobTitle"
              value={newJob.jobTitle}
              onChange={(e) => setNewJob({ ...newJob, jobTitle: e.target.value })}
              className="mb-4 p-2 border rounded"
              required
            />

            <label htmlFor="company" className="mb-2 font-semibold">Company Name:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={newJob.company}
              onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
              className="mb-4 p-2 border rounded"
              required
            />

            <label htmlFor="location" className="mb-2 font-semibold">Job Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={newJob.location}
              onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
              className="mb-4 p-2 border rounded"
              required
            />

            <label htmlFor="salary" className="mb-2 font-semibold">Salary (USD):</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={newJob.salary}
              onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
              className="mb-4 p-2 border rounded"
              required
            />

            <label htmlFor="job-description" className="mb-2 font-semibold">Job Description:</label>
            <textarea
              id="job-description"
              name="jobDescription"
              rows="4"
              value={newJob.jobDescription}
              onChange={(e) => setNewJob({ ...newJob, jobDescription: e.target.value })}
              className="mb-4 p-2 border rounded"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Post Job
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default JobPosting;
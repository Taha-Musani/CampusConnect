import React from "react";

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Event Name 1",
      location: "Virtual",
      description:
        "Join us for an exciting webinar on the latest trends in technology. Don't miss this opportunity to connect with experts!",
      date: "September 25, 2024",
    },
    {
      id: 2,
      title: "Event Name 2",
      location: "Conference Hall A",
      description:
        "An insightful session on leadership skills for professionals. Join us for an afternoon of learning and networking.",
      date: "October 5, 2024",
    },
  ];

  const currentEvents = [
    {
      id: 1,
      title: "Event Name 3",
      location: "Community Center",
      description:
        "A community-driven initiative to promote sustainable living practices. Engage in workshops and discussions.",
      date: "September 15, 2024 (Ongoing)",
    },
    {
      id: 2,
      title: "Event Name 4",
      location: "Virtual",
      description:
        "Explore the world of artificial intelligence in this immersive event. Attend keynotes from industry leaders.",
      date: "September 13, 2024 (Ongoing)",
    },
  ];

  const renderEventCard = (event, isCurrent = false) => (
    <div
      key={event.id}
      className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-full mx-auto mb-4"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
        <span className="text-sm text-red-500 font-semibold">{event.date}</span>
      </div>
      <p className="text-gray-600 mt-2">
        <strong>Location: </strong> {event.location}
      </p>
      <p className="text-gray-600 mt-2">{event.description}</p>
      <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
        Interested
      </button>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Upcoming Events */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => renderEventCard(event))}
        </div>

        {/* Current Events */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mt-10 mb-6">
          Current Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentEvents.map((event) => renderEventCard(event, true))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
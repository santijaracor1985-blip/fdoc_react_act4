import React from "react";

function EventCard({ event }) {
  const fecha = new Date(event.date).toLocaleDateString("es-ES");

  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <h2 className="text-lg font-bold">{event.title}</h2>
      <p className="text-gray-600">{event.location}</p>
      <p className="text-sm text-gray-400">{fecha}</p>
      <p className="text-green-600 font-semibold mt-2">${event.price}</p>
    </div>
  );
}

export default EventCard;

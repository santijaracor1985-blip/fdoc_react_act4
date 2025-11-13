import React from "react";
import EventCard from "./EventCard";

function EventList() {
  const events = [
    {
      id: 1,
      title: "Concierto de Rock",
      date: "2025-11-25",
      location: "Bogotá",
      price: 120000,
    },
    {
      id: 2,
      title: "Feria del Libro",
      date: "2025-12-10",
      location: "Medellín",
      price: 0,
    },
    {
      id: 3,
      title: "Festival Gastronómico",
      date: "2026-01-05",
      location: "Cali",
      price: 45000,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Próximos Eventos</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventList;

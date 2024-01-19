import React from "react";
import { Link, useParams } from "react-router-dom";

function EventDetails({ events, onDelete }) {
  const { id } = useParams();
  const eventId = parseInt(id, 10);
  const event = events.find((event) => event.id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  const handleDelete = () => {
    // Call the onDelete prop to delete the event
    onDelete(eventId);
  };

  return (
    <>
      <h2>{event.name}</h2>
      <h3>Date: {event.date}</h3>
      <h3>Time: {event.time}</h3>
      <h3>
        Description:
        <p>{event.description}</p>
      </h3>
      <Link to="/">Back to events</Link>

      <div>
        {/* Link to the edit page with the event ID */}
        <Link to={`/edit/${event.id}`}>Edit Event</Link>
        <button onClick={handleDelete}>Delete Event</button>
      </div>
    </>
  );
}

export default EventDetails;

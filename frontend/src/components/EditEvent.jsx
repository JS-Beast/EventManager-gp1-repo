import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EditEvent({ events, onUpdate }) {
  const { id } = useParams();
  const eventId = parseInt(id, 10);

  // Now I have to replace event values of the given event with the new values
  const [edit, setEdit] = useState({
    eventname: "",
    date: "",
    time: "",
    description: "",
  });

  useEffect(() => {
    const event = events.find((event) => event.id === eventId);
    if (event) {
      setEdit({
        eventname: event.name,
        date: event.date,
        time: event.time,
        description: event.description,
      });
    }
  }, [eventId, events]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(eventId, edit);
  };

  return (
    <>
      <h2>Write New Values</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eventname">Event Name</label>
        <input
          type="text"
          name="eventname"
          value={edit.eventname}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={edit.date}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          value={edit.time}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="descrp">Description</label>
        <input
          type="text"
          name="description"
          value={edit.description}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button type="submit">Update Event</button>
        <Link to="/">Show all Events</Link>
      </form>
    </>
  );
}

export default EditEvent;

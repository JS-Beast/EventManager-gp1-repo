import { useState } from "react";

function CreateEvent({ events, setEvents, history }) {
  const [formData, setFormData] = useState({
    eventname: "",
    date: "",
    time: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: events.length + 1,
      ...formData,
    };
    setEvents((prevEvents) => [...prevEvents, newEvent]);

    setFormData({
      eventname: "",
      date: "",
      time: "",
      description: "",
    });

    // Redirect to the events list page
    history.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="event">Event Name</label>
        <input type="text" name="eventname" onChange={handleChange} />
        <br />
        <label htmlFor="date">Date</label>
        <input type="date" name="date" onChange={handleChange} />
        <br />
        <label htmlFor="time">Time</label>
        <input type="time" name="time" onChange={handleChange} />
        <br />
        <label htmlFor="descrp">Description</label>
        <input type="text" name="description" onChange={handleChange} />
        <br />
        <button type="submit">Create Event</button>
        <button onClick={() => history.push("/")}>Show all Events</button>
      </form>
    </>
  );
}

export default CreateEvent;

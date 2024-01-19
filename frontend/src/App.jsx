import { useState } from "react";
// import { Switch, Route } from 'react-router-dom';
import EventListDisplay from "./components/EventListDisplay";
import CreateEvent from "./components/CreateEvent";
import EditEvent from "./components/EditEvent";
import EventDetails from "./components/EventDetails";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function App(){
  const[events, setEvents]= useState([
    {
      id: 1,
      name: "Event 1",
      date: "2024-01-08",
      time: "12:00",
      description: "Description for Event 1",
    },
    {
      id: 2,
      name: "Event 2",
      date: "2024-01-18",
      time: "12:00",
      description: "Description for Event 2",
    },
    {
      id: 3,
      name: "Event 3",
      date: "2024-01-28",
      time: "12:00",
      description: "Description for Event 3",
    },
    {
      id: 4,
      name: "Event 4",
      date: "2024-01-12",
      time: "12:00",
      description: "Description for Event 4",
    }
  ]);

  const updateEvent= (eventId, editevent)=>{
    setEvents((prev)=>
      prev.map((event) => 
        event.id===eventId ? {...event, ...editevent}: event
      )
    );
  }

  const deleteEvent = (eventId)=>{
    setEvents((prevEvents) =>
    prevEvents.filter((event)=> event.id!==eventId));
  }

  return(
    
    <Router>
    <Routes>
      {/* EventList Route */}
      <Route path="/" element={<EventListDisplay events={events} />} />

      {/* EventDetails Route */}
      <Route
        path="/events/:id"
        element={<EventDetails events={events} onDelete={deleteEvent} onUpdate={updateEvent} />}
      />

      {/* CreateEvent Route */}
      <Route
        path="/create"
        element={<CreateEvent event={events} setEvents={setEvents} />}
      />

      {/* EditEvent Route */}
      <Route
        path="/edit/:id"
        element={<EditEvent events={events} onUpdate={updateEvent} />}
      />
    </Routes>
  </Router>

  )
};
export default App;
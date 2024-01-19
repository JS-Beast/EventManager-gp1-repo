import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EventListDisplay({events}){
    const navigate= useNavigate();
    const [SelectedEvent, setSelectedEvent]= useState(null);
    const handleInput =(event)=>{
        setSelectedEvent(event);
        navigate(`/events/${event.id}`)
    }
    return(
    <div>
    <ul>
        {events.map((event)=>(
            <li key={event.id}>
                <strong>Name: {event.name}</strong>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <button onClick={()=>handleInput(event)}>More Details...</button>
            </li>
        )      
        )}
    </ul>
    {/* {SelectedEvent && (
        <div>
            <h2>Selected Event Details</h2>
            <p>Description: {SelectedEvent.description}</p>
        </div>
    )} */}
    </div>
    );

 }
export default EventListDisplay;
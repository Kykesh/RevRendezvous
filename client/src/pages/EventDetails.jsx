import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_EVENTS } from '../utils/queries';
import spinner from '../assets/spinner.gif';

function Detail() {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_EVENTS);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    if (data) {
      const foundEvent = data.events.find(event => event._id === id);
      setCurrentEvent(foundEvent);
    }
  }, [data, id]);

  return (
    <>
      {loading ? (
        <img src={spinner} alt="loading" />
      ) : currentEvent ? (
        <div className="container my-1">
          <Link to="/">← Back to Events</Link>

          <h2>{currentEvent.eventName}</h2>
          <p>{currentEvent.eventDescription}</p>
          <p><strong>Date:</strong> {new Date(currentEvent.eventDate).toLocaleDateString()}</p>
          <p><strong>Location:</strong> {currentEvent.location}</p>
          <p><strong>Fee:</strong> ${currentEvent.eventFee} {currentEvent.isCharitable ? "(Charitable)" : ""}</p>

          {currentEvent.host && (
            <p>Hosted by: {currentEvent.host.username}</p>
          )}

          {currentEvent.image && (
            <img src={`/images/${currentEvent.image}`} alt={currentEvent.eventName} />
          )}
        </div>
      ) : <p>No event found.</p>}
    </>
  );
}

export default Detail;

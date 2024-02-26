import React from "react";
import DateTimePicker from "react-datetime-picker";

const CalendarEvent = ({
  session,
  setStart,
  start,
  setEnd,
  end,
  setEventName,
  setEventDescription,
  createCalendarEvent,
  signOut,
}) => {
  const clearData = () => {
    setStart(new Date()); // Reset start date to current date
    setEnd(new Date()); // Reset end date to current date
    setEventName(""); // Reset event name to empty string
    setEventDescription(""); // Reset event description to empty string
    // Add additional clearing logic for form fields if needed
  };

  return (
    <>
      <h2>Hey there {session.user.email}</h2>
      <p>Start of your event</p>
      <DateTimePicker onChange={setStart} value={start} />
      <p>End of your event</p>
      <DateTimePicker onChange={setEnd} value={end} />
      <p>Event name</p>
      <input type="text" onChange={(e) => setEventName(e.target.value)} />
      <p>Event description</p>
      <input
        type="text"
        onChange={(e) => setEventDescription(e.target.value)}
      />
      <hr />
      <button onClick={() => createCalendarEvent()}>
        Create Calendar Event
      </button>
      <p></p>
      <button onClick={() => clearData()}>Refresh Calendar Event</button>{" "}
      <p></p>
      <button onClick={() => signOut()}>Sign Out</button>
      <br />
      <br />
    </>
  );
};

export default CalendarEvent;

import "./App.css";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
import { useState } from "react";
import Body from "./components/Body";
import CalendarEvent from "./components/CalendarEvent"; // Importing the new component
import "./styles/main.css";

function App() {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const session = useSession(); // tokens, when session exists we have a user
  const supabase = useSupabaseClient(); // talk to supabase!
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <></>;
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function createCalendarEvent() {
    console.log("Creating calendar event");
    const event = {
      summary: eventName,
      description: eventDescription,
      start: {
        dateTime: start.toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
      },
      end: {
        dateTime: end.toISOString(), // Date.toISOString() ->
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
      },
    };
    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + session.provider_token, // Access token for google
        },
        body: JSON.stringify(event),
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        alert("Event created, check your Google Calendar!");
      });
  }

  console.log(session);
  console.log(start);
  console.log(eventName);
  console.log(eventDescription);
  return (
    <div
      className="App"
      style={{ maxWidth: "700px", width: "90%", margin: "30px auto" }}
    >
      {!session && (
        <>
          <Body />
        </>
      )}{" "}
      {/* Render Body only if there is no active session */}
      <div
        className="signika-header font-extrabold"
        style={{ maxWidth: "400px", width: "90%", margin: "30px auto" }}
      >
        {session && (
          <CalendarEvent
            session={session}
            setStart={setStart}
            start={start}
            setEnd={setEnd}
            end={end}
            setEventName={setEventName}
            setEventDescription={setEventDescription}
            createCalendarEvent={createCalendarEvent}
            signOut={signOut}
          />
        )}
        {!session && (
          <>
            <button onClick={() => googleSignIn()}>Sign In With Google</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

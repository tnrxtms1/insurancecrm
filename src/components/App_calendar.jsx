import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

function App_calendar() {
  let draggableItem = document.getElementById("draggableItem");
  return (
    <>
      <div
        id="draggableItem"
        data-event='{ "title": "my event", "duration": "02:00" }'
      >
        drag me
      </div>
      <Draggable draggableItem />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        droppable="true"
      />
    </>
  );
}

export default App_calendar;

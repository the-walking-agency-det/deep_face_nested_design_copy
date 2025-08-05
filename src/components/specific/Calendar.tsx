import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Single Release',
    start: new Date(2025, 8, 1),
    end: new Date(2025, 8, 1),
  },
  {
    title: 'EP Release',
    start: new Date(2025, 9, 15),
    end: new Date(2025, 9, 15),
  },
];

const MyCalendar: React.FC = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default MyCalendar;
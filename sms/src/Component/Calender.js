import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [events, setEvents] = useState([
    { date: '2024-03-02', title: 'Event 1' }, // Example event data
    { date: '2024-03-05', title: 'Event 2' },
    // Add more events as needed
  ]);

  const tileContent = ({ date }) => {
    const formattedDate = date.toISOString().split('T')[0];
    const event = events.find(event => event.date === formattedDate);
    return event ? <p className="text-xs text-gray-500">{event.title}</p> : null;
  };

  return (
    <div className="custom-calendar">
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        inline
        tileContent={tileContent}
      />
    </div>
  );
};

export default CustomCalendar;

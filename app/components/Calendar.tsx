'use client';
import React, { useState, useEffect } from 'react';
import Month from './Month';
import { addMonths, subMonths } from 'date-fns';
import Cookies from 'js-cookie';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState(new Set<string>());

  useEffect(() => {
    // Load selected days from cookies on component mount
    const savedDays = Cookies.get('selectedDays');
    if (savedDays) {
      setSelectedDays(new Set(JSON.parse(savedDays)));
    }
  }, []);

  const handleDayClick = (day: string) => {
    setSelectedDays((prevSelectedDays) => {
      const newSelectedDays = new Set(prevSelectedDays);
      if (newSelectedDays.has(day)) {
        newSelectedDays.delete(day);
      } else {
        newSelectedDays.add(day);
      }
      saveState(newSelectedDays);
      return newSelectedDays;
    });
  };

  const saveState = (days: Set<string>) => {
    Cookies.set('selectedDays', JSON.stringify(Array.from(days)), { expires: 7 }); // Expires in 7 days
  };

  return (
    <div className="container">
      <h1>Booking Calendar</h1>
      <div className="calendar-controls">
        <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>Previous</button>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>Next</button>
      </div>
      <div className="calendar-container">
        {[...Array(9)].map((_, i) => (
          <Month
            key={i}
            date={addMonths(currentDate, i - 4)}
            selectedDays={selectedDays}
            onDayClick={handleDayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;

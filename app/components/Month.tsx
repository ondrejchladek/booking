
import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, addDays } from 'date-fns';
import Day from './Day';

const Month = ({ date, selectedDays, onDayClick }: { date: Date, selectedDays: Set<string>, onDayClick: (day: string) => void }) => {
  const startDate = startOfWeek(startOfMonth(date));
  const endDate = endOfWeek(endOfMonth(date));
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <div className="month">
      <h2>{format(date, 'MMMM yyyy')}</h2>
      <div className="grid">
        {days.map((day) => (
          <Day
            key={day.toString()}
            day={day}
            isSelected={selectedDays.has(day.toString())}
            onDayClick={onDayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Month;

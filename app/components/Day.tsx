
import React from 'react';
import { format } from 'date-fns';
import classNames from 'classnames';

const Day = ({ day, isSelected, onDayClick }: { day: Date, isSelected: boolean, onDayClick: (day: string) => void }) => (
  <div
    className={classNames('day', { 'selected': isSelected })}
    onClick={() => onDayClick(day.toString())}
  >
    {format(day, 'd')}
  </div>
);

export default Day;

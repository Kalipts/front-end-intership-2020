import React from 'react';

import WeekName from './Style/WeekName';
import { getNumberOfDay } from '../../../utils/Date';

export default function HeaderWeek(props) {
  const { startDay, endDay } = props;

  const numberOfWeek = getNumberOfDay(startDay, endDay) / 7;
  const renderHeaderWeek = new Array(numberOfWeek)
    .fill(1)
    .map((headerWeek, index) => {
      return (
        <WeekName key={index}>
          <span>Week {index + 1}</span>
        </WeekName>
      );
    });
  return <>{renderHeaderWeek}</>;
}

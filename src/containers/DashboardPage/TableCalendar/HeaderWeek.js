/* eslint-disable react/prop-types */
import React from 'react';

import moment from 'moment';
import WeekName from './Style/WeekName';
import { getNumberOfDay } from '../../../utils/Date';

export default function HeaderWeek(props) {
  const { startDay, endDay } = props;

  const numberOfWeek = getNumberOfDay(startDay, endDay) / 7;
  const renderHeaderWeek = new Array(numberOfWeek)
    .fill(1)
    .map((headerWeek, index) => {
      const weekInCell = moment(startDay.toString()).add(index * 7, 'days');
      const weekNumber = weekInCell.week();
      const year = weekInCell.year();
      return (
        <WeekName key={`${year} ${weekNumber}`}>
          <span>Week {weekNumber}</span>
        </WeekName>
      );
    });
  return <>{renderHeaderWeek}</>;
}

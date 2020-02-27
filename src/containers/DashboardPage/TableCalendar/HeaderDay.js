import React from 'react';
import moment from 'moment';

import { getNumberOfDay } from '../../../utils/Date';
import ContentWeek from './Style/ContentWeek';
import WeekDayName from './Style/WeekDateName';
import Day from './Style/Day';

export default function HeaderDay(props) {
  const { startDay, endDay } = props;
  let nowDay = moment(startDay);
  const renderHeaderDays = new Array(getNumberOfDay(startDay, endDay))
    .fill(0)
    .map((headerDay, index) => {
      const weekDayName = nowDay.format('ddd');
      const isWeekend = weekDayName === 'Sun' || weekDayName === 'Sat';
      const day = nowDay.format('DD');
      nowDay = nowDay.add(1, 'days');
      return (
        <Day key={index} isWeekend={isWeekend}>
          <ContentWeek>
            <WeekDayName isWeekend={isWeekend}>{weekDayName}</WeekDayName>
            <span>{day}</span>
          </ContentWeek>
        </Day>
      );
    });
  return <>{renderHeaderDays}</>;
}

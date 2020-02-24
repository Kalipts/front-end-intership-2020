import React, { useState, useEffect } from 'react';
import moment from 'moment';

import ContainerDate from './Style/ContainerDate';
import BodyDate from './Style/BodyDate';
import Week from './Style/Week';
import DateInWeek from './Style/DateInWeek';
import { getNumberOfDay } from '../../../utils/Date';
import HeaderDay from './Style/HeaderDay';
import ContentWeek from './Style/ContentWeek';
import WeekDayName from './Style/WeekDateName';
import WeekName from './Style/WeekName';

export default function HeaderCalendar(props) {
  const [headerWeeks, setHeaderWeeks] = useState([]);
  const [headerDays, setHeaderDays] = useState([]);

  const { startDay, endDay } = props;

  useEffect(() => {
    function createHeaderDays() {
      let nowDay = moment(startDay);
      const renderHeaderDays = new Array(getNumberOfDay(startDay, endDay))
        .fill(1)
        .map((headerDay, index) => {
          const weekDayName = nowDay.format('ddd');
          const isWeekend = weekDayName === 'Sun' || weekDayName === 'Sat';
          const day = nowDay.format('DD');
          console.log(isWeekend);
          nowDay = nowDay.add(1, 'days');
          return (
            <HeaderDay key={index}>
              <ContentWeek>
                <WeekDayName isWeekend={isWeekend}>{weekDayName}</WeekDayName>
                <span>{day}</span>
              </ContentWeek>
            </HeaderDay>
          );
        });
      return renderHeaderDays;
    }
    function createHeaderWeek() {
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
      return renderHeaderWeek;
    }
    setHeaderDays(createHeaderDays());
    setHeaderWeeks(createHeaderWeek());
    return () => {};
  }, [headerDays, headerWeeks]);
  return (
    <ContainerDate>
      <BodyDate
        cellPadding={0}
        cellSpacing={0}
        numberOfDay={getNumberOfDay(startDay, endDay)}
      >
        <thead>
          <Week numberOfDay={getNumberOfDay(startDay, endDay)}>
            {headerWeeks}
          </Week>
          <DateInWeek numberOfDay={getNumberOfDay(startDay, endDay)}>
            {headerDays}
          </DateInWeek>
        </thead>
      </BodyDate>
    </ContainerDate>
  );
}

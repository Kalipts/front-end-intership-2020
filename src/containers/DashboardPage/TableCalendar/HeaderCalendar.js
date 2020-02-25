import React from 'react';

import ContainerDate from './Style/ContainerDate';
import BodyDate from './Style/BodyDate';
import Week from './Style/Week';
import DateInWeek from './Style/DateInWeek';
import { getNumberOfDay } from '../../../utils/Date';
import HeaderDay from './HeaderDay';

import HeaderWeek from './HeaderWeek';

export default function HeaderCalendar(props) {
  const { startDay, endDay } = props;
  const numberOfDays = getNumberOfDay(startDay, endDay)

  return (
    <ContainerDate numberOfDay={numberOfDays}>
      <BodyDate
        cellPadding={0}
        cellSpacing={0}
        numberOfDay={numberOfDays}
      >
        <thead>
          <Week numberOfDay={numberOfDays}>
            <HeaderWeek startDay={startDay} endDay={endDay}></HeaderWeek>
          </Week>
          <DateInWeek numberOfDay={numberOfDays}>
            <HeaderDay startDay={startDay} endDay={endDay}></HeaderDay>
          </DateInWeek>
        </thead>
      </BodyDate>
    </ContainerDate>
  );
}

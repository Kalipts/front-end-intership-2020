import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ContainerDate from './Style/ContainerDate';
import BodyDate from './Style/BodyDate';
import Week from './Style/Week';
import DateInWeek from './Style/DateInWeek';
import { getNumberOfDay } from '../../../utils/Date';
import HeaderDay from './HeaderDay';

import HeaderWeek from './HeaderWeek';

function HeaderCalendar({ startDay, endDay }) {
  const numberOfDays = getNumberOfDay(startDay, endDay);

  return (
    <ContainerDate>
      <BodyDate>
        <Week>
          <HeaderWeek startDay={startDay} endDay={endDay}></HeaderWeek>
        </Week>
        <DateInWeek numberOfDays={numberOfDays}>
          <HeaderDay startDay={startDay} endDay={endDay}></HeaderDay>
        </DateInWeek>
      </BodyDate>
    </ContainerDate>
  );
}
HeaderCalendar.propTypes = {
  startDay: PropTypes.instanceOf(moment),
  endDay: PropTypes.instanceOf(moment),
};
export default HeaderCalendar;

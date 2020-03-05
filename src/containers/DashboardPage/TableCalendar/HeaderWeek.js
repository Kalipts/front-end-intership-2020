/* eslint-disable react/prop-types */
import React from 'react';

import WeekName from './Style/WeekName';

export default function HeaderWeek(props) {
  const { weeks } = props;

  const renderHeaderWeek = weeks.map(week => (
    <WeekName key={`${week.year} ${week.weekNumber}`}>
      <span>Week {week.weekNumber}</span>
    </WeekName>
  ));
  return <>{renderHeaderWeek}</>;
}

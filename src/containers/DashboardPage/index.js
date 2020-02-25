import React from 'react';
import moment from 'moment';

import ToolbarCalendar from './ToolbarCalendar';
import Header from '../../components/Header';
import TableCalendar from './TableCalendar';

function DashboardPage() {
  return (
    <div>
      <ToolbarCalendar />
      <TableCalendar
        endDay={moment('2020-02-03', 'YYYY-MM-DD')}
        startDay={moment('2019-12-30', 'YYYY-MM-DD')}
      />
    </div>
  );
}

export default DashboardPage;

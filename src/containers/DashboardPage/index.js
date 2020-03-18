import React from 'react';
import moment from 'moment';

import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import ToolbarCalendar from './ToolbarCalendar';
// eslint-disable-next-line import/no-named-as-default-member
import TableCalendar from './TableCalendar';
import { CalendarProvider } from '../../context/Calendar';
function DashboardPage() {
  return (
    <div className="app_schedule">
      <ToolbarCalendar />
      <DndProvider backend={Backend}>
        <CalendarProvider>
          <TableCalendar
            endDay={moment('2020-02-03', 'YYYY-MM-DD')}
            startDay={moment('2019-12-30', 'YYYY-MM-DD')}
          />
        </CalendarProvider>
      </DndProvider>
    </div>
  );
}

export default DashboardPage;

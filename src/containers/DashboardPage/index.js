import React from "react";
import moment from "moment";

import ToolbarCalendar from './ToolbarCalendar';
import TableCalendar from './TableCalendar';
import { CalendarProvider } from "../../context/Calendar";

function DashboardPage() {
  return (
    <div className="app_schedule">
      <ToolbarCalendar />
      <CalendarProvider>
        <TableCalendar
          endDay={moment('2020-02-03', 'YYYY-MM-DD')}
          startDay={moment('2019-12-30', 'YYYY-MM-DD')}
        />
      </CalendarProvider>
    </div>
  );
}

export default DashboardPage;

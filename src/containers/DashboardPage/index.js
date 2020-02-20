import React from "react";
import ToolbarCalendar from "./ToolbarCalendar";

import TableCalendar from "../../components/TableCalendar";

function DashboardPage() {
  return (
    <div>
      <ToolbarCalendar />
      <TableCalendar />
    </div>
  );
}

export default DashboardPage;

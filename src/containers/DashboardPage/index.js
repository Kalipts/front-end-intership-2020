import React from "react";
import Calendar from "../DashboardPage/Calendar";

import ToolbarCalendar from "./ToolbarCalendar";

export default function DashboardPage() {
  return (
    <div>
      <ToolbarCalendar />
      <Calendar />
    </div>
  );
}

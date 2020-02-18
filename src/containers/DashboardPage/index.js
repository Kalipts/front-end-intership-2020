import React from "react";
import ToolbarCalendar from "./ToolbarCalendar";
import Calendar from "./Calendar";

import Header from "../../components/Header";
import TableCalendar from "../../components/TableCalendar";

export default function DashboardPage() {
  return (
    <div>
        <Header/>
      <ToolbarCalendar />
      <TableCalendar/>
    </div>
  );
}

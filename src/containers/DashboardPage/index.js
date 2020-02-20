import React from "react";
import ToolbarCalendar from "./ToolbarCalendar";
import Header from "../../components/Header";
import TableCalendar from "./TableCalendar";

export default function DashboardPage() {
  return (
    <div>
      <Header/>
      <ToolbarCalendar />
      <TableCalendar/>
    </div>
  );
}

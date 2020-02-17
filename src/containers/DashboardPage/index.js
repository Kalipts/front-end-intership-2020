import React from "react";
import ToolbarCalendar from "./ToolbarCalendar";
import Calendar from "./Calendar";

import Header from "../../components/Header";
import TableCalendar from "../../components/TableCalendar";
import BookingCard from "../../components/TableCalendar/BookingCard";

export default function DashboardPage() {
  return (
    <div>
      <Header/>
      <ToolbarCalendar />
      <TableCalendar/>
      <Calendar></Calendar>
      <BookingCard color={"blue"} lenth={1}/>
    </div>
  );
}

import React from "react";
import styled from "styled-components";
import ToolbarCalendar from "./ToolbarCalendar";
import Calendar from "./Calendar";


export default function DashboardPage() {

  return (
    <div>
      <ToolbarCalendar ></ToolbarCalendar>
      <Calendar></Calendar>
    </div>
  );
}

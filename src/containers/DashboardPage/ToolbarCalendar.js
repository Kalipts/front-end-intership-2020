import React, { useState } from "react";
import { MAX_OFFSET_YEAR, NUMBERS_OF_MONTHS } from "../App/constant";
import moment from "moment";
import { FaMinus, FaPlus } from "react-icons/fa";
import MonthPickerItem from "./ToolbarHeaderCalendar/MonthPickerItem";
import MonthPickerItemText from "./ToolbarHeaderCalendar/MonthPickerItemText";
import Toolbar from "./ToolbarHeaderCalendar/Toolbar";
import HeaderToolbar from "./ToolbarHeaderCalendar/HeaderToolbar";
import YearPicker from "./ToolbarHeaderCalendar/YearPicker";
import YearPickerItem from "./ToolbarHeaderCalendar/YearPickerItem";
import MonthPicker from "./ToolbarHeaderCalendar/MonthPicker";
import ToggleZoom from "./ToolbarHeaderCalendar/ToggleZoom";
import ButtonToggle from "./ToolbarHeaderCalendar/ButtonToggle";
import TextButtonToggle from "./ToolbarHeaderCalendar/TextButtonToggle";
import BarToggle from "./ToolbarHeaderCalendar/BarToggle";
import Bar from "./ToolbarHeaderCalendar/Bar";
import Ball from "./ToolbarHeaderCalendar/Ball";

export default function ToolbarCalendar({...props}) {
  const [year, setYear] = useState(2019);
  const [month, setMonth] = useState(0);
  const allYears = [...Array(MAX_OFFSET_YEAR).keys()];
  const listMonths = [...Array(NUMBERS_OF_MONTHS).keys()].map(m => {
    return (
      <MonthPickerItem
        key={m}
        value={m}
        onClick={evt => {
          changeMonth(Number(evt.target.value));
        }}
      >
        <MonthPickerItemText
          key={m}
          selected={m === month}
          onClick={e => {
            changeMonth(m);
            e.stopPropagation();
          }}
        >
          {moment()
            .month(m)
            .format("MMM")}
        </MonthPickerItemText>
      </MonthPickerItem>
    );
  });
  const [isZoomed, setIsZoomed] = useState(false);
  const changeMonth = m => {
    console.log("Name la:", m);
    setMonth(m);
  };
  return (
    <Toolbar>
      <HeaderToolbar>Calendar</HeaderToolbar>
      <YearPicker value={year} onChange={evt => setYear(evt.target.value)}>
        {allYears.map(x => {
          return (
            <YearPickerItem key={x} value={x}>
              {x}
            </YearPickerItem>
          );
        })}
      </YearPicker>
      <MonthPicker>{listMonths}</MonthPicker>
      <ToggleZoom>
        <ButtonToggle
          onClick={() => {
            console.log("Da nhan giam");
            setIsZoomed(isZoomed ? !isZoomed : isZoomed);
          }}
        >
          <TextButtonToggle>
            <FaMinus></FaMinus>
          </TextButtonToggle>
        </ButtonToggle>
        <BarToggle>
          <Bar></Bar>
          <Ball isZoomed={isZoomed}></Ball>
        </BarToggle>

        <ButtonToggle
          onClick={() => {
            console.log("Da nhan tang");

            setIsZoomed(isZoomed ? isZoomed : !isZoomed);
          }}
        >
          <TextButtonToggle>
            <FaPlus></FaPlus>
          </TextButtonToggle>
        </ButtonToggle>
      </ToggleZoom>
    </Toolbar>
  );
}

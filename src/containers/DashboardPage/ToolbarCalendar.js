import React, { useState } from 'react';
import { MAX_OFFSET_YEAR, NUMBERS_OF_MONTHS } from '../App/constant';
import moment from 'moment';
import { FaMinus, FaPlus } from 'react-icons/fa';
import MonthPickerItem from './ToolbarCalendarItem/MonthPickerItem';
import MonthPickerItemText from './ToolbarCalendarItem/MonthPickerItemText';
import Toolbar from './ToolbarCalendarItem/Toolbar';
import HeaderToolbar from './ToolbarCalendarItem/HeaderToolbar';
import YearPicker from './ToolbarCalendarItem/YearPicker';
import YearPickerItem from './ToolbarCalendarItem/YearPickerItem';
import MonthPicker from './ToolbarCalendarItem/MonthPicker';
import ToggleZoom from './ToolbarCalendarItem/ToggleZoom';
import ButtonToggle from './ToolbarCalendarItem/ButtonToggle';
import TextButtonToggle from './ToolbarCalendarItem/TextButtonToggle';
import BarToggle from './ToolbarCalendarItem/BarToggle';
import Bar from './ToolbarCalendarItem/Bar';
import Ball from './ToolbarCalendarItem/Ball';

export default function ToolbarCalendar({ ...props }) {
  const [year, setYear] = useState(2019);
  const [month, setMonth] = useState(0);
  const allYears = [...Array(MAX_OFFSET_YEAR).keys()];
  const listMonths = [...Array(NUMBERS_OF_MONTHS).keys()].map(m => {
    return (
      <MonthPickerItem
        key={m}
        value={m}
        onClick={evt => {
          changeMonth(m);
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
            .format('MMM')}
        </MonthPickerItemText>
      </MonthPickerItem>
    );
  });
  const [isZoomed, setIsZoomed] = useState(false);
  const changeMonth = m => {
    if(typeof(m) === "number"){
      console.log('Name la:', m);
      setMonth(m);
    }
  };
  return (
    <Toolbar>
      <HeaderToolbar>Calendar</HeaderToolbar>
      <YearPicker
        value={year}
        onChange={evt => {
          if(typeof(evt.target.value) === "number"){
            setYear(evt.target.value);

          }
        }}
      >
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

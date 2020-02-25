<<<<<<< HEAD
import React from "react";
import ToolbarCalendar from "./ToolbarCalendar";

import TableCalendar from "../../components/TableCalendar";
=======
import React from 'react';
import moment from 'moment';

import ToolbarCalendar from './ToolbarCalendar';
import Header from '../../components/Header';
import TableCalendar from './TableCalendar';
>>>>>>> 009b25be33377ec40d99c977e6a7ec7896fa95eb

function DashboardPage() {
  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Header/>
      <ToolbarCalendar />
      <TableCalendar/>
=======
      <ToolbarCalendar />
      <TableCalendar />
>>>>>>> 2a772b1... Fix person sidebar and Structure Redux, Call API for resource
=======
      <ToolbarCalendar />
      <TableCalendar />
>>>>>>> 2cdbc787d54ed7f4e17c3fec34aca8c61d1e7a6d
=======
      <Header />
      <ToolbarCalendar />
      <TableCalendar
        endDay={moment('2020-02-03', 'YYYY-MM-DD')}
        startDay={moment('2019-12-30', 'YYYY-MM-DD')}
      />
>>>>>>> 009b25be33377ec40d99c977e6a7ec7896fa95eb
    </div>
  );
}

export default DashboardPage;

/** @format */

import { CalendarMode } from "antd/lib/calendar/generateCalendar";

import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
// import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// import "../../styles/calendar.scss";
import {
  MonthlyBody,
  MonthlyCalendar,
  MonthlyDay,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from "@zach.codes/react-calendar";
import { format, subHours, startOfMonth } from "date-fns";
import "@zach.codes/react-calendar/dist/calendar-tailwind.css";
interface calenderEvent {
  title: string;
  date: Date;
}
export const Calender = () => {
  let [currentMonth, setCurrentMonth] = useState<Date>(
    startOfMonth(new Date())
  );
  let eventArray: calenderEvent[] = [
    { title: "Call John", date: subHours(new Date(), 2) },
    { title: "Call John", date: subHours(new Date(), 1) },
    { title: "Meeting with Bob", date: new Date() },
  ];
  return (
    <>
      <MonthlyCalendar
        currentMonth={currentMonth}
        onCurrentMonthChange={(date) => setCurrentMonth(date)}
      >
        <MonthlyNav />
        <MonthlyBody
          events={[
            { title: "Call John", date: subHours(new Date(), 2) },
            { title: "Call John", date: subHours(new Date(), 1) },
            { title: "Meeting with Bob", date: new Date() },
          ]}
        >
          <MonthlyDay
            renderDay={(data: any) =>
              data.map((item: any, index: any) => (
                <DefaultMonthlyEventItem
                  key={index}
                  title={item.title}
                  // Format the date here to be in the format you prefer
                  date={format(item.date, "k:mm")}
                />
              ))
            }
          />
        </MonthlyBody>
      </MonthlyCalendar>
    </>
  );
};
export default Calender;

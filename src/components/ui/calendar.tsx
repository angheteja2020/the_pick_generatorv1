import React from "react";

interface CalendarProps {
  children?: React.ReactNode;
}

export const Calendar: React.FC<CalendarProps> = ({ children }) => {
  return <div className="calendar-container">{children || "Calendar"}</div>;
};

export default Calendar;

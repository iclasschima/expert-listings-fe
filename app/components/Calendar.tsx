"use client";

import { useState } from "react";

interface CalendarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Calendar({ isOpen, onClose }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 10, 16)); // November 2023, 16th selected

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const selectedDay = currentDate.getDate();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const prevMonthDays: { day: number; month: number; year: number }[] = [];
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    prevMonthDays.push({
      day,
      month: month - 1 < 0 ? 11 : month - 1,
      year: month - 1 < 0 ? year - 1 : year,
    });
  }

  const currentMonthDays: number[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    currentMonthDays.push(i);
  }

  const daysToShow = 42 - (prevMonthDays.length + currentMonthDays.length);
  const nextMonthDays: { day: number; month: number; year: number }[] = [];
  for (let i = 1; i <= daysToShow; i++) {
    nextMonthDays.push({
      day: i,
      month: month + 1 > 11 ? 0 : month + 1,
      year: month + 1 > 11 ? year + 1 : year,
    });
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthAbbreviations = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const dayNames = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate(new Date(year, month + (direction === "next" ? 1 : -1), 1));
  };

  const handleDateClick = (day: number) => {
    setCurrentDate(new Date(year, month, day));
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />
      <div className="fixed top-[75px] right-0 bottom-0 w-[400px] bg-[#0D0D0D] text-white z-50 shadow-2xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700/50">
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigateMonth("prev")}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <h2 className="text-base font-semibold">Calendar</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700/50">
            <button
              onClick={() => navigateMonth("prev")}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <h3 className="text-lg font-semibold">
              {monthNames[month]} {year}
            </h3>
            <button
              onClick={() => navigateMonth("next")}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            <div className="grid grid-cols-7 gap-2 mb-4">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-medium text-gray-400 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {prevMonthDays.map(({ day, month: prevMonth }) => {
                const isFirstDay =
                  prevMonthDays[prevMonthDays.length - 1].day === day;
                return (
                  <div
                    key={`prev-${day}`}
                    className="h-16 flex flex-col items-center justify-center text-sm text-gray-500"
                  >
                    {isFirstDay && (
                      <span className="text-[10px] text-gray-500 mb-0.5 font-medium">
                        {monthAbbreviations[prevMonth]}
                      </span>
                    )}
                    <span>{day}</span>
                  </div>
                );
              })}

              {currentMonthDays.map((day) => {
                const isSelected = day === selectedDay;
                const isFirstDay = day === 1;
                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`h-16 flex flex-col items-center justify-center text-sm rounded-lg transition-colors ${
                      isSelected
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    {isFirstDay && (
                      <span
                        className={`text-[10px] mb-0.5 font-medium ${
                          isSelected ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {monthAbbreviations[month]}
                      </span>
                    )}
                    <span>{day}</span>
                  </button>
                );
              })}

              {nextMonthDays.map(({ day, month: nextMonth }) => {
                const isFirstDay = nextMonthDays[0].day === day;
                return (
                  <div
                    key={`next-${day}`}
                    className="h-16 flex flex-col items-center justify-center text-sm text-gray-500"
                  >
                    {isFirstDay && (
                      <span className="text-[10px] text-gray-500 mb-0.5 font-medium">
                        {monthAbbreviations[nextMonth]}
                      </span>
                    )}
                    <span>{day}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

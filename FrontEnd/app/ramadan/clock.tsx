"use client";
import React, { useState, useEffect } from "react";

export default function ClockWidget() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <time
        suppressHydrationWarning
        className="font-extrabold text-[3rem] text-blue-700 font-mono"
      >
        {new Intl.DateTimeFormat("id-ID", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZone: "Asia/Jakarta",
          hour12: false,
        }).format(date)}
      </time>
    </div>
  );
}

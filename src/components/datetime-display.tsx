import React from "react";

export const DateTimeDisplay = ({
  value,
  type,
  isDanger,
}: {
  value: number;
  type: string;
  isDanger: boolean;
}) => {
  return (
    <div
      className={
        isDanger
          ? "py-0 px-3 flex flex-col items-center justify-center leading-5 text-red-400"
          : "py-0 px-3 flex flex-col items-center justify-center leading-5"
      }
    >
      <p className="m-0">{value}</p>
      <span className="uppercase text-sm leading-none">{type}</span>
    </div>
  );
};

export const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <div className="lg:p-2">
      <span className="flex flex-row justify-center items-center font-semibold text-2xl lg:p-2 rounded-xl leading-7">
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </span>
    </div>
  );
};

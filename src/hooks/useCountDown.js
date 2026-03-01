import { useEffect, useState } from "react";

const useCountDown = (date) => {

    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

  const countdown = () => {
    try {
      const countDate = new Date(date).getTime();
      const now = new Date().getTime();

      console.log(countDate);
      console.log(now);

      if (isNaN(countDate) || isNaN(now)) return;

      const interval = countDate - now;

      const secondMs = 1000;
      const minuteMs = secondMs * 60;
      const hourMs = minuteMs * 60;
      const dayMs = hourMs * 24;

      const dayNumber = Math.floor(interval / dayMs);
      const hourNumber = Math.floor((interval % dayMs) / hourMs);
      const minuteNumber = Math.floor((interval % hourMs) / minuteMs);
      const secondNumber = Math.floor((interval % minuteMs) / secondMs);

      setDay(dayNumber);
      setHour(hourNumber);
      setMinute(minuteNumber);
      setSecond(secondNumber);
    } catch (err) {
      console.error("Error formatting date:", err);
      return null;
    }
  };

useEffect(() => {
    const id = setInterval(countdown, 1000);
    return () => clearInterval(id);
  }, [countdown]);

  return [day, hour, minute, second];
};

export default useCountDown;
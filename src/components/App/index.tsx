import { useState, useEffect } from "react";
import { TimeType } from "../../types";
import * as S from "./styles";
import { Time } from "../Time";

export const App = (): JSX.Element => {
  const [hours, setHours] = useState<TimeType>(0);
  const [minutes, setMinutes] = useState<TimeType>(0);
  const [seconds, setSeconds] = useState<TimeType>(0);

  const formatTime = (time: TimeType): TimeType =>
    time < 10 ? "0" + time : time;

  useEffect((): void => {
    setInterval((): void => {
      const date: Date = new Date();

      setHours(formatTime(date.getHours()));
      setMinutes(formatTime(date.getMinutes()));
      setSeconds(formatTime(date.getSeconds()));
    });
  });

  return (
    <S.App>
      <Time count={hours} info="Horas" />
      <Time count={minutes} info="Minutos" />
      <Time count={seconds} info="Segundos" />
    </S.App>
  );
};

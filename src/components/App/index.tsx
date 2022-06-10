import * as S from "./styles";
import { Time } from "../Time";

export const App = (): JSX.Element => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  setInterval(() => {
    const currentDate = new Date();

    hours = currentDate.getHours();
    minutes = currentDate.getMinutes();
    seconds = currentDate.getSeconds();

    console.log(seconds);
  }, 1000);

  return (
    <S.App>
      <Time count={hours} info="Horas" />
      <Time count={minutes} info="Minutos" />
      <Time count={seconds} info="Segundos" />
    </S.App>
  );
};

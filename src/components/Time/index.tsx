import { TimeProps } from "../../interfaces";
import * as S from "./styles";

export const Time = (props: TimeProps): JSX.Element => {
  return (
    <S.Time>
      <S.Count>{props.count}</S.Count>
      <S.Info>{props.info}</S.Info>
    </S.Time>
  );
};

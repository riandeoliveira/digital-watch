import styled from "styled-components";
import colors from "../../themes/colors";

export const Time = styled.div`
  align-items: center;
  background: ${colors.neutral};
  border-radius: 7px;
  box-shadow: 5px 5px 15px ${colors.neutral_dark};
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
  height: 170px;
  justify-content: center;
  letter-spacing: 3px;
  width: 150px;
`;

export const Count = styled.span`
  font-size: 60px;
  font-weight: bolder;
`;

export const Info = styled.span`
  font-size: 10px;
`;

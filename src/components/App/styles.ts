import styled from "styled-components";
import colors from "../../themes/colors";
import device from "media-query-sizes";

export const App = styled.div`
  align-items: center;
  background-color: transparent;
  border-radius: 3px;
  box-shadow: 0 8px 10px ${colors.neutral_darkness};
  display: flex;
  display: flex;
  gap: 40px;
  justify-content: space-around;
  margin: 20px;
  max-width: 550px;
  min-height: 200px;
  padding: 20px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

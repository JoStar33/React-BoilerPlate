import styled from "styled-components";
import { Button } from "../../../../styles/mixins.style";

export const ShareButtonContainer = styled(Button)`
  border-radius: 7px;
  border: 0.2vw solid black;
  width: 3.4vw; 
  height: 3.4vw;
  padding: 0.2rem;
  svg {
    width: 3vw;
    height: 3vw;
  }
`;
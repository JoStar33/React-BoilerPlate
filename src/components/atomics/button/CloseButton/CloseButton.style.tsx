import styled from "styled-components";
import { ButtonCenter } from "../../../../styles/mixins.style";

export const CloseButtonContainer = styled(ButtonCenter)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    min-width: 1rem;
    min-height: 1rem;
    width: 2vw;
    height: 2vw;
  }
`;
import styled from "styled-components";
import { Button } from "../../../../styles/mixins.style";

export const CommonButton = styled(Button)`
  background-color: white;
  transition: all 0.2s;
  &:hover {
    background-color: #E7E7E8;
  }
`;
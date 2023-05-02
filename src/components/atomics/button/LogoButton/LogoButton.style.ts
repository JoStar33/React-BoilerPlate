import styled from "styled-components";
import { Button } from "../../../../styles/mixins.style";

export const LogoButtonContainer = styled(Button)`
  min-width: 9rem;
  img {
    object-fit: cover;
    width: 2rem;
    height: 2rem;
    border-radius: 100px;
  }
`;
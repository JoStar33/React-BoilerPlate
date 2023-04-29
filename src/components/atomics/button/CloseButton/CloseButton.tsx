import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CloseButtonContainer } from './CloseButton.style';

interface Props {
  close: () => void;
}

const CloseButton = ({close}: Props) => {
  return (
    <CloseButtonContainer>
      <AiOutlineCloseCircle onClick={close} color='black'/>
    </CloseButtonContainer>
  );
};

export default CloseButton;
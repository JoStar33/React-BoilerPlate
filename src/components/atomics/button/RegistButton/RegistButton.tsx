import { BsPlusCircle } from 'react-icons/bs';
import { RegistButtonContainer } from './RegistButton.style';

interface Props {
  text: string;
  regist: () => void;
} 

const RegistButton = ({text, regist}: Props) => {
  return (
    <RegistButtonContainer onClick={regist}>
      <BsPlusCircle/>
      {
        text
      }
    </RegistButtonContainer>
  );
};

export default RegistButton;
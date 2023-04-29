import { AiOutlineArrowUp } from 'react-icons/ai';
import { CounterControlButton } from '../../../../styles/mixins.style';

interface Props {
  plusController: () => void;
}

const PlusButton = ({plusController}: Props) => {
  return (
    <CounterControlButton onClick={plusController}>
      <AiOutlineArrowUp/>
    </CounterControlButton>
  );
};

export default PlusButton;
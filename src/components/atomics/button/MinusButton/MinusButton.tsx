import { AiOutlineArrowDown } from "react-icons/ai";
import { CounterControlButton } from "../../../../styles/mixins.style";

interface Props {
  minusController: () => void;
}

const MinusButton = ({ minusController }: Props) => {
  return (
    <CounterControlButton onClick={minusController}>
      <AiOutlineArrowDown />
    </CounterControlButton>
  );
};

export default MinusButton;

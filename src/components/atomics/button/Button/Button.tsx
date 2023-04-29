import { CommonButton } from "./Button.style";

interface Props {
  label: string;
  clickEvent: () => void;
}

const Button = ({label, clickEvent}: Props) => {
  return (
    <CommonButton onClick={clickEvent}>
      {
        label
      }
    </CommonButton>
  );
};

export default Button;
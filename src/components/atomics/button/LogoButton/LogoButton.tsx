import { LogoButtonContainer } from './LogoButton.style';

interface Props {
  handleClick: () => void;
  label: string;
  logo: string;
}

const LogoButton = ({logo, label, handleClick}: Props) => {
  return (
    <LogoButtonContainer onClick={handleClick}>
      <img src={logo} alt={''}/>
      {
        label
      }
    </LogoButtonContainer>
  );
};

export default LogoButton;
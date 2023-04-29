import { MenuButtonContainer } from "./MenuButton.style";

interface Props {
  icon: React.ReactNode;
  label: string;
}

const MenuButton = ({ icon, label }: Props) => {
  return (
    <MenuButtonContainer>
      {icon}
      {label}
    </MenuButtonContainer>
  );
};

export default MenuButton;

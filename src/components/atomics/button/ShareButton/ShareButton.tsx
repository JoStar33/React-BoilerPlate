import { CiShare1 } from 'react-icons/ci';
import { ShareButtonContainer } from './ShareButton.style';

const ShareButton = () => {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  }
  return (
    <ShareButtonContainer onClick={handleShare}>
      <CiShare1/>
    </ShareButtonContainer>
  );
};

export default ShareButton;
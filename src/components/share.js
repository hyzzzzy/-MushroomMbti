import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from 'styled-components';
import { ReactComponent as Url } from '../asset/Url.svg';

function Share() {
  const currentUrl = document.location.href;
  const description = '내 버섯 MBTI는?\n';
  return (
    <ShareWrapper>
      <CopyToClipboard text={currentUrl}>
					<URLShareButton>
            <Url/>
          </URLShareButton>
			</CopyToClipboard>
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton url={currentUrl} title={description}>
        <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
      </TwitterShareButton>
      <LineShareButton url={currentUrl} title={description}>
        <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
      </LineShareButton>
    </ShareWrapper>
  )
}

const URLShareButton = styled.button`
	width: 48px;
	height: 48px;
	color: white;
	border-radius: 24px;
	border: 0px;
	cursor: pointer;
	background-color: grey;
  padding-top: 4px;
`;

const ShareWrapper = styled.div`
  display: flex;
  transition: all 0.2s;
  & > * {
    margin-right: 10px;
  }
  & > *:hover {
    opacity: 0.7;
  }
`;

export default Share;
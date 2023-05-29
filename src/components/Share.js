import { useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from 'styled-components';
import { ReactComponent as Url } from '../assets/Url.svg';
import { useScript } from "./Hook.js";
import kakaoLogo from "../assets/Kakao.png";

function Share({ mbti, myMurshroom, imgUrl }) {
  const home = process.env.REACT_APP_PUBLIC_URL;
  const description = `당신은 ${myMurshroom}(${mbti}) 입니다.\n버섯🍄 MBTI 테스트를 진행하고 공유해보세요!`;

  // kakao SDK import하기
	const status = useScript(process.env.REACT_APP_KAKAO_SDK_URL);

  const handleKakaoButton = () => {
    if (window.Kakao.Link) {
      window.Kakao.Link.sendDefault({
          objectType: 'feed',
          content: {
            title: `당신은 ${myMurshroom}(${mbti}) 입니다.`,
            description: '재미로 보는 버섯 MBTI 테스트',
            imageUrl: process.env.REACT_APP_PUBLIC_URL + imgUrl,
            link: {
              mobileWebUrl: `${process.env.REACT_APP_KAKAO_SDK_URL}`,
              webUrl: `${process.env.REACT_APP_KAKAO_SDK_URL}`,
            },
          },
          buttons: [
            {
              title: '나도 하러 가기',
              link: {
                mobileWebUrl: `${process.env.REACT_APP_KAKAO_SDK_URL}`,
                webUrl: `${process.env.REACT_APP_KAKAO_SDK_URL}`,
              },
            },
          ],
      });
    }
  }
	
	useEffect(() => {
		if (status === "ready" && window.Kakao) {
			if (!window.Kakao.isInitialized()) {
				window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
			}
		}
	}, [status]);	

  return (
    <ShareWrapper>
      <CopyToClipboard text={home}>
        <URLShareButton title="링크 복사" onClick={() => alert('링크가 복사되었습니다')}>
          <Url/>
        </URLShareButton>
			</CopyToClipboard>
      <FacebookShareButton url={home}>
        <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton url={home} title={description}>
        <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
      </TwitterShareButton>
      <KakaoShareButton onClick={handleKakaoButton}>
        <KakaoIcon src={kakaoLogo}></KakaoIcon>
      </KakaoShareButton>
    </ShareWrapper>
  )
}

const ShareWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  & > * {
    margin-right: 10px;
    transition: all 0.2s;
    cursor: pointer;
  }
  & > *:hover {
    opacity: 0.7;
  }
`;

const URLShareButton = styled.button`
	width: 48px;
	height: 48px;
	color: white;
	border-radius: 24px;
	border: 0px;
	background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KakaoShareButton = styled.div`
	cursor: pointer;
`;

const KakaoIcon = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 24px;
`;

export default Share;
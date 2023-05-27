import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import Share from './Share.js';
import MBTI from '../components/data/MBTI.js';
import { AdfitBannerAd } from './AdFitBanner.js';
import styled from 'styled-components';
import * as Layout from './Layout.js';

function Resultpage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigate("/result?mbti=" + props.MBTI);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [props.MBTI, navigate]);

  if (isLoading) {
    return (
      <Layout.MainContainer>
        <div>
          <LoadingTitle>당신의 &#x1F344;을 찾고 있어요</LoadingTitle>
          <Layout.SubTitle>&#x1F941;두구두구두구&#x1F941;</Layout.SubTitle>
          <SpinnerWrapper>
            <SyncLoader
              color="#F48A72"
              height={15}
              width={5}
              radius={2}
              margin={2}
            />
          </SpinnerWrapper>
        </div>
      </Layout.MainContainer>
    );
  }

  const contents = MBTI[props.MBTI].content.split('.');

  return (
    <Layout.MainContainer>
      <Layout.Title>{MBTI[props.MBTI].title}</Layout.Title>
      <Layout.SubTitle>{props.MBTI}</Layout.SubTitle>
      <Layout.SubTitle>{MBTI[props.MBTI].subtitle}</Layout.SubTitle>
      <Layout.Image src='/images/sample.png' alt={props.MBTI}></Layout.Image>
      <div>
        <Ul>
          {contents.map((content, index) => (
            <Li key={index}>{content}</Li>
          ))}
        </Ul>
      </div>
      <ButtonContainer>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          돌아가기
        </Button>
        <Button
          onClick={() => {
            navigate("/total");
          }}
        >
          전체 버섯 보기
        </Button>
      </ButtonContainer>
      <Share mbti={props.MBTI} myMurshroom={MBTI[props.MBTI].title} imgUrl={MBTI[props.MBTI].img}></Share>
      <AdfitBannerAd></AdfitBannerAd>
    </Layout.MainContainer>
  );
}

const LoadingTitle = styled(Layout.Title)`
  padding-top: 200px;

  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 500px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Ul = styled.ul`
  margin-top: 10px;
`;
  
const Li = styled.li`
  font-size: 1.2rem;
  width: 600px;

  @media (max-width: 700px) {
    width: 90%;
    height: auto;
    margin: 20px auto;
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    height: auto;
  }
`;

const Button = styled(Layout.Button)`
  margin: 20px 20px;

  @media (max-width: 700px) {
    margin-top: 10px;
    padding: 0 5px;

    &:last-child {
      margin-top: 10px;
    }
  }
`;

export default Resultpage;

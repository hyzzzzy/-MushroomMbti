import React from 'react';
import { useNavigate } from "react-router-dom";
import MBTI from '/components/data/MBTI';
import { AdfitBannerAd } from '/components/AdFitBanner';
import styled from 'styled-components';
import * as Layout from './Layout';

function Totalpage() {
  const navigate = useNavigate();
  return (
    <Layout.MainContainer>
      <Layout.Title>모든 버섯 MBTI</Layout.Title>
      <MBTIContainer>
        {Object.keys(MBTI).map((key) => (
          <MBTIWrapper key={key}>
            <Layout.SubTitle>{MBTI[key].title}</Layout.SubTitle>
            <Layout.SubTitle>{key}</Layout.SubTitle>
            <Image src={MBTI[key].img} alt={key}></Image>
          </MBTIWrapper>
        ))}
      </MBTIContainer>
      <Layout.Button
        onClick={() => {
          navigate("/");
        }}
      >
        돌아가기
      </Layout.Button>
      <AdfitBannerAd></AdfitBannerAd>
    </Layout.MainContainer>
  );
}

const MBTIContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MBTIWrapper = styled.div`
  width: 270px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;

  @media (max-width: 700px) {
    width: 90%;
    max-width: 200px;
    height: auto;
  }
`;

export default Totalpage;

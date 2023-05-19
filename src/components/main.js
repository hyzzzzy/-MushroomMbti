import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

function Main(props) {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <Title>당신은 어떤 버섯일까요?</Title>
      <SubTitle>&#x1F344;버섯 MBTI 테스트&#x1F344;</SubTitle>
      <div></div>
      <Button
        onClick={() => {
          navigate("/test");
          props.setEI(0);
          props.setSN(0);
          props.setTF(0);
          props.setJP(0);
        }}
      >
        시작하기
      </Button>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px auto;

  @media (max-width: 700px) {
    width: 90%;
    height: auto;
    margin: 40px auto;
  }
`;

const Title = styled.h1`
  padding-top: 20px;
  font-size: 2.5rem;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 1.6rem;
`;

const Button = styled.button`
  width: 16rem;
  height: 5rem;
  border: none;
  border-radius: 100px;
  font-size: 30px;
  margin-top: 400px;
  cursor: pointer;
  background-color: #F48A72;

  transition: all 0.2s;
  &:hover {
    background-color: #f5b3a4;
  }
`;

export default Main;

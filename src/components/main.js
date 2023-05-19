import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

function Main(props) {
  let navigate = useNavigate();
  return (
    <MainContainer>
      <Title>당신은 어떤 버섯일까요?</Title>
      <SubTitle>버섯 MBTI 테스트</SubTitle>
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
        테스트 시작하기
      </Button>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  width: 700px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const SubTitle = styled.div`
  font-size: 24px;
`;

const Button = styled.button`
  width: 400px;
  height: 100px;
  border: none;
  border-radius: 100px;
  font-size: 30px;
  margin-top: 300px;
  cursor: pointer;
  background-color: #F48A72;

  transition: all 0.2s;
  &:hover {
    background-color: #f5b3a4;
  }
`;

export default Main;

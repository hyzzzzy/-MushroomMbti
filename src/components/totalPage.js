import React from 'react';
import { useNavigate } from "react-router-dom";
import MBTI from './common/mbti';
import styled from 'styled-components';

function Totalpage() {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <Title>모든 버섯 MBTI</Title>
      <MBTIContainer>
        {Object.keys(MBTI).map((key) => (
          <MBTIWrapper key={key}>
            <SubTitle>{MBTI[key].title}</SubTitle>
            <SubTitle>{key}</SubTitle>
          </MBTIWrapper>
        ))}
      </MBTIContainer>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        돌아가기
      </Button>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 800px;
  height: max-height;
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

const MBTIContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MBTIWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

const Title = styled.h1`
  padding-top: 20px;
  font-size: 40px;
`;

const SubTitle = styled.div`
  font-size: 24px;
  text-align: center;
`;


const Ul = styled.ul`
  margin-top: 300px;
`;
  
const Li = styled.li`
  font-size: 22px;
`;

const Button = styled.button`
  width: 300px;
  height: 80px;
  border: none;
  border-radius: 100px;
  font-size: 26px;
  cursor: pointer;
  background-color: #F48A72;
  margin: 30px 0;
  transition: all 0.2s;
  &:hover {
    background-color: #FFCDB6;
  }
`;

export default Totalpage;

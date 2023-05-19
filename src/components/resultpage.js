import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import MBTI from './common/mbti';
import styled from 'styled-components';
import Loader from "react-loader-spinner";

function Resultpage(props) {
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigate("/result?mbti=" + props.MBTI);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [props.MBTI, navigate]);

  if (isLoading) {
    return (
      <MainContainer>
        <div>
          <Title>결과를 준비 중입니다...두구두구두구</Title>
            {/* <Loader type="Puff" color="#00BFFF" height={100} width={100} /> */}
        </div>
      </MainContainer>
    );
  }

  const contents = MBTI[props.MBTI].content.split('.');

  return (
    <MainContainer>
      <Title>{MBTI[props.MBTI].title}</Title>
      <SubTitle>{props.MBTI}</SubTitle>
      <SubTitle>{MBTI[props.MBTI].subtitle}</SubTitle>
      <div>
        <Ul>
          {contents.map((content, index) => (
            <Li key={index}>{content}</Li>
          ))}
        </Ul>
      </div>
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
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const SubTitle = styled.div`
  font-size: 24px;
`;

const Ul = styled.ul`
  margin-top: 300px;
`;
  
const Li = styled.li`
  font-size: 22px;
`;

const Content = styled.p`
  white-space: pre-line;
`;

const Button = styled.button`
  width: 150px;
  height: 80px;
  border: none;
  border-radius: 100px;
  font-size: 26px;
  cursor: pointer;
  background-color: #F48A72;
  margin-top: 30px;
  transition: all 0.2s;
  &:hover {
    background-color: #FFCDB6;
  }
`;

export default Resultpage;

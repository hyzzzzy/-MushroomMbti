import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import MBTI from './common/mbti';
import styled from 'styled-components';
import SyncLoader from "react-spinners/SyncLoader";

function Resultpage(props) {
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();

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
      <MainContainer>
        <div>
          <LoadingTitle>당신의 &#x1F344;을 찾고 있어요</LoadingTitle>
          <SubTitle>&#x1F941;두구두구두구&#x1F941;</SubTitle>
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
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  border: 4px solid #FFCDB6;
  border-radius: 30px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  padding-top: 20px;
  font-size: 40px;
`;

const LoadingTitle = styled(Title)`
  padding-top: 200px;
`;

const SubTitle = styled.div`
  font-size: 24px;
  text-align: center;
`;

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Ul = styled.ul`
  margin-top: 300px;
`;
  
const Li = styled.li`
  font-size: 22px;
  word-break: keep-all;
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

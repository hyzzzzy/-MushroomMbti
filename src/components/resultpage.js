import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import MBTI from './common/mbti';
import styled from 'styled-components';
import SyncLoader from "react-spinners/SyncLoader";
import Share from './share';

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
      <Image src='/images/sample.png' alt={props.MBTI}></Image>
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
        <TotalButton
          onClick={() => {
            navigate("/total");
          }}
        >
          다른 버섯들 보러가기
        </TotalButton>
      </ButtonContainer>
      <Share mbti={props.MBTI} myMurshroom={MBTI[props.MBTI].title} imgUrl={MBTI[props.MBTI].img}></Share>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 800px;
  min-height: 750px;
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

const Title = styled.h1`
  padding-top: 20px;
  font-size: 2.5rem;
  text-align: center;
`;

const LoadingTitle = styled(Title)`
  padding-top: 200px;

  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;

const SubTitle = styled.div`
  font-size: 24px;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 1.4rem;
  }
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 500px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  margin-top: 10px;
`;

const Ul = styled.ul`
  margin-top: 10px;
`;
  
const Li = styled.li`
  font-size: 22px;
  width: 600px;

  @media (max-width: 700px) {
    width: 90%;
    height: auto;
    margin: 40px auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    height: auto;
    margin: 20px auto;
  }
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

const TotalButton = styled(Button)`
  margin-left: 20px;

  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

export default Resultpage;

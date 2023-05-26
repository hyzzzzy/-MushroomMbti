import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TEST from './common/test';
import styled from 'styled-components';

function Testpage(props) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const [data] = useState(TEST);

  const progressBarWidth = `${(num / 12) * 20}rem`;

  return (
    <MainContainer>
      <SubTitle>Q{num}.</SubTitle>
      <CountContainer>
        <ProgressBar>
          <CountingBar style={ {width: progressBarWidth} }></CountingBar>
        </ProgressBar>
      </CountContainer>
      <Title>{data[num].ques}</Title>
      <Button
        onClick={() => {
          setNum((num) => num + 1);
          if (num <= 3) {
            props.setEI(props.EI + 1);
          } else if (num >= 4 && num <= 6) {
            props.setSN(props.SN + 1);
          } else if (num >= 7 && num <= 9) {
            props.setTF(props.TF + 1);
          } else if (num >= 10 && num <= 12) {
            props.setJP(props.JP + 1);
          }
          if (num === 12) {
            navigate("/result");
          }
        }}
      >
        {data[num].ans1}
      </Button>
      <Button
        onClick={() => {
          setNum((num) => num + 1);
          if (num <= 3) {
            props.setEI(props.EI - 1);
          } else if (num >= 4 && num <= 6) {
            props.setSN(props.SN - 1);
          } else if (num >= 7 && num <= 9) {
            props.setTF(props.TF - 1);
          } else if (num >= 10 && num <= 12) {
            props.setJP(props.JP - 1);
          }
          if (num === 12) {
            navigate("/result");
          }
        }}
      >
        {data[num].ans2}
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
  margin: 80px auto;

  @media (max-width: 700px) {
    width: 90%;
    height: auto;
    margin: 40px auto;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  width: 610px;
  height: 180px;

  @media (max-width: 700px) {
    font-size: 1.4rem;
    width: 80%;
    min-width: 300px;
    height: 100px;
  }
`;

const SubTitle = styled.div`
  padding-top: 30px;
  font-size: 24px;
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100px;
`;

const ProgressBar = styled.div`
  width: 20rem;
  height: 10px;
  border: 1px solid #d8483d;
  border-radius: 100px; 

  position: relative;
`;

const CountingBar = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #d8483d;
  border-radius: 100px; 

  transition: all 0.5s;
`;

const Button = styled.button`
  width: 540px;
  height: 120px;
  background-color: #FFFFFF;
  border: 2px solid #F48A72;
  border-radius: 10px;
  margin-top: 30px;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s;
    
  &:active {
    background-color: #FFCDB6;
  }

  @media (max-width: 700px) {
    width: 20rem;
    font-size: 1.2rem;
  }
`;

export default Testpage;

import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TEST from '/components/data/TEST';
import styled from 'styled-components';
import * as Layout from './Layout';

function Testpage(props) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const [data] = useState(TEST);

  return (
    <Layout.MainContainer>
      <Layout.SubTitle>Q{num}.</Layout.SubTitle>
      <CountContainer>
        <ProgressBar>
          <CountingBar num={num}></CountingBar>
        </ProgressBar>
      </CountContainer>
      <Question>{data[num].ques}</Question>
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
    </Layout.MainContainer>
  );
}

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
  width: ${props => (props.num / 12) * 20}rem;
  height: 10px;
  background-color: #d8483d;
  border-radius: 100px; 

  transition: all 0.5s;
`;

const Question = styled(Layout.SubTitle)`
  height: 100px;
`;

const Button = styled.button`
  width: 330px;
  height: 90px;
  background-color: #FFFFFF;
  border: 2px solid #F48A72;
  border-radius: 10px;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:last-child {
    margin-top: 30px;
  }
    
  &:active {
    background-color: #FFCDB6;
  }

  @media (max-width: 700px) {
    width: 20rem;
  }
`;

export default Testpage;

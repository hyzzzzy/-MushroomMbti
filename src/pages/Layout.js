import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;

  @media (max-width: 700px) {
    width: 90%;
    height: auto;
  }
`;

export const Title = styled.h1`
  padding-top: 20px;
  font-size: 2rem;
  text-align: center;
  max-width: 400px;
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.div`
  font-size: 1.2rem;
  text-align: center;
  max-width: 400px;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 10px;

  @media (max-width: 700px) {
    width: 90%;
    max-width: 300px;
    height: auto;
  }
`;

export const Button = styled.button`
  width: 12rem;
  height: 3rem;
  border: none;
  border-radius: 100px;
  font-size: 1.4rem;
  line-height: 3rem;
  margin-top: 10px;
  cursor: pointer;
  background-color: #F48A72;

  transition: all 0.2s;
  &:hover {
    background-color: #f5b3a4;
  }

  @media (max-width: 700px) {
    width: 10rem;
    height: 4rem;
    font-size: 1.2rem;
  }
`;
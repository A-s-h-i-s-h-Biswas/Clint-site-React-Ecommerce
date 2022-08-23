import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container=styled.div`

  display:flex;
  align-items:center;
  justify-content:center;
`;
const Wrapper=styled.div`
  margin-top:30vh;
  width:300px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
const Title=styled.h3`
margin-top:5px;
  color:green;
  font-weight:bolt;
`;
const Img=styled.img`
  width:100px;
  height:100px;
  border-radius:50%;
  border:2px solid skyblue;
`;
const Button=styled.button`
  width:100px;
  height:45px;
  background-color:skyblue;
  border-radius:5px;
  color:white;
  font-weight:bolt;
  margin-top:10px;
  cursor:pointer;
`;

const Succes=()=> {
  return (
    <Container >
      <Wrapper>
         <Img src="https://avatars.githubusercontent.com/u/107340046?v=4"/>
         <Title>Payment Successfull !</Title>
         <Link to="/"><Button>Back to Home</Button></Link>
      </Wrapper>
    </Container>
  )
}

export default Succes;
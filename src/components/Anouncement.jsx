import React from 'react'
import styled from 'styled-components';
import { Mobile } from '../pages/Responsive';
const Container=styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:bolt;
    ${Mobile({
      width:"100vw",
      textAlign:"center",
      fontSize:"10px"
    })}
`;
const Anouncement = () => {
  return (
    <Container>
        Super Deal !   Don't miss. Free delevary with shopping over Rs.499 only.
    </Container>
  )
}

export default Anouncement;
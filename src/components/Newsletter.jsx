import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import React from 'react'
import { Mobile } from '../pages/Responsive';

const Container=styled.div`
    height:60vh;
    background-color:#665349;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:98.7%;
    margin-left:18px;
    ${Mobile({
        width:"100%",
        marginLeft:"0",
        height:"200px"
    })}
`;
const InputContainer=styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1ps solid lightgray;
    margin-top:25px;
    ${Mobile({
        margin:"10px 0",
        height:"30px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    })}
`;
const Title=styled.h1`
    font-size:48px;
    font-weight:bolt;
    letter-spacing:2.5px;
    ${Mobile({
        fontSize:"25px",
        letterSpacing:"1.5"
    })}
`;
const Desc=styled.div`
    font-size:25px;
    letter-spacing:1.5px;
    ${Mobile({
        fontSize:"15px",
        letterSpacing:"1.1",
        padding:"15px"
    })}
`;
const Input=styled.input`
    border:none;
    flex:8;
    padding-left: 40%;
    ${Mobile({
        height:"30px"
    })}
    &:focus{
        outline:none;
    }
`;
const Button=styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
    cursor:pointer;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get latest notification abour your favourites products and don't miss out exciting offers.</Desc>
        <InputContainer>
            <Input placeholder='myemail@gmail.com'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}
export default Newsletter;

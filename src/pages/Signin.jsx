
import React, { useState } from 'react'
import styled from 'styled-components';
import { login } from '../redux/apiFetching';
import { Mobile } from './Responsive';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const Container=styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),url("https://cdn.pixabay.com/photo/2018/02/12/09/39/background-3147808_960_720.jpg");
    background-repeat:no-repeat;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
    overflow-y: hidden;
    ${Mobile({
        margin:"0",
        // height:"600px"
    })}
`;
const Form=styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:30%;
        height:70vh;
        background-color:black;
        display:flex;
        opacity:.6;
        border-radius:10px;
        ${Mobile({
            width:"80vw",
            height:"350px",
            margin:"0"
        })}
    
`;
const Input=styled.input`
        width:70%;
        margin-top:10px;
        padding:5px;
        ${Mobile({
            
        })}
`;
const Title=styled.h2`
    color:white;
    font-weight:100;
    margin-bottom:20px;
    ${Mobile({
        fontSize:"20px",
        margin:"0"
    })}
`;
const Txt=styled.p`
        width:80%;
        font-size:14px;
        font-weight:100;
        text-align:center;
        color:white;
        margin:10px 0;
        ${Mobile({
            fontSize:"10px"
        })}
`;
const Button=styled.button`
        background-color:white;
        width:90px;
        height:40px;
        margin-top:20px;
        border-radius:5px;
        cursor:pointer;
        transition:all .5s ease;
        &:hover{
            background-color:green;
            color:white;
            transform:scale(1.1);
        }
        &:disabled {
            color: green;
            cursor: not-allowed;
        }
`;
const Error = styled.span`
  color: red;
`;
const Signin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
  
    const handleLogin = (e) => {
      e.preventDefault();
      login(dispatch, { username, password});
    };
  return (
    <Container>
        <Form>
            <Title style={{fontFamily: 'Lobster', color:"#59A3C9",fontSize:"30px",fontWeight:"bolt"}}>NextFashions.</Title>
            <Title>Please Sign in here</Title>
            <Input placeholder='User Name' onChange={(e) => setUsername(e.target.value)}></Input>
            <Input placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)}></Input>
            <Txt>Don't have an account ? <Link to={"/register"} style={{textDecoration:"none"}}> Create Account.</Link></Txt>
            <Button onClick={handleLogin} disabled={isFetching}>Sign in</Button>
            {error && <Error> Opps! something went wrong.....</Error>}
        </Form>
    </Container>
  )
}

export default Signin;
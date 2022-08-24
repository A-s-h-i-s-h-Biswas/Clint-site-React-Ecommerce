
import React from 'react'
import styled from 'styled-components';
import { Mobile } from './Responsive';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { login, register } from '../redux/apiFetching';
import {useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';

const Container=styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),url("https://cdn.pixabay.com/photo/2016/07/08/08/59/background-1503863_960_720.png");
    background-size:cover;
    object-fit:cover;
    background-repeat:no-repeat;
    display:flex;
    align-items:center;
    justify-content:center;
    ${Mobile({
        margin:"0",
        // height:"100vh"
    })}
`;
const Form=styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:30%;
        height:80vh;
        background-color:black;
        display:flex;
        opacity:.6;
        border-radius:10px;
        ${Mobile({
            width:"80vw",
            height:"400px",
            margin:"0"
        })}
`;
const Input=styled.input`
        width:80%;
        margin-top:10px;
        padding:5px;
        ${Mobile({
            width:"80%",
            height:"20px",
            margin:"2px"
        })}
`;
const Title=styled.h2`
    color:white;
    font-weight:100;
    margin-bottom:10px;
    ${Mobile({
        fontSize:"20px",
        marginBottom:"0"

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
            fontSize:"12px"
        })}
`;
const Button=styled.button`
        background-color:white;
        width:120px;
        height:50px;
        margin-top:20px;
        border-radius:10px;
        cursor:pointer;
        transition:all .5s ease;
        &:hover{
            background-color:green;
            color:white;
            transform:scale(1.1);
        }
        ${Mobile({
           
            marginTop:"0"
        })}
`;
const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    // const { isFetching, error } = useSelector((state) => state.user);
    const handleRegister=(e)=>{
        e.preventDefault();
        register({ username, email, password});
        login(dispatch,{username,password});
    };
    const { isFetching, error } = useSelector((state) => state.user);
  return (
    <Container>
        <Form>
            <Title style={{fontFamily: 'Lobster', color:"#59A3C9",fontSize:"30px",fontWeight:"bolt"}}>NextFashions.</Title>
            <Title>Please Create an Account</Title>
            {/* <Input placeholder='First Name'></Input>
            <Input placeholder='Last Name'></Input> */}
            <Input placeholder='User Name' onChange={(e)=>setUsername(e.target.value)}></Input>
            <Input placeholder='Email id' onChange={(e)=>setEmail(e.target.value)}></Input>
            <Input placeholder='Password' type="password" onChange={(e)=>setPassword(e.target.value)}></Input>
            {/* <Input placeholder=' Conform Password'></Input> */}
            <Txt>Terms ans Condition: By creating an account you are aggreed with all the terms and conditions.</Txt>
            <Button onClick={handleRegister} >Register Now</Button>
            {/* {error ? <Txt>Opps! something went wrong.....</Txt> :<Navigate to="/nextfashions" />} */}
        </Form>
    </Container>
  )
}

export default Register;
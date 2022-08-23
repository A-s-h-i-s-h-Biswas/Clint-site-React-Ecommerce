import React from 'react'
import {ArrowLeft , ArrowRight} from '@material-ui/icons';
import styled from 'styled-components'
import { SlideItems } from '../pages/data';
import { useState } from 'react';
import { Mobile } from '../pages/Responsive';
import { Link } from 'react-router-dom';
const Container=styled.div`
    width:100%;
    height:70vh;
    display:flex;
    overflow:hidden;
    position:relative;
    ${Mobile({
        width:"100vw",
        height:"250px",
    })}
`;
const Arrow=styled.div`
    width:40px;
    height:40px;
    background-color:gray;
    color:white;
    border-radius:50%;
    opacity:.2;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props=> props.direction==="left" && "10px"};
    right:${props=> props.direction==="right" && "10px"};
    margin:auto;
    cursor:pointer;
    z-index:2;
    ${Mobile({
        width:"20px",
        height:"20px"
    })}
`;
const Wrapper=styled.div`
    height:100%;
    display:flex;
    
    // padding-top:10px;
    
    transform:translateX(${props=>props.slideIndx * (-100)}vw);
    transition: all 2s ease;
    ${Mobile({
        padding:"0"
    })}
`;
const Slide=styled.div`
    width:100vw;
    height:100%;
    display:flex;
    align-items:center;
    ${Mobile({
        justifyContent:"center",
        height:"250px"
    })}
`;
const ImgContainer=styled.div`
    flex:1;
    height:70vh;
    margin-top:35px;
    ${Mobile({
        height:"250px",
        padingTop:"30px",
        marginLeft:"0px"
    })}
`;
const Image=styled.img`
    height:90%;
    margin-left:180px;
    ${Mobile({
        marginLeft:"0",
        height:"200px",
        objectFit:"cover",
        flex:1
    })}
`;
const InfoContainer=styled.div`
    flex:1;
    // height:90%;
    padding-right:100px;
    ${Mobile({
        padding:"0 30px 0 10px",
        flex:2,
        marginBotton:"25px"
    })}
`;
const Title=styled.h1`
    letter-spacing:2.5px;
    font-size:45px;
    ${Mobile({
        fontSize:"18px"
    })}
`;
const Desc=styled.p`
    letter-spacing:1.1px;
    font-size:20px;
    ${Mobile({
        fontSize:"10px",
        letterSpacing:"0",
    })}
`;
const Button=styled.button`
    margin-top:20px;
    width:120px;
    height:45px;
    font-size:18px;
    background-color:transparent;
    cursor:pointer;
    border-radius:5px;
    border:2px solid gray;
    ${Mobile({
        fontSize:"15px",
        width:"100px",
        height:"40px",

    })}
`;
const PopularProducts=styled.div`
    display:none;
    ${Mobile({
        display:"block"
    })}
`;
const Sliders=()=> {
    const [slideIndx,setSlideIndx]=useState(0);
    const handleClick=(direction) =>{
        if(direction==="left"){
            setSlideIndx(slideIndx > 0 ? slideIndx-1 : 3);
        }else if(direction==="right"){
            setSlideIndx(slideIndx < 3 ? slideIndx+1 : 0);
        }
    }
  return (
    <Container >
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeft />
        </Arrow>
        <Wrapper slideIndx={slideIndx}>
            {SlideItems.map((item)=>(
                <Slide style={{backgroundColor:item.bg}}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc> {item.desc}</Desc>
                    <Button><Link to={`/products/offers`} style={{textDecoration:"none", color:"black"}}>SHOP NOW</Link></Button>
                </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Sliders;
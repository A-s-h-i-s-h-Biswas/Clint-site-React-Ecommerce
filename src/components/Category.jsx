import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { categoryItems } from '../pages/data';
import { Mobile } from '../pages/Responsive';

const Container=styled.div`
background-color:white;
    // margin-top:10px;
    width:100%;
    height:130px;
    display:flex;
    align-items:center;
    justify-content:center;
    ${Mobile({
        height:"80px",
    })}
`;
const Wrapper=styled.div`
    width:100vw;
    height:100%;
    // background-color:gray;
    padding:25px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${Mobile({
        padding:"5px",
        // justify-content:space-between;
    })}
`;
const Circle=styled.div`
    width:60px;
    height:60px;
    border-radius:50%;
    background:linear-gradient(
        rgba(200,0,0,.6),
        rgba(0,0,200,.6)
    );
    display:flex;
    align-items:center;
    justify-content:center;

    ${Mobile({
        width:"0",
        height:"0"
    })}
`
const Item=styled.div`
    align-items:center;
    flex-direction:column;
    justify-content:center;
    display:flex;
    margin-top:10px;
    &:hover{
        transform:scale(1.02);
        opacity:0.8;
        transition:all .5s ease; 
    }
`;
const Img=styled.img`
    width:75px;
    height:80px;
    border-radius:50%;
    border-top:3px solid skyblue;
    border-bottom:3px solid pink;
    // border-left:2.5px solid skyblue;
    // border-right:2.5px solid pink;
    
    cursor:pointer;
    ${Mobile({
        // borderRadius:"0",
        borderTop:"2px solid skyblue",
        borderBottom:"2px solid pink",
        width:"25px",
        height:"30px",
    })}
`;
const Text=styled.p`
    color:black;
    font-weight:bolt;
    margin-top:10px;
    ${Mobile({
        fontSize:"5px",
        marginTop:"20px"
    })}
`;


const Category = () => {
  return (
    <Container>
        <Wrapper>
            { categoryItems.map(item=>(
                
                <Item>
                    <Circle><Link to={`/products/${item.cat}`}><Img src={item.img}/></Link></Circle>
                    <Text>{item.title}</Text>
                </Item>
            ))}
        </Wrapper>
    </Container>
  )
}

export default Category;
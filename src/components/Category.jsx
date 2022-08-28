import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { categoryItems } from '../pages/data';
import { Mobile } from '../pages/Responsive';

const Container=styled.div`
// background-color:#F9F9F9;
    margin-top:10px;
    width:100%;
    height:110px;
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
const Item=styled.div`
    align-items:center;
    flex-direction:column;
    justify-content:center;
    display:flex;
    &:hover{
        transform:scale(1.02);
        opacity:0.5;
        transition:all .5s ease; 
    }
`;
const Img=styled.img`
    width:60px;
    height:50px;
    cursor:pointer;
    ${Mobile({
        width:"30px",
        height:"30px",
    })}
`;
const Text=styled.p`
    color:black;
    font-weight:bolt;
    ${Mobile({
        fontSize:"5px",
    })}
`;


const Category = () => {
  return (
    <Container>
        <Wrapper>
            { categoryItems.map(item=>(
                <Item>
                    <Link to={`/products/${item.cat}`}><Img src={item.img}/></Link>
                    <Text>{item.title}</Text>
                </Item>
            ))}
        </Wrapper>
    </Container>
  )
}

export default Category;
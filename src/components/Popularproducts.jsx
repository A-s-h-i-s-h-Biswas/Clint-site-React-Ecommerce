
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { popularProducts } from '../pages/data';
import { Mobile } from '../pages/Responsive';


const Container=styled.div`
background-color:white;
    margin-left:18px;
    width:98.7%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    ${Mobile({
        // height:"80px",
        width:"94.7%",
        marginLeft:"0",
        padding:"0 10px"
    })}
`;
const Wrapper=styled.div`
    width:100%;
    height:100%;
    // background-color:gray;
    // padding:25px;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
    ${Mobile({
        // padding:"5px",
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
    width:200px;
    height:300px;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    display:flex;
    margin-bottom:20px;
    border-radius:10px;
    border-top:4px solid skyblue;
    border-bottom:4px solid pink;
    border-left:4px solid skyblue;
    border-right:4px solid pink;
    &:hover{
        transform:scale(1.02);
        opacity:0.8;
        transition:all .5s ease; 
    }
    ${Mobile({
        // padding:"5px",
        // justify-content:space-between;
        width:"150px",
        height:"200px"
    })}
`;
const Img=styled.img`
    width:200px;
    height:220px;
    
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    cursor:pointer;
    ${Mobile({
        // borderRadius:"0",
        // borderTop:"2px solid skyblue",
        // borderBottom:"2px solid pink",
        width:"150px",
        height:"140px",
    })}
`;
const Text=styled.p`
    color:black;
    font-weight:bolt;
    margin-top:10px;
    ${Mobile({
        fontSize:"10px",
        // marginTop:"20px"
    })}
`;
const Info=styled.div`
    
    width:200px;
    // height:50px;
    
    background:linear-gradient(
        rgba(200,150,0,.5),
        rgba(0,0,255,.5)
    );
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    ${Mobile({
        // padding:"5px",
        // justify-content:space-between;
        width:"150px",
        height:"50px"
    })}
`;


const PopularProducts = () => {
  return (
    <Container>
        <Text style={{fontSize:"35px",textDecoration:"underline 2px yellow",marginBottom:"20px"}}>Top Brands On Offer</Text>
        <Wrapper>
            { popularProducts.map(item=>(
                
                <Item>
                    <Link to={`/products/${item.cat}`}><Img src={item.img}/></Link>
                    <Info>
                        <Text>{item.title}</Text>
                        <Text style={{}}>{item.desc}</Text>
                    </Info>
                    
                </Item>
            ))}
        </Wrapper>
    </Container>
  )
}

export default PopularProducts;
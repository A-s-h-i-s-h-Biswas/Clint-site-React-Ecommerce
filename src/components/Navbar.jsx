
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from "@material-ui/core";
import React from 'react'
import styled from 'styled-components';
import { Mobile } from '../pages/Responsive';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/userSlice';
import { deleteAllProducts } from '../redux/ReduxCart';
import { useState } from 'react';


const Container=styled.div`
    height:57px;
    background-color:#D61C4E;
    ${Mobile({
        width:"100vw",
        height:"70px",
        display:"flex",
        flexDirection:"column"
    })}
`;
const Wrapper=styled.div`
    padding:5px 20px;
    display:flex;
    justify-content:space-between;
    ${Mobile({
        padding:"0px 10px"
    })}
`;
const Left=styled.div`
    flex:1;
    display:flex;
    align-items :center;
    justify-content:center;
    ${Mobile({
        display:"none"
    })}
`;
const LeftMobile=styled.div`
    flex:1;
    display:flex;
    align-items :center;
    display:none;
    ${Mobile({
        display:"inline"
    })}
`;
const Center=styled.div`
    flex:1;
    font-size:38px;
    font-weight: bold;
    // text-align:center;
    font-family: 'Lobster', cursive;
    color:#59A3C9;
    ${Mobile({
        fontSize:"22px",
        textAlign:"center",
        marginLeft:"10px"
    })};
`;
const Right=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    // padding-right:20px;
    ${Mobile({
        // display:"flex",
        // alignItens:"center",
        // justifyContent:"center",
        fontSize:"10px",
        flex:"2"
    })};
`;
const Language=styled.span`
    font-size:15px;
    cursor:pointer;
    ${Mobile({display:"none"})}
`;
const SearchContainer=styled.div`
    // margin-left:20px;
    width:30vw;
    height:30px;
    background-color:white;
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    ${Mobile({
        width:"80vw",
        marginLeft:"35px",
        marginTop:"10px",
        justifyContent:"space-between"
    })};
`;
const Inputs=styled.input`
    border:none;
    // border-radius:5px;
    // background-color:gray;
    color:black;
    width :90%;
    padding:2px;
    padding-left:20px;
    &:focus{
        outline:none;
    }
    ${Mobile({
        width:"100%",
        // textAlign:"center"
        
    })}
    
`;
const MenuLinks=styled.div`
    font-size:18px;
    cursor:pointer;
    margin-left:20px;
    ${Mobile({
        fontSize:"12px",
        margin:"0",
        padding:"5px"
    })}
`;
const Text=styled.span`
font-size:12px;
`;

const Navbar = () => {
    let address="/products/";
    let location="";
    let navigate=useNavigate();
    const quantity=useSelector(state=>state.cart.quantity);
    let user = useSelector((state) => state.user.currentUser);
    const dispatch=useDispatch();
    const handleLogout=()=>{
        dispatch(logout());
        // dispatch(deleteAllProducts());
    }
    const handleSearch=()=>{
        console.log(location);
        location !== "" && navigate(address+location);

    }
    
  return (
    <Container>
        <LeftMobile>
                <Language>ENG</Language>
                <SearchContainer>
                    <Inputs placeholder='Search products category and more' 
                    onChange={(e)=>{location=e.target.value.toLowerCase();  console.log(location)}} />

                    <Search style={{fontSize:"15px", cursor:"pointer"}}  onClick={handleSearch}/>
                </SearchContainer>
            </LeftMobile>
        <Wrapper>
            <Center>
                <Link to={"/"} style={{textDecoration:"none", color:"black",fontFamily: 'Lobster',color:"white"}}> NextFashions.</Link>
            </Center>
            <Left>
                {/* <Language>ENG</Language> */}
                <SearchContainer>
                    <Inputs placeholder='Search for products category and more'
                    onChange={(e)=>{location=e.target.value.toLowerCase();  console.log(location)}} />
                    <Search style={{fontSize:"25px", cursor:"pointer"}} onClick={handleSearch} />
                </SearchContainer>
            </Left>
            
            <Right>
                {/* {!user && <MenuLinks><Link to={"/register"} style={{textDecoration:"none", color:"black"}}> REGISTER</Link> </MenuLinks>} */}
                {!user && <MenuLinks><Link to={"/login"} style={{textDecoration:"none", color:"white"}}> Signin</Link></MenuLinks>}
                {user && <MenuLinks onClick={handleLogout} style={{color:"white"}}> Logout</MenuLinks>}
                <MenuLinks>
                    <Link to={"/carts"} style={{textDecoration:"none", color:"white"}}>
                        <Badge badgeContent={ user ? quantity : 0} color="primary" >
                            <ShoppingCartOutlined/>
                        </Badge ><Text>Cart</Text>
                    </Link>
                </MenuLinks>
                
                
            </Right>
        </Wrapper>

    </Container>
  )
}

export default Navbar;
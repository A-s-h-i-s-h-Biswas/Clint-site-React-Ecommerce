import { Add, Remove } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Mobile } from './Responsive';
import { addProduct,addTotal, deleteProduct } from '../redux/ReduxCart';
import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from './configAxios';

const Container=styled.div`
    background-color:rgba(128,128,128,.1);
    ${Mobile({
        // paddingLeft:"20px",
        width:"100vw",
        
    })}
`;
const SingleItem=styled.div`
    display:flex;
    // padding:20px;
    height:70vh;
    background-color:white;
    width:98.7%;
    margin-left:18px;
    ${Mobile({
        flexDirection:"column",
        paddingLeft:"13px",
        marginLeft:"0",
        height:"100%",
        width:"96.5vw",
    })}
`;
const ImageContainer=styled.div`
    width:50%;
    ${Mobile({
        width:"300px",
        height:"250px",
        
    })}
`;
const Image=styled.img`
    
    margin-left:50px;
    width:60%;
    height:70vh;
    ${Mobile({
        paddingTop:"20px",
        // paddingLeft:"0px",
        width:"300px",
        height:"250px",
        marginLeft:"25px"
    })}
`;
const InfoContainer=styled.div`
    flex:5;
    padding-right:60px;
    ${Mobile({
        alignItems:"center",
        justifyContent:"center",
        width:"80vw",
        heigth:"200px",
        margin:"0",
        padding:"20px 25px"
    })}
`;
const Title=styled.h1`
font-weight:50;
${Mobile({
    // width:"300px",
    // heigth:"300px",
    // margin:"0"
    fontSize:"20px"
})}
`;
const Desc=styled.p`
    margin-top:10px;
    font-weight:30;
    ${Mobile({
        // width:"300px",
        // heigth:"300px",
        // margin:"0"
        fontSize:"10px"
    })}
`;
const Price=styled.p`
    margin-top:10px;
    font-size:30px;
    ${Mobile({
        // width:"300px",
        // heigth:"300px",
        // margin:"0"
        fontSize:"18px"
    })}
`;
const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
    width:68%;
    margin-top:20px;
    ${Mobile({
        width:"80vw",
        // heigth:"300px",
        // margin:"0"
        fontSize:"10px"
    })}
`;
const Filter=styled.div`
    display:flex;
    ${Mobile({
        // width:"80vw",
        // heigth:"300px",
        // margin:"0"
        fontSize:"10px"
    })}
`;
const ActionContainer=styled.div`
    display:flex;
    // align-items:center;
    // justify-content:center;
    margin-top:50px;
    ${Mobile({
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        margin:"0",
        height:"200px"

    })}
`;
const AddorRemove=styled.div`
    margin-right:100px;
    display: flex;
    align-items:center;
    justify-content:center;
    ${Mobile({
        margin:"0 0 10px 0px"
    })}
    
`;
const Number=styled.div`
    width:40px;
    height:40px;
    border-radius:15px;
    border:1px solid gray;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 10px;
    ${Mobile({
        width:"40px",
        height:"30px",
        borderRadius:"15px",
        // margin:"0"
        fontSize:"10px",
        margin:"0 10px",
        // padding:"5px"
    })}
`;
const AddCart=styled.button`
    
    // margin-right:30px;
    background-color:orange;
    width:200px;
    height:45px;
    color:white;
    border:2px solid orange;
    transition:all .5s ease;
    cursor:pointer;
    &:hover{
        background-color:orange;
        color:black;
        transform:scale(1.1);
    }
    ${Mobile({
        width:"220px",
        height:"45px",
        margin:"0",
    })}

`;
const ShopNow=styled.button`
    background-color:green;
    color:white;
    width:120px;
    height:45px;
    border:2px solid gray;
    transition:all .5s ease;
    cursor:pointer;
    &:hover{
        background-color:white;
        color:black;
        transform:scale(1.1);
    }
    ${Mobile({
        marginTop:"10px",
        width:"220px",
    })}
`;
const ColorFltr=styled.span`
    background-color:${props=>props.color};
    width:20px;
    height:20px;
    border-radius:50%;
    border:1px solid gray;
    margin-right:5px;
    cursor:pointer;
    ${Mobile({
        width:"15px",
        height:"15px",
        // margin:"0"
        fontSize:"10px"
    })}
`;
const Txt=styled.h5`
    font-size:16px;
    font-weight:100;
    margin-right:10px;
    ${Mobile({
        // width:"80vw",
        // heigth:"300px",
        // margin:"0"
        fontSize:"12px"
    })}
`;
const Select=styled.select`
    border:1px solid gray;
    padding:5px;
    ${Mobile({
        width:"60px",
        height:"20px",
        // margin:"0"
        fontSize:"10px",
        padding:"0"
    })}
`;
const Option=styled.option`
${Mobile({
    // width:"60px",
    // heigth:"15px",
    // margin:"0"
    fontSize:"8px"
})}
`;
const Alert=styled.p`
    margin-top:25px;
    color:red;
`;
const Product = () => {
    const location=useLocation();
    const saveId=location.pathname.split("/")[2];
    const [product,setProduct]=useState({});
    const [quantity,setQuantity]=useState(1);
    const [color,setColor]=useState("null");
    const [size,setSize]=useState("null");
    const user = useSelector((state) => state.user.currentUser);
    const cart=useSelector(state=>state.cart);

    useEffect(()=>{
        const getProduct=async ()=>{
            try{
                const res= await apiRequest.get(`/products/find/${saveId}`);
                setProduct(res.data);
                console.log(saveId);
            }catch(err){}
        }
        getProduct();
    },[saveId]);

    const handleQuantity=(type)=>{
        if(type==="inc"){
            setQuantity(quantity+1);
        }else{
            quantity > 1 && setQuantity(quantity-1);
        }
    };
    const dispatch=useDispatch();
    
    let id=true;
    const handleClick=()=>{
        
        
        cart.products.map(product=>{
            if(saveId === product._id){
                id=false;
                return false;
            }
        })
        
        user && id && dispatch(addProduct({...product,quantity,color,size}));
    }
    
  return (
    <Container>
        <Navbar/>
        <Anouncement/>
        <div style={{width:"100%", height:"15px"}}/>
        <SingleItem>
            <ImageContainer>
                <Image src={product.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <Price>Rs.{product.price}/- only.</Price>
                <FilterContainer>
                    <Filter>
                        <Txt>Color:</Txt>
                        
                        {product.color ?.map((co)=>(
                            <ColorFltr color={co} key={co} onClick={()=>setColor(co)} />
                        ))}
                    </Filter>
                    <Filter>
                        <Txt>Size:</Txt>
                        
                        <Select onChange={(e)=>setSize(e.target.value)}>
                        <Option  disabled selected>Size</Option>
                            {product.size ?.map((sz)=>(
                                <Option key={sz}>{sz}</Option>
                            ))}
                        </Select>
                    </Filter>
                    
                </FilterContainer>
                <ActionContainer>
                    <AddorRemove>
                        <Remove  style={{cursor:"pointer"}}  onClick={()=>handleQuantity("dec")}/>
                        <Number>{quantity}</Number>
                        <Add style={{cursor:"pointer"}} onClick={()=>handleQuantity("inc")}/>
                    </AddorRemove>
                    <AddCart onClick={handleClick} ><Link to="/carts" style={{textDecoration:"none",color:"white"}}>ADD TO CART</Link></AddCart>

                    
                    {/* <ShopNow>SHOP NOW</ShopNow> */}
                </ActionContainer>
                {/* { !user && <Alert> Please Login to use cart and Buy a product.........</Alert>} */}
            </InfoContainer>
        </SingleItem>

        <div style={{width:"100%", height:"15px"}}/>
        <Footer/>
    </Container>
  )
}

export default Product;







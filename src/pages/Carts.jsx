import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Mobile } from './Responsive';
// import { useSelector } from 'react-redux';
import { deleteProduct, deleteAllProducts, addTotal, deductTotal} from '../redux/ReduxCart';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { apiRequest } from './configAxios';
const dotenv=require("dotenv");
dotenv.config();

// const KEY = process.env.STRIPE_KEY_P;

const Container=styled.div`
${Mobile({

    width:"100vw",
})}
`;
const Wrapper=styled.div`
${Mobile({

    width:"100vw",
})}
`;
const Title=styled.h2`
    text-align:center;
    margin-top:20px;
    ${Mobile({
        padding:"0",
        
    })}
`;
const TopContainer=styled.div`
    padding:40px;
    display:flex;
    justify-content:space-between;
    background-color:#9ED2C6;
    ${Mobile({
        padding:"10px",
        width:"95vw"
    })}
`;
const Buttons=styled.button`
    background-color: ${props=>props.type};
    border:2px solid gray;
    border-bottom:2px solid black;
    border-right:2px solid black;
    cursor:pointer;
    transition:all .5s ease;
    width:150px;
    height:40px;

    &:hover{
        background-color:#54BAB9;
        color:white;
        transform:scale(1.05);
    }
    ${Mobile({

        width:"100px",
        height:"35px",
        fontSize:"10px"
    })}
`;
const LinkContainer=styled.div`
    display:flex;
    ${Mobile({
        flexDirection:"column"
    })}

`;
const TxtLink=styled.p`
    cursor:pointer;
    text-decoration:underline;
    margin:10px;
    ${Mobile({
        margin:"0",
        fontSize:"12px"
    })}
`;
const BottomContainer=styled.div`
    padding:30px;
    display:flex;
    justify-content:space-between;
    background-color:#EBF5FB ;
    ${Mobile({
        padding:"0",

    })}
`;
const Products=styled.div`
    display:flex;
    flex-direction:column;
    flex:3;
    ${Mobile({
        padding:"0",
        
    })}
`;
const Product=styled.div`
    display:flex;
    justify-content:space-between;
    height:250px;
    ${Mobile({
        width:"100vw",
        height:"200px",
        
    })}
`;
const Image=styled.img`
    width:200px;
    z-index:3;
    ${Mobile({
        width:"100px",
        
    })}
`;
const Info=styled.div`
    display:flex;
    flex-direction:column;
    margin-left:30px;
    ${Mobile({
        width:"150px",
        
    })}
`;
const Count=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin:5px;
    ${Mobile({
        fontSize:"15px",
        width:"50px"
    })}
    
`;
const Price=styled.p`
${Mobile({
    fontSize:"15px",
    width:"50px"
    
})}
`;
const CountPrice=styled.div`
    display:flex;
    flex-direction:column;
    padding:50px;
    font-size:20px;

    ${Mobile({
        // display:"none",
        width:"50px",
        padding:"50px 25px",
        // marginRight:"0",
        
    })}
    
`;
const ImgInfo=styled.div`
    display:flex;
    align-items:center;
    justify-content:left;
    margin:10px;
    flex:1.5;
    position:relative;
    ${Mobile({
        width:"100px",
        
    })}
`;
const Hr=styled.hr`
    opacity:.2;
`;
const Summary=styled.div`
    flex:.8;
    border-radius:10px;
    border:1px solid lightgray;
    padding:20px;
    height:100%;
    ${Mobile({
        display:"none"
    })}
    
`;
const SummaryMobile=styled.div`
    display:none;
    flex:.5;
    border-radius:10px;
    border:1px solid lightgray;
    padding:20px;
    height:100%;
    ${Mobile({
        display:"block",
        // flexDirection:"column"
    })}
`;
const Txt=styled.p`
    font-weight:bolt;
    margin-bottom:10px;
    display:flex;
    ${Mobile({
        fontSize:"10px",
        
    })}
    
`;
const Text=styled.p`
    margin-left:10px;
    ${Mobile({
        fontSize:"10px",
        
    })}
`;
const Circle=styled.div`
position:absolute;
    width:200px;
    height:200px;
    border-radius:50%;
    background:linear-gradient(
        rgba(200,0,0,.6),
        rgba(0,0,200,.6)
    );
    ${Mobile({
        width:"100px",
        height:"100px",
        borderRadius:"50%"
    })}
    
    cursor:pointer;
`;
const Carts = () => {
    const user = useSelector((state) => state.user.currentUser);
    const cart=useSelector(state=>state.cart);
    const [quantity,setQuantity]=useState(0);
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const [stripeToken, setStripeToken] = useState(null);
    const KEY="pk_test_51LZCQcSHRX5e8KiC13mMluwUDsgD4sMGeaHZsiZpf6sRzuc1SQ1s2nNABaGCGvXPSLs71KIWFeHGw9dDniF9bXeS00s3EnHogS";
    const handledeleteAll=()=>{
        // if(alert===false)isalert=true;
        user && dispatch(deleteAllProducts(cart));
    }
    const handledelete=(id)=>{
        // const id=e.target.value;
        console.log(id);
        cart.products.map((product,indx)=>{
            if(product._id===id){
                const quantity=product.quantity;
                const price=product.price;
                console.log(indx);
                const products=cart.products.filter((item,i)=> i!==indx);
                dispatch(deleteProduct({...product,quantity,price,products}));
            }
        })     
    };

    const onToken = (token) => {
        console.log(token);
        setStripeToken(token);
    };
    
      useEffect(() => {
        const makeRequest = async () => {
          try {
            const res = await apiRequest.post("/checkout/payment", {
              tokenId: stripeToken.id,
              amount: cart.total*100,
              quantity:cart.quantity,
            });
            // console.log(stripeToken);
            navigate("/success");
          } catch {}
        };
        stripeToken && makeRequest();
      }, [stripeToken, cart.total,navigate]);



  return (
    <Container>
        <Navbar/>
        <Anouncement/>
        { user && cart.quantity>0 ? <Wrapper>
            <Title>YOUR BAG</Title>
            <TopContainer>
                
                    <Buttons type="transparent"><Link to={"/"} style={{textDecoration:"none", color:"black"}}>CONTINUE SHOPPING</Link></Buttons>
                
                <LinkContainer>
                    <TxtLink>Your WishList(0)</TxtLink>
                    <TxtLink onClick={handledeleteAll}>Get Bag Empty</TxtLink>
                </LinkContainer>
                <StripeCheckout
                        name="NextFashions"
                        image="https://avatars.githubusercontent.com/u/107340046?v=4"
                        billingAddress
                        shippingAddress
                        description={`Your total is Rs.${cart.total}`}
                        currency="inr"
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                    <Buttons type="black" style={{color:"white"}}>CHECKOUT NOW</Buttons>
                </StripeCheckout>
            </TopContainer>
            <BottomContainer>
                <Products>
                    {cart.products.map(product=>(
                        <Product>
                        <ImgInfo>
                            <Circle/>
                            <Image src={product.img}/>
                            <Info>
                                <Txt>Product:<Text>{product.title}</Text></Txt>
                                <Txt>ID:<Text>{product._id}</Text></Txt>
                                <Txt>Color:<Text>{product.color}</Text></Txt>
                                <Txt>Size:<Text>{product.size}</Text></Txt>
                            </Info>
                        </ImgInfo>
                        <CountPrice>
                            <Count >
                                {/* <Remove style={{cursor:"pointer"}} /> */}
                                <Txt style={{fontSize:"15px",}}>Quantity:{product.quantity}</Txt>
                                
                                {/* <Add style={{cursor:"pointer"}} /> */}
                            </Count>
                            <Price>Rs.{product.price*product.quantity}/- only.</Price>
                            <Buttons  type="transparent" onClick={()=>{handledelete(product._id)}} style={{marginTop:"25px",width:"65px",height:"35px",fontSize:'12px'}}>Remove</Buttons>
                        </CountPrice>
                        
                    </Product>
                    ))
                    // <Hr/>
                    }
                    
                    <SummaryMobile>
                    <Txt style={{fontSize:"20px"}}>ORDER SUMMARY</Txt>
                    <Txt style={{justifyContent:"space-between",fontSize:"15px"}}>Subtotal:<Text style={{fontSize:"15px"}}>Rs.{cart.total}.00</Text></Txt>
                    <Txt style={{justifyContent:"space-between",fontSize:"15px"}}>Estimated Charge:<Text style={{fontSize:"15px"}}>Rs.+149.00</Text></Txt>
                    <Txt style={{justifyContent:"space-between",fontSize:"15px"}}>Shopping Discount:<Text style={{fontSize:"15px"}}>Rs.-149.00</Text></Txt>
                    <Txt style={{justifyContent:"space-between",fontSize:"15px"}}>Total:<Text style={{fontSize:"17px"}} >Rs.{cart.total}.00</Text></Txt>
                    <StripeCheckout
                        name="NextFashions"
                        image="https://avatars.githubusercontent.com/u/107340046?v=4"
                        billingAddress
                        shippingAddress
                        description={`Your total is Rs.${cart.total}`}
                        currency="inr"
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <Buttons style={{justifyContent:"center",width:"99.9%",backgroundColor:"black",color:"white"}}>BUY NOW</Buttons>
                    </StripeCheckout>
                </SummaryMobile>
                </Products>
                <Summary>
                    <Txt style={{marginBottom:"30px",fontSize:"25px"}}>ORDER SUMMARY</Txt>
                    <Txt>Subtotal:<Text style={{marginLeft:"100px"}}>Rs.{cart.total}.00</Text></Txt>
                    <Txt>Estimated Charge:<Text style={{marginLeft:"40px"}}>Rs.+149.00</Text></Txt>
                    <Txt>Shopping Discount:<Text style={{marginLeft:"30px"}}>Rs.-149.00</Text></Txt>
                    <Txt style={{fontSize:"20px", marginTop:"30px"}}>Total:<Text style={{marginLeft:"105px"}}>Rs.{cart.total}.00</Text></Txt>
                    <StripeCheckout
                        name="NextFashions"
                        image="https://avatars.githubusercontent.com/u/107340046?v=4"
                        billingAddress
                        shippingAddress
                        description={`Your total is Rs.${cart.total}`}
                        currency="inr"
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <Buttons style={{width:"99%", height:"40px",backgroundColor:"black", color:"white",textAlign:"center", marginTop:"20px", marginBottom:"15px"}}>BUY NOW</Buttons>
                    </StripeCheckout>
                </Summary>
            </BottomContainer> 
        </Wrapper>
        : <Text style={{textAlign:"center", fontSize:"25px",margin:"35px 0"}}>
                <div>
                    <Image src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"/>
                </div>
                { user ?
                <div>
                    <Text>Opps! Your Cart is Empty <br/> <p style={{fontSize:"15px"}}>Continue shopping and add your favourite products into the cart.</p></Text>
                    <Link to="/produtcs/all"><Buttons style={{backgroundColor:"orange", border:"none", color:"white"}}>Continue Shopping</Buttons></Link>
                 </div>
                : <div>
                    <Text>Missing Your Cart items?</Text>
                    <Link to="/login"><Buttons style={{backgroundColor:"orange", border:"none", color:"white"}}>Signin</Buttons></Link>
                </div>
                }
            </Text>
        }
        <Footer/>
    </Container>
  )
}

export default Carts;

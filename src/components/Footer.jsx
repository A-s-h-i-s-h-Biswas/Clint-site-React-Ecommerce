import { Email, Facebook, Instagram, LinkedIn, LocationOn, Phone, Telegram, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { Mobile } from '../pages/Responsive';
const Container=styled.div`
    display:flex;
    background-color:#FFF8F3;
    ${Mobile({
        flexDirection:"column",
        padding:"10px 0",
        width:"100vw",
        height:"300px"
    })}
`;
const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
    ${Mobile({
        display:"none",
        
    })}
`;
const Center=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding:30px;
    ${Mobile({
        flex:.2,
        widht:"100vw",
        height:"100px",
        padding:"",
    })}
`;
const Right=styled.div`
    flex:1;
    padding:30px;
    display:flex;
    flex-direction:column;
    ${Mobile({
        flex:.3,
        height:"100px",
        padding:"0 30px"
    })}
`;
const Logo=styled.h1`
    font-weight: bold;
    font-family: 'Lobster', cursive;
    color:#59A3C9;
    ${Mobile({
        
        
    })}

`;
const Desc=styled.p`
    margin-top:20px;
    
`;
const SocialIcons=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:20px;
    ${Mobile({
        
        marginTop:"5px"
    })}
`;
const Icons=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    cursor:pointer;
    ${Mobile({
        width:"30px",
        height:"30px",

        
    })}
`;
const Title=styled.h3`
    text-align:left;
    // display:none;
    ${Mobile({
        textAlign:"left"
    })}
`;
const Links=styled.div`
    
    display:flex;
    flex-direction:column;
    margin:25px;
    ${Mobile({
        
        margin:"10px"
    })}
`;
const Link=styled.a`
    cursor:pointer;
    ${Mobile({
        fontSize:"10px"
        
    })}
`;
const LinksContainer=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${Mobile({
        height:"100px"
        
    })}
`;

const Contacts=styled.div`
    display:flex;
    flex-direction:column;
    ${Mobile({
        textAlign:"center"
        
    })}
`;
const Box=styled.div`
    margin-right:5px;
    ${Mobile({
        
        fontSize:"12px"
    })}
`;
const Txt=styled.div`
display:flex:
align-items:center;

margin-bottom:5px;
${Mobile({
    fontSize:"12px",
    justifyContent:"center",
})}
`;
const Payment = styled.img`
    width: 50%;
    ${Mobile({
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    })}
`;
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo><Link to={"/"}> NextFashions.</Link></Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit in nulla delectus quam. Fuga delectus recusandae, alias maiores, repellendus nemo voluptates laborum quos iste ipsam natus!</Desc>
        </Left>
        <Center>
            <Title >Quick Links</Title>
            <LinksContainer>
            <Links>
                <Link><Link to={"/carts"}> Cart</Link></Link>
                <Link>Your Orders</Link>
                <Link>My Wishlist</Link>
                <Link>My Accounts</Link>
            </Links>
            <Links>
                <Link> Home</Link>
                <Link>Men Fashions</Link>
                <Link>Women Fashions</Link>
                <Link>Home Accessaries</Link>
            </Links>
            </LinksContainer>
            <SocialIcons>
                <Icons style={{backgroundColor:"#4267B2"}}>
                    <Facebook style={{color:"white"}}/>
                </Icons>
                <Icons style={{backgroundColor:"#1DA1F2"}}>
                    <Twitter style={{color:"white"}}/>
                </Icons>
                <Icons style={{backgroundColor:"#0A66C2"}}>
                    <LinkedIn style={{color:"white"}}/>
                </Icons>
                <Icons style={{backgroundColor:"#C13584"}}>
                    <Instagram style={{color:"white"}}/>
                </Icons>
                <Icons style={{backgroundColor:"#0088cc"}}>
                    <Telegram style={{color:"white"}}/>
                </Icons>
            </SocialIcons>
        </Center>
        <Right>
            <Contacts>
                <Txt>
                    <Box><LocationOn /></Box>
                    Ranaghat-741202, Nadia, West Bengal, India.
                </Txt>
                <Txt>
                <Box><Email /></Box>
                    nextfashions@gmail.com
                </Txt>
                <Txt>
                <Box><Phone/></Box>
                    +91 123 456 1578
                </Txt>
                <Txt>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </Txt>
            </Contacts>
            
        </Right>
        
    </Container>
  )
}

export default Footer;
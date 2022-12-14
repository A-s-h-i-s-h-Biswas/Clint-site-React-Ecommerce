
import { FavoriteBorderOutlined, FavoriteOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useState} from "react";
import { Mobile } from '../pages/Responsive';
const Info=styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:3;
    opacity:0;
    background-color:rgb(0,0,0,.2);
    transition:all .5s ease;
`;
const Container=styled.div`
    flex:1;
    margin:10px;
    min-width:280px;
    max-width:100px;
    height:300px;
    background-color:#FFF8F3;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;

    &:hover ${Info}{
        opacity:1;
        transform:scale(1.01);
    }
    ${Mobile({
        justifyContent:"center",
        alignItems:"center",
        maxWidth:"300px",
        // minWidth:"320px",
        
    })}
`;
const Circle=styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
    
`;
const Image=styled.img`
    height:82%;
    width:75%;
    z-index:2;
    ${Mobile({
        width:"60%",
        height:"80%",
    })}
`;

const Icon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    cursor:pointer;
    transition:all .5s ease;
    &:hover{
        background:gray;
        transform:scale(1.2);
        // color:white;
    }
`;
const Product = ({item}) => {
    const [color,setColor]=useState("white");

    const changeColor=()=>{
        if(color==="white"){
            setColor("red");
        }
        else{
            setColor("white");
        }
    }

  return (
    <Container>
        <Circle/>
        <Image src={item.img} />
        <Info>
            <Icon>
                <Link to={`/product/${item._id}`} style={{display:"flex",alignItems:"center",justifyContent:"center", color:"black"}}>
                    <ShoppingCartOutlined/>
                </Link>
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`} style={{display:"flex",alignItems:"center",justifyContent:"center", color:"black"}}>
                    <SearchOutlined/>
                </Link>
            </Icon>
            <Icon>
                 {  color==="white" ?<FavoriteBorderOutlined onClick={changeColor}/>
                    :<FavoriteOutlined  color="" onClick={changeColor}/>
                 }
            </Icon>
        </Info>
    </Container>
  )
}
export default Product;

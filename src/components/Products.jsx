import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../pages/data';
import Product from './Product';
import { Mobile } from '../pages/Responsive';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiRequest } from '../pages/configAxios';
const Container=styled.div`
    // padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    background-color:white;
    width:98.7%;
    margin-left:18px;
    
    ${Mobile({
      width:"92.9%",
      marginLeft:"0",
      paddingLeft:"25px"
    })}
`;
const Title=styled.p`
    font-size:18px;
    letter-spacing:1.3px;
    text-align:center;
`;
  const PC=styled.div``;
  const Products = ({saveLocation,filters,sort}) => {
  const [products,setProducts]=useState([]);
  const [filterproducts,setFilterproducts]=useState([]);

  useEffect(()=>{
    const getProducts= async ()=>{
      try{
        const responce= await apiRequest.get( saveLocation ? `/products?category=${saveLocation}`:"/products");
        console.log(responce);
        setProducts(responce.data);
      }catch(error){
          console.log(error);
      }
      
    };
    getProducts();
  },[saveLocation]);

  useEffect(() => {
    saveLocation &&
      setFilterproducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, saveLocation, filters]);


useEffect(() => {
  if (sort === "Relevent") {
    setFilterproducts((prev) =>
      [...prev].sort((a, b) => a.createdAt - b.createdAt)
    );
  } else if (sort === "inc-dec") {
    setFilterproducts((prev) =>
      [...prev].sort((a, b) => a.price - b.price)
    );
  } else {
    setFilterproducts((prev) =>
      [...prev].sort((a, b) => b.price - a.price)
    );
  }
}, [sort]);


  return (
    <Container>
        {
        saveLocation ? 
        filterproducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 12)
            .map((item) => <Product item={item} key={item.id} />)
      }
    </Container>
  );
}
export default Products;

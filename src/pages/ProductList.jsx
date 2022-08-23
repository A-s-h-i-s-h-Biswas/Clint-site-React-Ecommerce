import React, { useState } from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Anouncement from "../components/Anouncement";
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Mobile } from './Responsive';
import { useLocation } from 'react-router-dom';


const Container=styled.div`
    ${Mobile({
        width:"100vw",
    })}
`;
const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
`;
const Filter=styled.div`
    display:flex;
    margin:20px;
    ${Mobile({
        flexDirection:"column",
        fontSize:"12px",
    })}
`;
const Title=styled.h1`
    margin:20px;
    ${Mobile({
        fontSize:"25px",
        textAlign:"center"
    })}
`;
const FilterTxt=styled.span`
    font-size:20px;
    font-weight:600;
    ${Mobile({
        fontSize:"15px",
    })}
`;
const Select=styled.select`
    padding:5px;
    margin-left:20px;
    border:1px solid gray;
    ${Mobile({
        width:"100px",
        height:"30px",
        margin:"5px 0"
    })}
`;
const Option=styled.option`
    margin-left:25px;
    ${Mobile({
        fontSize:"10px",
    })}
`;

const ProductList = () => {
    const location=useLocation();
    const saveLocation=location.pathname.split("/")[2];
    const [filters,setFilter]=useState({});
    const [sort,setSort]=useState("Relevent");

    const handleFilter=(e)=>{
        const value=e.target.value;
        setFilter({
            ...filters,
            [e.target.name]:value,
        });
    };
    console.log(filters,sort);


  return (
    <Container>
        <Navbar/>
        <Anouncement/>
        <Title style={{textTransform: "uppercase"}}>{saveLocation}</Title>
        <FilterContainer>
            <Filter>
                <FilterTxt>Filter Products:</FilterTxt>
                <Select name='color' onChange={handleFilter}>
                    <Option disabled selected>Color</Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>pink</Option>
                    <Option>blue</Option>
                    <Option>gray</Option>
                    <Option>green</Option>
                    <Option>red</Option>
                    <Option>yellow</Option>
                    <Option>brown</Option>
                </Select>
                <Select name='size' onChange={handleFilter}>
                    <Option disabled selected>Size</Option>
                    <Option>XXS</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterTxt>Sort Products:</FilterTxt>
                <Select onChange={(e)=>setSort(e.target.value)}>
                    
                    <Option value="Relevent">Relevent</Option>
                    <Option value="inc-dec">Price(increased to decreased)</Option>
                    <Option value="dec-inc">Price(Decreased to increased)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products saveLocation={saveLocation} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList;
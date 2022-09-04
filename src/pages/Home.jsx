import React from 'react'
import Navbar from '../components/Navbar';
import Anouncement from '../components/Anouncement';
import Sliders from '../components/Sliders';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Category from '../components/Category';
import styled from 'styled-components';
import PopularProducts from '../components/Popularproducts';
const Home = () => {

  const Container=styled.div`
      background-color:rgba(128,128,128,.1);
      // opacity:.3;
  `
  return (
    <Container >
        {/* <Anouncement/> */}
        <Navbar/>
        
        <Category/>
        <div style={{width:"100%", height:"15px"}}/>
        <Sliders/>
        <div style={{width:"100%", height:"15px"}}/>
        <PopularProducts/>
        <div style={{width:"100%", height:"15px"}}/>
        <Products/>
        <div style={{width:"100%", height:"15px"}}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Home;


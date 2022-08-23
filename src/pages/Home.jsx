import React from 'react'
import Navbar from '../components/Navbar';
import Anouncement from '../components/Anouncement';
import Sliders from '../components/Sliders';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Category from '../components/Category';
const Home = () => {
  return (
    <div>
        <Anouncement/>
        <Navbar/>
        <div style={{width:"100%", height:"15px",backgroundColor:"#EEF2FF"}}/>
        <Category/>
        <Sliders/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home;


import React from 'react'
import HeroSection from './Components/HeroSection';
import ComServers from './Components/ComServers';
import Trusted from './Components/Trusted';
const Home = () => {
const data ={
name :"Tekisky"
};
  return (
    <>
    <HeroSection myData ={data}/>
    <ComServers/>
    <Trusted/>
    </>
  );
};

export default Home;

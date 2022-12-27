import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HeroSection from './Components/HeroSection';
import styled from 'styled-components';
const About = () => {
const data ={
name :"Tekisky.PVT.LTD"
  };
  return (
  <>
  <Wrapper>
  <HeroSection myData={data}/>
  <div className='Carousels'>
  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"300px"}}
          src="images/back1.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mohammad Umair</h3>
          <span>Director</span>
          <p>Around 4+ years of IT experience Now Working in Microsoft</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"300px"}}
          src="images/back1.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>S J Khan</h3>
          <span>Director</span>
          <p>11 years of IT experience</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"300px"}}
          src="images/back1.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mohammad Zubair</h3>
          <span>Director</span>
          <p>
          Around 7 years of IT experience Now Working in Moroco Base Company
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  </Wrapper>
  </>
  );
};
const Wrapper = styled.section`
  h3 {
      font-size: 4.2rem;
      font-family: "Times New Roman", Times, serif;
    }
  span{
    font-size: 2.2rem;
    font-family: Arial, Helvetica, sans-serif;
  }
    p {
      color: white;
      font-style: italic;
    }
  }
`;
export default About;

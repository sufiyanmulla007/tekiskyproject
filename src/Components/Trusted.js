import React from 'react'
import styled from 'styled-components';
import {FcGoogle} from "react-icons/fc";
import {BsFacebook} from "react-icons/bs";
import TwitterIcon from '@mui/icons-material/Twitter';
const Trusted = () => {
  return (
    <Wrapper className="brand-section">
    <div className="container">
      <h3>Placement Opportunities In Trusted By 1000+ Companies</h3>
      <div className="brand-section-slider">
        {/* my 1st img  */}
        <div className="slide">
         <TwitterIcon className="icon"/>
        </div>
        <div className="slide">
        <BsFacebook className="icon"/>
        </div>
        <div className="slide">
        <img
          src="images/Flipkart-logo.png"
          alt="trusted-brands"
          />
        
        </div>
        <div className="slide">
        <img
          src="images/Oracle-Logo.png"
          alt="trusted-brands"
          />
        </div>
        <div className="slide">
          
          <FcGoogle className="icon"/>
        </div>
      </div>
    </div>
  </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: gry;
    color:blue;
  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;
export default Trusted;

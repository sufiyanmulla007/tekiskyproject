import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
const Header = () => {
  return (
    <MainHeader>
   <NavLink to="/">
   {/* <img src='./images/google.png' alt='logo' style={{width:"10rem",height:"auto"}}/> */}
   <h2>Tekisky</h2>
   </NavLink>
   <Nav/>
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  h2{
    height: 5rem;
    font-family: "Gill Sans", sans-serif;
  }
`;
export default Header;

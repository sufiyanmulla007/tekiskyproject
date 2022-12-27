// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import Errors from "./Errors";
import Home from "./Home";
import Services from "./Services";
import Technologies from "./Technologies";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Create from "./Admin/Create";
import Read from "./Admin/Read";
import Update from "./Admin/Update";
import RegStudent from "./Registration/RegStudent";
function App() {
const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/technologies" element={<Technologies/>}/>
    <Route path="/Contact" element={<ContactUs/>}/>
    <Route path="/Registration" element={<RegStudent/>}/>
    <Route path="/Create" element={<Create/>}/>
    <Route path="/read" element={<Read/>}/>
    <Route path="/update" element={<Update/>}/>
    <Route path="*" element={<Errors/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

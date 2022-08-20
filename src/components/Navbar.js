import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/KDR-Group.png";
import hamburger from "../images/hamburger.png";
import close from "../images/close.png";

function Navbar({ bg }) {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);
  return (
    <Container bg={bg}>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      <Row>
        <Link to="/">
          <Navlinks>Home</Navlinks>
        </Link>
        <Link to="/services">
          <Navlinks>Services</Navlinks>
        </Link>
        <Link to="/communities">
          <Navlinks>Communities</Navlinks>
        </Link>
        <Link to="/contactus">
          <Navlinks>Contact Us</Navlinks>
        </Link>
      </Row>
      <HamburgerBtn onClick={() => handleClick()} clicked={click}>
        <img src={click ? close : hamburger} alt="" />
      </HamburgerBtn>
      <MobileMenu clicked={click} onClick={() => handleClick()}>
        <Link to="/" onClick={() => handleClick()}>
          Home
        </Link>
        <Link to="/services" onClick={() => handleClick()}>
          Services
        </Link>
        <Link to="/communities" onClick={() => handleClick()}>
          Communities
        </Link>
        <Link to="/contactus" onClick={() => handleClick()}>
          Contact Us
        </Link>
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "13px",
            justifyContent: "space-around",
          }}
        ></div>
      </MobileMenu>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  position: relative;
  background: ${(props) => (props.bg ? "white" : "transparent")};
  color: ${(props) => (props.bg ? "black" : "white")};
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: ${(props) => (props.bg ? "black" : "white")};
  }
`;
const Logo = styled.div`
  width: 200px;
  padding-left: 25px;
  padding-top: 25px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media only Screen and (max-width: 768px) {
    width: 150px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;

  @media only Screen and (max-width: 768px) {
    display: none;
  }
`;
const Navlinks = styled.div`
  cursor: pointer;
  font-size: 18px;
  padding-top: 20px;
  padding-bottom: 20px;
  transition: 150ms ease-in;
  border-bottom: 5px solid transparent;

  :hover {
    border-bottom: 3px solid #00bcd4;
  }
`;

const HamburgerBtn = styled.div`
  position: relative;
  height: 30px;
  width: 30px;
  margin-right: 30px;
  cursor: pointer;
  display: none;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  @media only Screen and (max-width: 768px) {
    display: inline-block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  width: 100%;
  top: 70px;
  right: 0;
  left: 0;
  transition: all 0.5s;
  opacity: ${({ clicked }) => (clicked ? "1" : "0")};
  visibility: ${({ clicked }) => (clicked ? "visible" : "hidden")};
  background: #fff;
  overflow-x: hidden;
  z-index: 100;

  a {
    font-weight: 600;
    color: var(--white);
    line-height: 2rem;
    font-size: 1.5rem;
    margin: 1.5rem;
    color: #000;
    cursor: pointer;
  }
  a button {
    font-size: 19.2px;
  }
  a::after {
    content: "";
    display: block;
    height: 3px;
    width: 3px;
    background: transparent;
    transition: width 0.4s;
  }
  a:not(:last-child):hover::after {
    width: 100%;
    background: var(--purple);
  }
`;

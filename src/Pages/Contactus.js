import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import contact from "../images/contact.jpeg";
import sky from "../images/sky.jpeg";
const axios = require("axios");

function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://v1.nocodeapi.com/anu4/google_sheets/qtyTGOLrozpPHBFb?tabId=Sheet1",
      params: {},
      data: [[name, email, subject, message, new Date().toLocaleString()]],
    })
      .then(function (response) {
        console.log(response.data);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <Div>
      <Navbar bg="white" />
      <Banner>
        <img src={contact} alt="" />
        <h1>How Can We Help You?</h1>
      </Banner>
      <Main>
        <Image>
          <img src={sky} alt="" />
        </Image>
        <Form onSubmit={handleSubmit}>
          <h1>Contact Us</h1>
          <p>Email KDR Group at: info@kdrgroups.com</p>
          <p>Your Name</p>
          <input
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Your Email</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Subject</p>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <p>Your message</p>
          <textarea
            cols="30"
            rows="8"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button>
            <input type="submit" value="Send" />
          </Button>
        </Form>
      </Main>
    </Div>
  );
}

export default Contactus;
const Div = styled.div`
  background-color: #fafbfd;
  overflow: hidden;
`;

const Banner = styled.div`
  width: 100vw;
  height: 200px;
  position: relative;
  color: white;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-weight: 600;
    text-align: center;
  }

  @media only Screen and (max-width: 768px) {
    h1 {
      font-size: 40px;
      width: 100%;
    }
  }
`;

const Main = styled.div`
  display: flex;
  position: relative;
  background-color: #fafbfd;
  height: 1050px;
`;
const Image = styled.div`
  margin-top: 60px;
  margin-left: 250px;
  img {
    height: 800px;
    width: 500px;
  }

  @media only Screen and (max-width: 1000px) {
    margin-left: 75px;
  }
  @media only Screen and (max-width: 768px) {
    display: none;
  }
`;

const Form = styled.form`
  position: absolute;
  top: 130px;
  left: 700px;
  background-color: white;
  width: 460px;
  padding-top: 30px;
  padding-left: 40px;
  padding-bottom: 30px;
  z-index: 2;
  display: flex;
  flex-direction: column;

  h1 {
    color: #00bcd4;
    width: max-content;
    font-size: 50px;
    font-weight: 600;
    position: relative;
    margin-bottom: 40px;

    ::before {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 0;
      height: 5px;
      width: 70px;
      background-color: #00bcd4;
    }
    /* border-bottom: 2px solid #00bcd4; */
  }
  p {
    font-size: 22px;
    margin: 20px 0px;
  }
  input {
    padding: 15px 30px;
    border-radius: 10px;
    width: 240px;
    border: 2px solid black;
  }
  textarea {
    padding: 15px 30px;
    border-radius: 10px;
    width: 240px;
    border: 2px solid black;
  }

  @media only Screen and (max-width: 1000px) {
    left: 450px;
    width: 100%;
  }
  @media only Screen and (max-width: 768px) {
    left: 0;

    h1 {
      font-size: 40px;
    }
    p {
      width: 70%;
    }
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    background-color: #00bcd4;
    align-self: center;
    cursor: pointer;
    color: white;
    outline: none;
    border: none;
    font-size: 20px;
    width: 100px;
    margin-top: 20px;
    text-align: center;
    padding: 10px 20px;
    border-radius: 20px;
    transition: 150ms ease-in;

    :hover {
      background-color: #04899a;
    }
    :active {
      transform: scale(0.8);
    }
  }
`;

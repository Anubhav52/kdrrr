import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pie from "../images/pie-chart.png";
import market from "../images/bullhorn.png";
import leas from "../images/deal.png";
import tenant from "../images/tenant.png";
import engg from "../images/prototype.png";
import arch from "../images/sketch.png";
import fin from "../images/hand.png";
import admin from "../images/admin.png";

function Services() {
  return (
    <Div>
      <Navbar bg="white" />
      <Banner>
        <img
          src="https://origininvestments.com/wp-content/uploads/2021/03/Advisors-Hero-BG.jpg"
          alt=""
        />
        <h1>Services</h1>
      </Banner>
      <Content>
        <p>
          The effective management of real estate assets today involves a number
          of very diverse tasks. KDR GROUP offers its clients the services
          defined in the categories below:
        </p>
      </Content>
      <Main>
        <Block>
          <Icon>
            <img src={pie} alt="" />
          </Icon>
          <h2>Strategic Planning</h2>
        </Block>
        <Block>
          <Icon>
            <img src={market} alt="" />
          </Icon>
          <h2>Marketing</h2>
        </Block>
        <Block>
          <Icon>
            <img src={leas} alt="" />
          </Icon>
          <h2>Leasing</h2>
        </Block>
        <Block>
          <Icon>
            <img src={tenant} alt="" />
          </Icon>
          <h2>Tenant Coordination</h2>
        </Block>
        <Block>
          <Icon>
            <img src={engg} alt="" />
          </Icon>
          <h2>Engineering Management</h2>
        </Block>
        <Block>
          <Icon>
            <img src={arch} alt="" />
          </Icon>
          <h2>Architectural Services</h2>
        </Block>
        <Block>
          <Icon>
            <img src={fin} alt="" />
          </Icon>
          <h2>Financial / Investment Services</h2>
        </Block>
        <Block>
          <Icon>
            <img src={admin} alt="" />
          </Icon>
          <h2>Administrative Services</h2>
        </Block>
      </Main>
    </Div>
  );
}

export default Services;
const Div = styled.div`
  overflow-x: hidden;
`;
const Banner = styled.div`
  width: 100vw;
  height: 200px;
  position: relative;

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
`;
const Content = styled.div`
  padding: 50px 250px;
  font-size: 25px;
  line-height: 1.3;
  font-weight: 400;

  @media only Screen and (max-width: 1000px) {
    padding: 40px 100px;
    text-align: center;
  }
  @media only Screen and (max-width: 768) {
    padding: 20px 0px;
    width: 100%;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Block = styled.div`
  height: 160px;
  width: 200px;
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only Screen and (max-width: 1000px) {
    width: 175px;
    height: 150px;
    padding: 30px 0px;

    h2 {
      font-size: 20px;
    }
  }
`;
const Icon = styled.div`
  height: 80px;
  width: 80px;
  padding: 20px;
  border-radius: 50%;
  background: #f3f4f7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  img {
    height: 60px;
    width: 60px;
    object-fit: contain;
  }
`;

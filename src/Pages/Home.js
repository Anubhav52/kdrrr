import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Main>
        <Navbar />
        <Title>
          <h1>There is no substitute for Experience!</h1>
          <p>Investment | Management</p>
          <Button>Explore Offerings</Button>
        </Title>
      </Main>
      <Content>
        <Aboutus>
          <h1>About Us</h1>
        </Aboutus>

        <Row>
          <Box>
            <h1>1300</h1>
            <h3>Units</h3>
          </Box>
          <p>
            Since inception in 2003, KDR Group has acquired and owns over 1300
            units in Kansas and Missouri.
          </p>
        </Row>

        <SubContent>
          <p>
            The KDR Group provides in-house management, maintenance, accounting,
            marketing, and legal services. We work daily to maintain and improve
            the rental experience in a cost effective manner. Our integrity in
            achieving the best value for our residents’ money, also adds value
            to our investment and superior returns to our investors. The
            hands-on knowledge gained over the past decade in acquiring,
            managing and maintaining multifamily units enables us to bring
            proven processes to the table to quickly respond to changing market
            conditions.
          </p>
        </SubContent>
      </Content>
    </div>
  );
}

export default Home;

const Main = styled.div`
  height: 100vh;
  position: relative;
  background-image: url(https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80);
  background-size: cover;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 1;
  }
`;

const Title = styled.div`
  position: absolute;
  color: white;
  z-index: 2;
  top: 300px;
  left: 300px;

  h1 {
    width: 70%;
    font-size: 60px;
    margin-bottom: 40px;
  }
  p {
    font-size: 30px;
    margin-bottom: 40px;
  }

  @media only Screen and (max-width: 1000px) {
    top: 200px;
    left: 300px;
  }
  @media only Screen and (max-width: 768px) {
    top: 160px;
    left: 70px;

    h1 {
      font-size: 50px;
    }
    p {
      font-size: 25px;
    }
  }
`;

const Button = styled.button`
  border: none;
  background-color: #00bcd4;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;

  :hover {
    background-color: #04899a;
  }
`;
const Content = styled.div`
  padding: 50px 250px;

  @media only Screen and (max-width: 1000px) {
    padding: 40px 150px;
  }
  @media only Screen and (max-width: 768px) {
    padding: 20px 50px;
  }
`;
const Aboutus = styled.h1`
  text-align: center;
  font-size: 27px;
  font-weight: 600;
  @media only Screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;

  p {
    width: 60%;
    font-size: 25px;
    line-height: 1.3;
    word-spacing: 1px;
    @media only Screen and (max-width: 768px) {
      margin-top: 20px;
      width: 100%;
    }
  }
  @media only Screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;
const Box = styled.div`
  height: 160px;
  width: 230px;
  padding: 20px;
  background-color: #f3f4f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 5px solid #00bcd4;

  h1 {
    font-size: 60px;
    font-weight: 600;
  }
  h3 {
    font-size: 35px;
    font-weight: 500;
  }
  @media only Screen and (max-width: 768px) {
    h1 {
      font-size: 50px;
    }
    h3 {
      font-size: 27px;
    }
  }
`;

const SubContent = styled.div`
  margin-top: 70px;
  margin-bottom: 80px;

  p {
    font-size: 25px;
  }
`;

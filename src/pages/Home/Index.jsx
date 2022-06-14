import React from "react";
import styled, { css } from "styled-components";

// Styles
//import { IntoShape, AboutShape } from "./style";

// Components
import { Navbar, Footer } from "../../components";

// Section
import {
  Intro,
  About,
  Services,
  Porfolio,
  Testimonials,
  Contact,
} from "../../Section";

const Container = styled.div`
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(74% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: #dc1414;
`;

const AboutShape = styled.div`
  ${Shape}
  top: 100%;
  clip-path: polygon(0 0, 55% 0%, 26% 100%, 0 100%);
  background-color: #dc1414;
`;

const ServicesShape = styled.div`
  ${Shape}
  top: 200%;
  clip-path: polygon(0 0, 26% 0%, 26% 100%, 0 100%);
  background-color: #dc1414;
`;

const PorfolioShape = styled.div`
  ${Shape}
  top: 300%;
  clip-path: polygon(0 0, 26% 0%, 70% 100%, 0 100%);
  background-color: #dc1414;
`;

// const FooterShape = styled.div`
//   background-color: #111;
//   width: 100%;
//   height: 100px;
//   z-index: -1;
//   position: absolute;
// `;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
      <IntoShape />
      <About />
      <AboutShape />
      <Services />
      <ServicesShape />
      <Porfolio />
      <PorfolioShape />
      <Testimonials />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;

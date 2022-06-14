import React from "react";
import security from "../../img/security-home.png";

// Components
import { AnimatedShapes } from "../../components/Index";

// Styles
import {
  Section,
  Left,
  Right,
  Title,
  Desc,
  Info,
  Button,
  Contact,
  Phone,
  Contactext,
  Image,
} from "./style";

const Index = () => {
  return (
    <Section>
      <Left>
        <Title>Global Strategies Consultant Group Corp</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quasi odit nemo. Modi hic corporis velit maxime quam. Delectus, fugit.
        </Desc>
        <Info>
          <Button>START A PROJEC</Button>
          <Contact>
            <Phone>Call Us +123456789</Phone>
            <Contactext>Lorem ipsum dolor sit amet.</Contactext>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={security}></Image>
      </Right>
      <AnimatedShapes />
    </Section>
  );
};

export default Index;

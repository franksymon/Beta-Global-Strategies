import React from "react";
import logo from "../../img/logo.jpeg";

// Components
//import { Shape } from "../../components/Index";

//Styles
import {
  Section,
  Left,
  Rigth,
  Image,
  Title,
  SubTitle,
  Desc,
  Button,
} from "./style";

const Index = () => {
  return (
    <Section>
      <Left>
        <Image src={logo} />
      </Left>
      <Rigth>
        <Title>
          <b>Good </b>Safety
          <br />
          <b>Good </b>Security
          <br />
        </Title>
        <SubTitle>Security and Executive Transportation</SubTitle>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vero
          at labore ipsa voluptatum non aliquam magni corrupti? Pariatur
          architecto odit vitae ducimus, fugiat quas veritatis optio deleniti
          consectetur voluptatibus.
        </Desc>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vero
          at labore ipsa voluptatum non aliquam magni corrupti?
        </Desc>
        <Button>Leran More</Button>
      </Rigth>
    </Section>
  );
};

export default Index;

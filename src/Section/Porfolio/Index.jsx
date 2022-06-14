import React from "react";
import guard from "../../img/bodyguard.png";

// Styles
import { Section, Container, Image } from "./style";

const Index = () => {
  return (
    <Section>
      <Image src={guard} />
      <Container></Container>
    </Section>
  );
};

export default Index;

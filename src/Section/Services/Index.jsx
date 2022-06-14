import React from "react";
import { services } from "../../daja";
import img from "../../img/transportation.jpg";

// Styles
import {
  Section,
  Left,
  Rigth,
  Wrapper,
  Item,
  ItemInfo,
  Title,
  Desc,
  ItemImg,
  Image,
} from "./style";

const Index = () => {
  return (
    <Section>
      <Left>
        <Image src={img} />
      </Left>
      <Rigth>
        <Wrapper>
          {services.map((e) => (
            <Item key={e.id}>
              <ItemInfo>
                <Title>{e.title}</Title>
                <Desc>{e.description}</Desc>
              </ItemInfo>
              <ItemImg src={e.img} />
            </Item>
          ))}
        </Wrapper>
      </Rigth>
    </Section>
  );
};

export default Index;

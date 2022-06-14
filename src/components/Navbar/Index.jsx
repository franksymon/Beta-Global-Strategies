import React from "react";

//Styles
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Menu,
  MenuList,
  MenuItem,
  Button,
} from "./style";

const Index = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo>Global Strategies</Logo>
            <Menu>
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Porfolio</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Left>
          <Button>JOIN TODAY</Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Index;

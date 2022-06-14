import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h2`
  font-weight: bold;
  text-decoration: underline 2px crimson;
`;

export const Menu = styled.nav``;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
`;

export const MenuItem = styled.li`
  margin-right: 20px;
  font-size: 18pxpx;
  font-weight: bold;
  color: gray;
`;

export const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

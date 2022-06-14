import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  gap: 20px;
`;

export const Left = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  border-bottom: 6px solid black;
  border-left: 6px solid black;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;

export const Rigth = styled.div`
  width: 60%;
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  height: 90vh;
  overflow-y: auto;
`;

export const Item = styled.li`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  gap: 20px;
  margin-right: 10px;
`;

export const ItemInfo = styled.div`
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  :hover {
    background-color: lightgray;
  }
`;

export const Title = styled.h4`
  margin-bottom: 10px;
  font-style: italic;
`;

export const Desc = styled.p`
  font-size: 14px;
`;

export const ItemImg = styled.img`
  width: 150px;
  height: 115px;
  object-fit: cover;
  border-bottom: 4px solid darkgray;
  border-left: 4px solid darkgray;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;

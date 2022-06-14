import styled from "styled-components";

export const Section = styled.section`
  display: flex;

  height: 100vh;
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 80%;
  border-radius: 50%;
`;

export const Rigth = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 55px;
`;

export const SubTitle = styled.span`
  font-size: 26px;
  font-style: italic;
  color: #333;
  letter-spacing: 3px;
  text-align: right;
  text-decoration: underline 3px crimson;
  margin-bottom: 20px;
`;

export const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

export const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
  letter-spacing: 2px;
`;

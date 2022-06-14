import styled from "styled-components";

export const Section = styled.section`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  align-items: center;
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  width: 80%;
`;

export const Desc = styled.p`
  width: 80%;
  margin-top: 20px;
  font-size: 20px;
`;

export const Info = styled.div`
  width: 80%;
  margin-top: 30px;
  display: flex;
  gap: 50px;
  align-items: center;
`;

export const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Phone = styled.p`
  color: #f0667d;
  font-weight: bold;
`;

export const Contactext = styled.span`
  color: gray;
  margin-top: 5px;
`;

export const Right = styled.div`
  width: 50%;
`;
export const Image = styled.img`
  width: 100%;
`;

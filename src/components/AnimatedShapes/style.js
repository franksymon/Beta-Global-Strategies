import styled from "styled-components";

export const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  animation: square 20s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(80vw, 45vh);
    }
  }
`;

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: orangered;
  opacity: 0.7;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;
  animation: circle 20s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(90vw, -45vh);
    }
  }
`;

export const Rectan = styled.div`
  width: 50px;
  height: 100px;
  background-color: greenyellow;
  opacity: 0.5;
  position: absolute;
  top: 300px;
  left: -20px;
  z-index: -1;
  animation: rect 20s linear alternate infinite;
  @keyframes rect {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

import styled, { css } from "styled-components";

export const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(74% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;

export const AboutShape = styled.div`
  ${Shape}
  clip-path: polygon(74% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: #c9415c;
`;

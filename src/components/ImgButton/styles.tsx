import styled from "styled-components";

interface BtnParams {
  dimension: number;
  borderRadius: number;
  bgColor: string;
  hoverBgColor?: string;
}

const Btn = styled.button<BtnParams>`
  width: ${(prop) => prop.dimension}rem;
  height: ${(prop) => prop.dimension}rem;
  border: none;
  border-radius: ${(prop) => prop.borderRadius}rem;
  background-color: ${(prop) => prop.bgColor};

  :hover {
    background-color: ${(prop) => prop.hoverBgColor};
  }
`;

export { Btn };

import styled from "styled-components";

const Wrapper = styled.div`
  gap: 5rem;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

interface textParametres {
  size: number;
  weight: number;
  color?: string;
}

const Text = styled.p<textParametres>`
  font-size: ${(prop) => prop.size}rem;
  font-weight: ${(prop) => prop.weight};
  color: ${(prop) => prop.color};
`;

export { Wrapper, Text };

import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  padding: 0 3rem;
  height: 6rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: regular;
  border-radius: 1rem;
  color: ${palette.outcastGray};
  background-color: ${palette.bgGray};
`;

export { Container };

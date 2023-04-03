import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.bgGray};
`;

const Wrapper = styled.div`
  width: 98%;
  height: 95%;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
`;

export { Container, Wrapper };

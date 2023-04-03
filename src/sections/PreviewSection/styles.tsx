import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Rectangle = styled.div`
  height: 100%;
  border-radius: 2rem;
  background-color: ${palette.rosesAreRed};
`;

const ImgContainer = styled.div`
  top: 0;
  left: 100%;
  height: 100%;
  position: absolute;
  transform: translate(-100%, 0);
`;

const Img = styled.img`
  height: 100%;
`;

export { Container, Rectangle, ImgContainer, Img };

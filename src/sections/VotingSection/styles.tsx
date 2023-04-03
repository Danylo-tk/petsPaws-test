import styled from "styled-components";

const ImgContainer = styled.div`
  height: 35rem;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  top: 0;
  height: 35rem;
  position: absolute;
`;

export { ImgContainer, Img };

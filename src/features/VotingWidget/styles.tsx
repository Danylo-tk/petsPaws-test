import styled from "styled-components";

const ImgContainer = styled.div`
  height: 35rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  top: 0;
  height: 100%;
  position: absolute;
`;

export { ImgContainer, Img };

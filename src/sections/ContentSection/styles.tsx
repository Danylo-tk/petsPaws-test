import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  gap: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentPart = styled.div`
  height: 86vh;
  overflow: auto;
  border-radius: 2rem;
  background-color: #fff;
`;

const ContentWrapper = styled.div`
  gap: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  gap: 1rem;
  display: flex;
`;

const SectionLabel = styled.div`
  padding: 0 3rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  border-radius: 1rem;
  color: #fff;
  background-color: ${palette.pinkPanter};
`;

const ImageContainer = styled.div`
  height: 35rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  top: 0;
  height: 100%;
  position: absolute;
  border-radius: 2rem;
`;

export {
  Container,
  ContentPart,
  ContentWrapper,
  Header,
  SectionLabel,
  ImageContainer,
  Image,
};

import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  gap: 2rem;
  display: flex;
`;

const CardContainer = styled.div`
  width: 13.8rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

interface CardProps {
  cardColor: string;
}

const ImgContainer = styled.div<CardProps>`
  width: 100%;
  height: 19rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  background-color: ${(prop) => prop.cardColor};

  :hover {
    border: 0.4rem solid ${palette.rosesAreRed};
  }

  :active {
    border: 0.4rem solid ${palette.pinkPanter};
  }
`;

const Btn = styled.button`
  height: 3.6rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  text-decoration: none;
  background-color: #fff;
  color: ${palette.pinkPanter};

  :hover {
    background-color: ${palette.rosesAreRed};
  }

  :active {
    color: #fff;
    background-color: ${palette.pinkPanter};
  }
`;

export { Container, CardContainer, ImgContainer, Btn };

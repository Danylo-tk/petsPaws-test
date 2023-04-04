import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.ul`
  position: relative;
  height: 8rem;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.ul`
  top: -70%;
  width: 25rem;
  height: 100%;
  position: absolute;
  list-style: none;
  display: flex;
  border: 0.4rem solid white;
  border-radius: 2rem;
  overflow: hidden;

  li {
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li:nth-child(1) {
    background-color: ${palette.cannabisGreen};
  }

  li:nth-child(2) {
    border-left: 0.4rem solid white;
    border-right: 0.4rem solid white;
    background-color: ${palette.pinkPanter};
  }

  li:nth-child(3) {
    background-color: ${palette.peachYellow};
  }
`;

const VoteIcon = styled.span`
  font-size: 4rem;
`;

export { Container, Wrapper, VoteIcon };

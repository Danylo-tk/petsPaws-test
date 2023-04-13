import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.form`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  background-color: #fff;
`;

const Search = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 2rem;
  border-radius: 2rem;
  color: ${palette.almostBlack};

  :focus {
    outline: none;
  }
`;

export { Search, Container };

import styled from "styled-components";
import palette from "../../styles/palette";

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
  border-radius: 2rem;
`;

const Actions = styled.div`
  margin-top: -5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const ActionBox = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: ${palette.outcastGray};
  border-radius: 1rem;
  background-color: ${palette.ghostGray};
`;

const TimeBox = styled(ActionBox)`
  margin: 0 1rem;
  width: 6rem;
  height: 3rem;
  justify-content: center;
  color: black;
  border-radius: 0.5rem;
  background-color: white;
`;

const IdBlack = styled.span`
  padding: 0 0.5rem;
  color: black;
  font-size: 1.6rem;
  font-weight: 500;
`;

interface VoteIconProps {
  vote: "Likes" | "Favourites" | "Dislikes";
}

const VoteIcon = styled.span<VoteIconProps>`
  right: 1rem;
  position: absolute;
  font-size: 3rem;
  color: ${(props) => {
    switch (props.vote) {
      case "Likes":
        return palette.cannabisGreen;
      case "Favourites":
        return palette.pinkPanter;
      case "Dislikes":
        return palette.peachYellow;
    }
  }};
`;

export { ImgContainer, Img, Actions, ActionBox, TimeBox, IdBlack, VoteIcon };

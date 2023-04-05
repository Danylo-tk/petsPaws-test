import {
  useFavouriteImgMutation,
  useVoteImgMutation,
} from "../../features/api/apiSlice";
import { Container, Wrapper, VoteIcon } from "./styles";

interface ButtonsProps {
  imageId: number | undefined;
  imageRefetch: Function;
}

const VotingButtons = ({ imageId, imageRefetch }: ButtonsProps) => {
  const [voteImg] = useVoteImgMutation();
  const [favouriteImg] = useFavouriteImgMutation();

  return (
    <Container>
      <Wrapper>
        <li
          onClick={() => {
            const voteValue: number = 1;
            voteImg({ imageId, voteValue });
            imageRefetch();
          }}
        >
          <VoteIcon className="material-symbols-outlined">
            sentiment_satisfied
          </VoteIcon>
        </li>
        <li
          onClick={() => {
            favouriteImg(imageId);
            imageRefetch();
          }}
        >
          <VoteIcon className="material-symbols-outlined">favorite</VoteIcon>
        </li>
        <li
          onClick={() => {
            const voteValue: number = -1;
            voteImg({ imageId, voteValue });
            imageRefetch();
          }}
        >
          <VoteIcon className="material-symbols-outlined">
            sentiment_dissatisfied
          </VoteIcon>
        </li>
      </Wrapper>
    </Container>
  );
};

export default VotingButtons;

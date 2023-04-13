import {
  useFavouriteImgMutation,
  useVoteImgMutation,
} from "../../features/api/votingApiSlice";
import { useAppDispatch } from "../../app/hooks";
import {
  addVote,
  addImageId,
  addVotesTime,
} from "../../features/VotingWidget/votingWidgetSlice";
import { Container, Wrapper, VoteIcon } from "./styles";

interface ButtonsProps {
  imageId: number;
  imageRefetch: Function;
}

const VotingButtons = ({ imageId, imageRefetch }: ButtonsProps) => {
  const [voteImg] = useVoteImgMutation();
  const [favouriteImg] = useFavouriteImgMutation();
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Wrapper
        // setting onClick actions that are common for all child elelments:
        onClick={() => {
          dispatch(addImageId(imageId.toString()));
          const now = new Date();
          const hours = now.getHours();
          const minutes = now.getMinutes();
          dispatch(addVotesTime(`${hours}:${minutes}`));
          imageRefetch();
        }}
      >
        <li
          onClick={() => {
            //so that later on we will be able to distinguish what is like and what is dislike I'm setting voteValue:
            const voteValue: number = 1; //voteValue = 1 means LIKE,
            voteImg({ imageId, voteValue });
            dispatch(addVote("Likes"));
          }}
        >
          <VoteIcon className="material-symbols-outlined">
            sentiment_satisfied
          </VoteIcon>
        </li>
        <li
          onClick={() => {
            favouriteImg(imageId);
            // the Cat API processes favourites seperaly from likes and dislikes
            dispatch(addVote("Favourites"));
          }}
        >
          <VoteIcon className="material-symbols-outlined">favorite</VoteIcon>
        </li>
        <li
          onClick={() => {
            const voteValue: number = -1; //voteValue = -1 means DISLIKE
            voteImg({ imageId, voteValue });
            dispatch(addVote("Dislikes"));
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

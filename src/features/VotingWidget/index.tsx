import { useGetRandImgQuery } from "../api/apiSlice";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import {
  ActionBox,
  Actions,
  IdBlack,
  Img,
  ImgContainer,
  TimeBox,
  VoteIcon,
} from "./styles";
import loader from "../../assets/roundLoader.svg";
import VotingButtons from "../../components/VotingButtons";

const VotingWidget = () => {
  const {
    data: randImg,
    isFetching,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetRandImgQuery();

  //getting all of the necessary data to display in actions log:
  const votes = useAppSelector((state: RootState) =>
    state.votingWidget.votes.slice().reverse()
  );
  const imagesIds = useAppSelector((state: RootState) =>
    state.votingWidget.imagesIds.slice().reverse()
  );
  const votesTime = useAppSelector((state: RootState) =>
    state.votingWidget.votesTime.slice().reverse()
  );

  // working with image fetching:
  let imageContent;
  if (isFetching) {
    imageContent = <img src={loader} alt="" />;
  } else if (isSuccess) {
    imageContent = <Img src={randImg?.url} alt="Cat image" />;
  } else if (isError) {
    console.log(error);
  }

  // creating a list of user actions:
  let renderedActionsLog = votes.map((vote, index) => (
    <ActionBox key={index}>
      <TimeBox>{votesTime[index]}</TimeBox>
      Image ID: <IdBlack>{imagesIds[index]}</IdBlack> was added to {vote}
      {vote === "Likes" ? (
        <VoteIcon vote={vote} className="material-symbols-outlined">
          sentiment_satisfied
        </VoteIcon>
      ) : vote === "Favourites" ? (
        <VoteIcon vote={vote} className="material-symbols-outlined">
          favorite
        </VoteIcon>
      ) : vote === "Dislikes" ? (
        <VoteIcon vote={vote} className="material-symbols-outlined">
          sentiment_dissatisfied
        </VoteIcon>
      ) : null}
    </ActionBox>
  ));

  return (
    <>
      {/* user looking at a random image */}
      <ImgContainer>{imageContent}</ImgContainer>
      {/* then voting */}
      <VotingButtons
        imageId={randImg?.id as number}
        imageRefetch={refetch}
      />{" "}
      {/* and seeing their actions log */}
      <Actions>{renderedActionsLog}</Actions>
    </>
  );
};

export default VotingWidget;

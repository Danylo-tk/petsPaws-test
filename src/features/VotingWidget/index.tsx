import { useGetRandImgQuery } from "../api/apiSlice";
import { Img, ImgContainer } from "./styles";
import loader from "../../assets/roundLoader.svg";
import VotingButtons from "../../components/VotingButtons";

const VotingWidget = () => {
  const {
    data: randImg,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetRandImgQuery("");

  let content;
  if (isLoading) {
    content = <img src={loader} alt="" />;
  } else if (isSuccess) {
    content = (
      <>
        <Img src={randImg?.url} alt="Cat image" />
      </>
    );
  } else if (isError) {
    console.log(error);
  }

  return (
    <>
      <ImgContainer>{content}</ImgContainer>
      <VotingButtons />
    </>
  );
};

export default VotingWidget;

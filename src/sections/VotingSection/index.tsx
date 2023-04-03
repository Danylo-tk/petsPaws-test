import ContentSection from "../ContentSection";
import { Img, ImgContainer } from "./styles";
import sample from "../../assets/sample-img.png";
import VotingWidget from "../../components/VotingWidget";

const VotingSection = () => {
  return (
    <ContentSection sectionName="voting">
      <ImgContainer>
        <Img src={sample} alt="" />
      </ImgContainer>

      <VotingWidget />
    </ContentSection>
  );
};

export default VotingSection;

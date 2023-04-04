import ContentSection from "../ContentSection";
import VotingWidget from "../../features/VotingWidget";

const VotingSection = () => {
  return (
    <ContentSection sectionName="voting">
      <VotingWidget />
      <p>actions log</p>
    </ContentSection>
  );
};

export default VotingSection;

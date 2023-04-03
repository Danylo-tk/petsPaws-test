import { ReactElement, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ContentPart,
  ContentWrapper,
  Header,
  SectionLabel,
} from "./styles";
import ImgButton from "../../components/ImgButton";
import palette from "../../styles/palette";
import Navbar from "../../components/Navbar";

interface TemplateProps {
  sectionName: string;
  children: ReactNode | ReactElement;
}

const ContentSection = ({ sectionName, children }: TemplateProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Navbar />

      <ContentPart>
        <ContentWrapper>
          <Header>
            <ImgButton
              onClick={() => navigate(-1)}
              icon={"arrow_back"}
              dimension={4}
              iconSize={3}
              borderRadius={1}
              bgColor={palette.rosesAreRed}
              iconColor={palette.pinkPanter}
            ></ImgButton>

            <SectionLabel>{sectionName}</SectionLabel>
          </Header>

          {children}
        </ContentWrapper>
      </ContentPart>
    </Container>
  );
};

export default ContentSection;

import { ReactElement, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import {
  useGetBreedsQuery,
  useGetSingleBreedQuery,
} from "../../features/api/searchFieldApiSlice";
import {
  Container,
  ContentPart,
  ContentWrapper,
  Header,
  Image,
  ImageContainer,
  SectionLabel,
} from "./styles";
import palette from "../../styles/palette";
import loader from "../../assets/roundLoader.svg";
import ImgButton from "../../components/ImgButton";
import Navbar from "../../components/Navbar";

//setting types for content section props
interface TemplateProps {
  sectionName: string;
  children: ReactNode | ReactElement;
}

const ContentSection = ({ sectionName, children }: TemplateProps) => {
  //getting search value from search input
  const searchValue = useAppSelector(
    (state: RootState) => state.searchField.searchValue
  );
  //getting a list of all breeds
  const { data: allBreeds } = useGetBreedsQuery();
  const navigate = useNavigate();

  interface Breed {
    id: string;
  }

  //finding breed id from a list of all breeds based on user inputted breed name
  const findIdByBreedName = (name: string): Breed | undefined => {
    return allBreeds?.find((breed) => breed.name === name);
  };

  //getting searched breed information
  const [searchedBreed, setSearchedBreed] = useState<Breed>();
  const { data: breed, refetch } = useGetSingleBreedQuery(searchedBreed?.id);
  useEffect(() => {
    setSearchedBreed(findIdByBreedName(searchValue));
    refetch();
  }, [searchValue]);

  //if search is empty - do not display search section
  if (searchValue.length == 0) {
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
  } else {
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

              <SectionLabel>Search</SectionLabel>
            </Header>

            {breed?.url ? (
              <ImageContainer>
                <Image src={breed?.url} alt="Cat image" />
              </ImageContainer>
            ) : (
              <ImageContainer>
                <img src={loader} alt="" />
              </ImageContainer>
            )}
          </ContentWrapper>
        </ContentPart>
      </Container>
    );
  }
};

export default ContentSection;

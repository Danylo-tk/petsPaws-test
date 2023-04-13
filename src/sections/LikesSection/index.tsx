import { useEffect } from "react";
import {
  useGetVotesQuery,
  useDeleteVoteMutation,
} from "../../features/api/votingApiSlice";
import palette from "../../styles/palette";
import {
  GalleryGrid,
  IconBox,
  Image,
  ImageContainer,
  ImageWrapper,
  Overlay,
} from "./styles";
import ContentSection from "../ContentSection";
import EmptyBox from "../../components/EmptyBox";

const LikesSection = () => {
  const { data: votes, refetch } = useGetVotesQuery();
  const [deleteImageId] = useDeleteVoteMutation();

  // refetching gallery when we add new images
  useEffect(() => {
    refetch();
  }, [refetch]);

  if (votes?.filter((vote) => vote.value == 1)?.length == 0) {
    // if we have no images to display:
    return (
      <ContentSection sectionName="likes">
        <EmptyBox />
      </ContentSection>
    );
  } else {
    const content = votes
      ?.filter((vote) => vote.value == 1) // looking only for likes images to display
      .map((vote) => (
        <ImageContainer key={vote.id}>
          <ImageWrapper>
            <Image src={vote.image.url} />
          </ImageWrapper>

          {/* Overlay on image hover: */}
          <Overlay>
            <IconBox
              onClick={() =>
                deleteImageId(vote.id).then(() => {
                  refetch();
                })
              }
            >
              <span
                className="material-symbols-outlined"
                style={{ color: palette.pinkPanter, fontSize: "3rem" }}
              >
                sentiment_satisfied
              </span>
            </IconBox>
          </Overlay>
        </ImageContainer>
      ));

    return (
      <ContentSection sectionName="likes">
        <GalleryGrid>{content}</GalleryGrid>
      </ContentSection>
    );
  }
};

export default LikesSection;

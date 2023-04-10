import { useEffect } from "react";
import {
  useGetFavouritesQuery,
  useDeleteFavouriteMutation,
} from "../../features/api/apiSlice";
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

const FavouritesSection = () => {
  const { data: favourites, refetch } = useGetFavouritesQuery();
  const [deleteImageId] = useDeleteFavouriteMutation();

  // refetching gallery when we add new images
  useEffect(() => {
    refetch();
  }, [refetch]);

  if (favourites?.length == 0) {
    // if we have no images to display:
    return (
      <ContentSection sectionName="favourites">
        <EmptyBox />
      </ContentSection>
    );
  } else {
    const content = favourites?.map((favourite) => (
      <ImageContainer key={favourite.id}>
        <ImageWrapper>
          <Image src={favourite.image.url} />
        </ImageWrapper>

        {/* Overlay on image hover: */}
        <Overlay>
          <IconBox
            onClick={() =>
              deleteImageId(favourite.id).then(() => {
                refetch();
              })
            }
          >
            <span
              className="material-symbols-outlined"
              style={{ color: palette.pinkPanter, fontSize: "3rem" }}
            >
              favorite
            </span>
          </IconBox>
        </Overlay>
      </ImageContainer>
    ));

    return (
      <ContentSection sectionName="favourites">
        <GalleryGrid>{content}</GalleryGrid>
      </ContentSection>
    );
  }
};

export default FavouritesSection;

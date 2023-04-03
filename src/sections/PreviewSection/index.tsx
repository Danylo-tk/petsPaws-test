import { Container, Img, ImgContainer, Rectangle } from "./styles";
import img from "../../assets/girl-and-pet.png";

const PreviewSection = () => {
  return (
    <Container>
      <Rectangle></Rectangle>
      <ImgContainer>
        <Img src={img} alt="hero image" />
      </ImgContainer>
    </Container>
  );
};

export default PreviewSection;

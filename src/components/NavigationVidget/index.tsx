import { Link } from "react-router-dom";
import { Btn, CardContainer, Container, ImgContainer } from "./styles";
import palette from "../../styles/palette";
import phone from "../../assets/images-search.png";
import paper from "../../assets/vote-table.png";
import cat from "../../assets/pet-breeds.png";

const NavigationVidget = () => {
  return (
    <Container>
      <Link to="/vote">
        <CardContainer>
          <ImgContainer cardColor={palette.violetsAreBlue}>
            <div>
              <img src={paper} alt="" />
            </div>
          </ImgContainer>

          <Btn>voting</Btn>
        </CardContainer>
      </Link>

      <Link to="/breeds">
        <CardContainer>
          <ImgContainer cardColor={palette.cannabisGreen}>
            <div>
              <img src={cat} alt="" />
            </div>
          </ImgContainer>

          <Btn>breeds</Btn>
        </CardContainer>
      </Link>

      <Link to="/galerry">
        <CardContainer>
          <ImgContainer cardColor={palette.peachYellow}>
            <div>
              <img src={phone} alt="" />
            </div>
          </ImgContainer>

          <Btn>gallery</Btn>
        </CardContainer>
      </Link>
    </Container>
  );
};

export default NavigationVidget;

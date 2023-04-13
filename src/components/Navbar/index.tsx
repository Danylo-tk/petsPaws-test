import { Link } from "react-router-dom";
import { Container } from "./styles";
import palette from "../../styles/palette";
import ImgButton from "../ImgButton";
import SearchField from "../../features/SearchField";

const Navbar = () => {
  return (
    <Container>
      <SearchField />
      <Link to="/likes">
        <ImgButton
          icon={"sentiment_satisfied"}
          dimension={6}
          iconSize={3.5}
          borderRadius={2}
          bgColor="#fff"
          iconColor={palette.pinkPanter}
          hoverBgColor={palette.rosesAreRed}
        />
      </Link>

      <Link to="/favourites">
        <ImgButton
          icon={"favorite"}
          dimension={6}
          iconSize={3.5}
          borderRadius={2}
          bgColor="#fff"
          iconColor={palette.pinkPanter}
          hoverBgColor={palette.rosesAreRed}
        />
      </Link>

      <Link to="/dislikes">
        <ImgButton
          icon={"sentiment_dissatisfied"}
          dimension={6}
          iconSize={3.5}
          borderRadius={2}
          bgColor="#fff"
          iconColor={palette.pinkPanter}
          hoverBgColor={palette.rosesAreRed}
        />
      </Link>
    </Container>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { Container, Search, SearchField } from "./styles";
import palette from "../../styles/palette";
import ImgButton from "../ImgButton";

const Navbar = () => {
  return (
    <Container>
      <Search>
        <SearchField type="text" placeholder="Search for breeds by name" />
        <ImgButton
          icon={"search"}
          dimension={4}
          iconSize={2.5}
          borderRadius={1}
          bgColor={palette.rosesAreRed}
          iconColor={palette.pinkPanter}
        />
      </Search>

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

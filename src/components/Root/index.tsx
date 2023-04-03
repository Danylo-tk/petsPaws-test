import NavSection from "../../sections/NavSection";
import PreviewSection from "../../sections/PreviewSection";
import GlobalStyle from "../../styles/GlobalStyle";
import { Container, Wrapper } from "./styles";
import { Routes, Route } from "react-router-dom";
import VotingSection from "../../sections/VotingSection";
import FavouritesSection from "../../sections/FavouritesSection";
import DislikesSection from "../../sections/DislikesSection";
import LikesSection from "../../sections/LikesSection";

const Root = () => {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Wrapper>
          <NavSection />

          <Routes>
            <Route path="/" element={<PreviewSection />} />
            <Route path="/vote" element={<VotingSection />} />
            <Route path="/likes" element={<LikesSection />} />
            <Route path="/favourites" element={<FavouritesSection />} />
            <Route path="/dislikes" element={<DislikesSection />} />
          </Routes>
        </Wrapper>
      </Container>
    </>
  );
};

export default Root;

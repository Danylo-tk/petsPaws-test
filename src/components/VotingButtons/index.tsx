import { Container, Wrapper, VoteIcon } from "./styles";

const VotingButtons = () => {
  return (
    <Container>
      <Wrapper>
        <li>
          <VoteIcon className="material-symbols-outlined">
            sentiment_satisfied
          </VoteIcon>
        </li>
        <li>
          <VoteIcon className="material-symbols-outlined">favorite</VoteIcon>
        </li>
        <li>
          <VoteIcon className="material-symbols-outlined">
            sentiment_dissatisfied
          </VoteIcon>
        </li>
      </Wrapper>
    </Container>
  );
};

export default VotingButtons;

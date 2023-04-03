import { Text, Wrapper } from "./styles";
import palette from "../../styles/palette";
import logo from "../../assets/logo.png";
import NavigationVidget from "../../components/NavigationVidget";

const NavSection = () => {
  return (
    <div>
      <Wrapper>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <Text size={4.4} weight={500}>
            Hi there!
          </Text>
          <Text color={palette.outcastGray} size={2} weight={400}>
            Welcome to Front-end test
          </Text>
        </div>
        <div>
          <Text size={2} weight={500}>
            Lets start using The Cat API
          </Text>
          <NavigationVidget />
        </div>
      </Wrapper>
    </div>
  );
};

export default NavSection;

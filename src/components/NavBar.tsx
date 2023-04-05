import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/4199429.jpg";

const NavBar = () => {
  return (
    <HStack p={2}>
      <Image src={logo} boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;

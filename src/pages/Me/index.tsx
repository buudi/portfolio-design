import { Flex, useDisclosure } from "@chakra-ui/react";

import Navbar from "../Home/Navbar";
import MenuOverlay from "../../components/MenuOverlay";

import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Stack from "./Stack";
import Certifications from "./Certifications";
import Background from "./Background";
import HireMe from "./HireMe";

const Me = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Navbar onOpen={onOpen} />
      <MenuOverlay isOpen={isOpen} onClose={onClose} />
      <Flex w={"100%"} bg={"#3B435E"}>
        <Hero1 />
      </Flex>
      <Hero2 />
      <Stack />
      {/* <Certifications />
      <Background />   */}
      <HireMe />
    </div>
  );
};

export default Me;

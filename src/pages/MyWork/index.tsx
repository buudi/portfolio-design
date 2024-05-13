import { Flex, Box, useDisclosure, Container, Heading } from "@chakra-ui/react";

import Navbar from "../Home/Navbar";
import MenuOverlay from "../../components/MenuOverlay";

import Project1 from "./SelectedProjectCards/Project1";
// import Project2 from "./SelectedProjectCards/Project2";
import SmallProject from "./SelectedProjectCards/SmallProject"

const MyWork = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Navbar onOpen={onOpen} />
      <MenuOverlay isOpen={isOpen} onClose={onClose} />
      <Flex w={"100%"} bg={"#3B435E"} direction={"column"} justify={"center"}>
        <Box mt={"1rem"} mb={"2rem"} color={"white"} textAlign={"center"}>
          <p style={{ fontSize: "3.5rem", fontWeight: "700" }}>/my-work</p>
          <p
            style={{
              fontFamily: "halant",
              fontSize: "19px",
              margin: "0 30px 0 30px",
            }}
          >
            A selection of projects I worked on, and some other things I've
            built.
          </p>
        </Box>
      </Flex>
      {/* Selected Projects section: */}
      <Container minW={"60%"}>
        <Heading mt={"2rem"} textAlign={"center"}>
          Selected Projects
        </Heading>
        <Project1 />
        {/* <SmallProject /> */}
        {/* <Project2 />
        <Project1 />
        <Project2 /> */}
      </Container>
      {/* Other Projects section: */}
    </>
  );
};

export default MyWork;

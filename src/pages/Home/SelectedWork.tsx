import { Flex, Heading, Container } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

import Project1 from "../MyWork/SelectedProjectCards/Project1";

const SelectedWork = () => {
  const isLargerThan1280 = useMediaQuery({ minWidth: "1280px" });

  return (
    <Flex mt={"30px"} direction={"column"} align={"center"}>
      <Heading>Selected Work</Heading>
      <Container minW={"60%"}>
        <Flex direction={`${!isLargerThan1280 ? "column" : "row"}`}>
          {/* <Box mr={"35px"} mt="10px" w={"400px"} h={"240px"} bg={"#D9D9D9"}></Box>
        <Box mr={"35px"} mt="10px" w={"400px"} h={"240px"} bg={"#D9D9D9"}></Box>
        <Box w={"400px"} mt="10px" h={"240px"} bg={"#D9D9D9"}></Box> */}
          <Project1 />
        </Flex>
      </Container>
    </Flex>
  );
};

export default SelectedWork;

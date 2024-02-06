import { Flex, Box, Heading } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
const SelectedWork = () => {

  const isLargerThan1280 = useMediaQuery({minWidth: "1280px"});
  
  return (
    <Flex mt={"30px"} direction={"column"} align={"center"}>
      <Heading>Selected Work</Heading>
      <Flex mt={"30px"} direction={`${!isLargerThan1280 ? "column" : "row"}`}>
        <Box mr={"35px"} mt="10px" w={"400px"} h={"240px"} bg={"#D9D9D9"}></Box>
        <Box mr={"35px"} mt="10px" w={"400px"} h={"240px"} bg={"#D9D9D9"}></Box>
        <Box w={"400px"} mt="10px" h={"240px"} bg={"#D9D9D9"}></Box>
      </Flex>
    </Flex>
  );
};

export default SelectedWork;
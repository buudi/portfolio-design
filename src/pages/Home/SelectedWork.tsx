import { Flex, Box, useMediaQuery } from "@chakra-ui/react";

const SelectedWork = () => {

  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  
  return (
    <Flex mt={"30px"} direction={"column"} align={"center"}>
      <h1>Selected Work</h1>
      <Flex mt={"30px"} direction={`${!isLargerThan1280 ? "column" : "row"}`}>
        <Box mr={"35px"} mt="10px" w={"400px"} h={"240px"} bg={"#D9D9D9"}></Box>
        <Box mr={"35px"} mt="10px" w={"400px"} h={"240px"} bg={"#D9D9D9"}></Box>
        <Box w={"400px"} mt="10px" h={"240px"} bg={"#D9D9D9"}></Box>
      </Flex>
    </Flex>
  );
};

export default SelectedWork;
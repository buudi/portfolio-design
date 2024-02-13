import { Box, Flex, Text } from "@chakra-ui/react";

const Technology = () => {
 
  return (
    <Box mt={"2rem"}>
      <Flex>
        <Box borderRadius={"20px"} w={"80px"} h={"80px"} bg={"#D9D9D9"}></Box>
        <Box alignSelf={"center"} ml={"12px"} color={"white"}>
          <Text fontFamily={"inter"} fontWeight={"bold"} fontSize={"1.5rem"}>
            Typescript
          </Text>
          <Text fontFamily={"inter"}>web development</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Technology;

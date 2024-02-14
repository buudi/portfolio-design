import { Heading, Text, Box, Flex, Container } from "@chakra-ui/react";

const Certifications = () => {
  return (
    <Container mt={"3rem"} maxW={"container.xl"}>
      <Heading textAlign={"center"} fontFamily={"inter"} fontWeight={"bold"} fontSize={"3rem"}>
        Certifications
      </Heading>
      <Flex align={"center"} direction={"column"} >
        <Flex mt={"2rem"}>
          <Box bg={"#D9D9D9"} w={"620px"} h={"320px"}></Box>
          <Text alignSelf={"center"} ml={"2rem"} minW={"50%"}>
            Hong Kong University of Science and Technology ........
          </Text>
        </Flex>
        <Flex mt={"2rem"}>
          <Box bg={"#D9D9D9"} w={"620px"} h={"320px"}></Box>
          <Text alignSelf={"center"} ml={"2rem"} minW={"50%"}>
            Amazon Web Services ........
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Certifications;

import { Container, Box, Flex, Heading, Text } from "@chakra-ui/react";

import { useMediaQuery } from "react-responsive";

const Hero2 = () => {
  const isMobile = !useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <Container mt={"4rem"} mb={"2rem"} maxW={isMobile ? "85%" : "container.xl"}>
      <Flex direction="column">
        <Heading
          fontWeight={"600"}
          fontSize={"3rem"}
          fontFamily={"halant"}
          textAlign={"center"}
        >
          My Guiding Principles
        </Heading>

        <Box mt={"5rem"}>
          <Heading
            fontFamily={"halant"}
            textAlign={"center"}
            fontWeight={"500"}
          >
            01 A lifelong learner by nature, fueled by an insatiable curiosity
          </Heading>

          <Flex direction={isMobile ? "column" : "row"} mt={"1.5rem"}>
            <Text
              textAlign={isMobile ? "center" : "right"}
              alignSelf={"center"}
              fontFamily={"halant"}
              fontWeight={"400"}
              fontSize={"1.6rem"}
              mr={"2vw"}
            >
              I thrive on new knowledge and experiences. This thirst for
              understanding drives me to explore, challenge myself, and
              constantly seek new perspectives and skills.
            </Text>
            <Box bg={"#D9D9D9"} w={"60vw"} h={"300px"}></Box>
          </Flex>
        </Box>

        <Box mt={"5rem"}>
          <Heading
            fontFamily={"halant"}
            textAlign={"center"}
            fontWeight={"500"}
          >
            02 My mind is a welcoming door, open to new ideas and perspectives
          </Heading>

          <Flex direction={isMobile ? "column" : "row-reverse"} mt={"1.5rem"}>
            <Text
              textAlign={isMobile ? "center" : "left"}
              alignSelf={"center"}
              fontFamily={"halant"}
              fontWeight={"400"}
              fontSize={"1.6rem"}
              ml={"2vw"}
            >
              Embracing mistakes as inevitable companions on my journey, I
              transform them into valuable insights for future growth.
            </Text>
            <Box bg={"#D9D9D9"} w={"60vw"} h={"300px"}></Box>
          </Flex>
        </Box>

        <Box mt={"5rem"}>
          <Heading
            fontFamily={"halant"}
            textAlign={"center"}
            fontWeight={"500"}
          >
            03 I believe in the power of "we" over "me".
          </Heading>

          <Flex direction={isMobile ? "column" : "row"} mt={"1.5rem"}>
            <Text
              textAlign={isMobile ? "center" : "right"}
              alignSelf={"center"}
              fontFamily={"halant"}
              fontWeight={"400"}
              fontSize={"1.6rem"}
              mr={"2vw"}
            >
              I value working alongside others to achieve shared goals. Open
              communication, active listening, and mutual respect are the
              cornerstones of my team player approach.
            </Text>
            <Box bg={"#D9D9D9"} w={"60vw"} h={"300px"}></Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Hero2;

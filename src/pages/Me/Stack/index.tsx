import { Flex, Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import Technology from "./Technology";

const Stack = () => {
  const isMobile = !useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <Box bg={"#3B435E"} w={"100%"}>
      <Flex direction={"column"} align={"center"} justify={"center"} p={"2rem"}>
        <Heading
          fontFamily={"inter"}
          textAlign={"center"}
          fontWeight={"600"}
          fontSize={"3rem"}
          color={"white"}
        >
          My Stack
        </Heading>
        <Text
          textAlign={"center"}
          fontFamily={"inter"}
          fontSize={"1.2rem"}
          color={"white"}
          mt={"8px"}
        >
          A list of tools and technologies that I use on a{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            regular basis
          </span>
        </Text>

        <SimpleGrid mt={"22px"} columns={isMobile ? 1 : 2} spacingX={"15vw"}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Technology key={index} />
          ))}
        </SimpleGrid>
        <Heading
          fontFamily={"inter"}
          textAlign={"center"}
          fontWeight={"600"}
          fontSize={"3rem"}
          color={"white"}
          mt={"5rem"}
        >
          Other Skills I Acquire
        </Heading>

        <SimpleGrid mt={"22px"} columns={isMobile ? 1 : 2} spacingX={"15vw"}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Technology key={index} />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Stack;

import { Container, Box, Heading } from "@chakra-ui/react";
import EduCard from "./EduCard";

const Background = () => {
  return (
    <Container mt={"4rem"} maxW={"container.xl"}>
      <Heading fontWeight={"bold"} textAlign={"center"} fontSize={"3rem"}>
        Background
      </Heading>
      <Heading mt={"2rem"} fontWeight={"500"} textAlign={"center"}>
        01 Experiences
      </Heading>
      <Box mt={"1rem"}>
        <EduCard />
        <EduCard /> 
      </Box>
      <Heading mt={"2rem"} fontWeight={"500"} textAlign={"center"}>
        02 Education
      </Heading>
      <Box mt={"1rem"}>
        <EduCard />
        <EduCard />
      </Box>
    </Container>
  );
};

export default Background;

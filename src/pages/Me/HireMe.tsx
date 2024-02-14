import { useState } from "react";
import { Container, Heading, Text, Box, Button, Flex } from "@chakra-ui/react";

const HireMe = () => {
  const [revealEmail, setRevealEmail] = useState(false);
  return (
    <div style={{backgroundColor:"#3B435E"}}>
      <Container
        p={"4rem"}
        color={"white"}
        mt={"4rem"}
        maxW={"container.xl"}
      >
        <Heading
          textAlign={"center"}
          fontFamily={"inter"}
          fontWeight={"bold"}
          fontSize={"3rem"}
        >
          Interested in hiring me?
        </Heading>
        <Text textAlign={"center"} mt={"1 rem"} fontSize={"1.6rem"}>
          I'm currently looking for new opportunities and would love to chat
          with you!
        </Text>
        <Flex mt={"1rem"} justify={"center"}>
          <Button
            colorScheme="blue"
            variant={"solid"}
            onClick={() => setRevealEmail(!revealEmail)}
          >
            {!revealEmail ? "Reveal Email >" : "Hide Email >"}
          </Button>
          {revealEmail && <Box ml={"1rem"}>buudi.dev [at] gmail [dot] com</Box>}
        </Flex>
      </Container>
    </div>
  );
};

export default HireMe;

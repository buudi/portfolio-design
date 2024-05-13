import { Flex, Container, Box, Text, Link, Image } from "@chakra-ui/react";

import { useMediaQuery } from "react-responsive";

import pic from "../../assets/img2.jpg";

const Hero1 = () => {
  const isMobile = !useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <Container mt={"2rem"} mb={"2rem"} maxW={"container.xl"}>
      <Flex direction={isMobile ? "column" : "row"}>
        {/* <Box bg={"#D9D9D9"} w={"80vw"} h={"300px"}> */}
        <Image
          src={pic}
          w={"600px"}
          h={"500px"}
          style={{ border: "3px solid #626984" }}
        />
        {/* </Box> */}
        <Text
          ml={"3vw"}
          mt={isMobile ? "2rem" : "0"}
          maxW={"100%"}
          fontFamily={"halant"}
          fontSize={isMobile ? "30px" : "40px"}
          color={"white"}
          alignSelf={"center"}
        >
          I am Abdullah Yaser Alnadhari, a software developer, currently
          studying computer science at{" "}
          <Link
            href="https://utm.my/"
            target="_blank"
            textDecoration={"underline"}
            _hover={{ color: "#872D4A" }}
          >
            UTM
          </Link>
          .
        </Text>
      </Flex>
    </Container>
  );
};

export default Hero1;

import { Flex, Container, Text, Link, Image, Button } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import pic from "../../assets/img2.jpg";

const Hero1 = () => {
  const isMobile = !useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <Container mt={"2rem"} mb={"2rem"} maxW={"container.xl"}>
      <Flex direction={isMobile ? "column" : "row"} alignItems="center">
        <Image
          src={pic}
          w={"600px"}
          maxW="100%"
          h="auto"
          style={{ border: "3px solid #626984" }}
        />
        <Text
          ml={isMobile ? "0" : "3vw"}
          mt={isMobile ? "2rem" : "0"}
          maxW={"100%"}
          fontFamily={"halant"}
          fontSize={isMobile ? "30px" : "40px"}
          color={"white"}
          alignSelf={"center"}
        >
          I am Abdullah Yaser Alnadhari, I love building software! I am
          currently studying computer science at{" "}
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
        <Button
          as="a"
          href="https://drive.google.com/file/d/11sFA530EWxDKvX4hQ4AWkDqM5BvyHo7g/view?usp=sharing"
          target="_blank"
          mt={isMobile ? "2rem" : "0"}
          ml={isMobile ? "0" : "1rem"}
          w={isMobile ? "100%" : "30%"}
          alignSelf={isMobile ? "center" : "flex-end"}
        >
          View Resume
        </Button>
      </Flex>
    </Container>
  );
};

export default Hero1;

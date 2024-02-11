import { Box, Flex, Heading } from "@chakra-ui/react";
import {
  FaXTwitter,
  FaSquareFacebook,
  FaYCombinator,
  FaSquareReddit,
} from "react-icons/fa6";

const SocialMediaShare = () => {
  return (
    <Box>
      <Heading ml={"1.5rem"} size={"sm"} mt={"2rem"}>
        {" "}
        Share
      </Heading>
      <Flex ml={"1.5rem"} direction={"column"}>
        <FaXTwitter style={{ marginTop: "5px" }} size={"2.5rem"} />
        <FaSquareFacebook
          style={{ marginTop: "5px" }}
          color="#3B5998"
          size={"2.5rem"}
        />
        <FaYCombinator
          style={{ marginTop: "5px" }}
          color="#FF6600"
          size={"2.5rem"}
        />
        <FaSquareReddit
          style={{ marginTop: "5px" }}
          color="#FF5700"
          size={"2.5rem"}
        />
      </Flex>
    </Box>
  );
};

export default SocialMediaShare;

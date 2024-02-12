import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

export default function PostWithLike() {
  return (
    <Box
      w="xs"
      rounded={"sm"}
      my={5}
      mx={[0, 5]}
      overflow={"hidden"}
      bg="white"
      border={"1px"}
      borderColor="black"
      boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
    //   h={"100%"}
    >
      <Flex
        p={"5px"}
        justify={"space-between"}
        borderBottom={"1px solid black"}
      >
        <Heading color={"black"} fontSize={"xl"}>
          1.
        </Heading>
        <Text fontWeight={"semibold"} mr={"1.5rem"}>
          Medium.com{" "}
        </Text>
      </Flex>
      <Box p={4}>
        <Box
          bg="black"
          display={"inline-block"}
          px={2}
          py={1}
          color="white"
          mb={2}
        >
          <Text fontSize={"xs"} fontWeight="medium">
            React
          </Text>
        </Box>
        <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
          React v18.0
        </Heading>
        <Text color={"gray.500"} noOfLines={2}>
          In this post, we will give an overview of what is new in React 18, and
          what it means for the future.
        </Text>
      </Box>
      <HStack borderTop={"1px"} color="black">
        <Flex
          p={4}
          alignItems="center"
          justifyContent={"space-between"}
          roundedBottom={"sm"}
          cursor={"pointer"}
          w="full"
        >
          <Text fontSize={"md"} fontWeight={"semibold"}>
            Read more
          </Text>
          <BsArrowUpRight />
        </Flex>
    
      </HStack>
    </Box>
  );
}

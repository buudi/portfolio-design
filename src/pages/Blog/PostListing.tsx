import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

interface Props {
  marginTop?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tags: any[];
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={"7xl"}>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="3"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="5"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Backend", "Database"]} />
          <Heading marginTop="1">
            <Link to={"/blog/post"}>
              <Text textDecoration="none" _hover={{ textDecoration: "underline dotted" }}>
                Blog post Title; Lorem ipsum dolor sit amet
              </Text>
            </Link>
          </Heading>
          <Text as="p" fontSize="sm">
            <i>03, feb 2024</i>
          </Text>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
            mi tempus imperdiet nulla malesuada pellentesque elit. Lorem ipsum
            dolor sit amet consectetur. Eu sem integer vitae justo. Lectus proin
            nibh nisl condimentum id. Urna molestie at elementum eu facilisis
            sed.
          </Text>
          <Box
            as={"button"}
            mt={"15px"}
            textAlign={"center"}
            borderBottom={"1px solid"}
          >
            <Link to={"/blog/post"}><Text _hover={{textShadow: "#3B435E 1px 0 10px"}}>continue reading...</Text></Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ArticleList;

import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  Code
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
          <Tag size={"md"} variant="solid" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const ArticleListing = () => {
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
                  "https://www.bounteous.com/sites/default/files/insights/2020-02/previews/20200220_blog_.identifying-and-filtering-internal-traffic-from-google-analytics_website.png"
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
            <Link to={"/blog/post/1"}>
              <Text
                textDecoration="none"
                _hover={{ textDecoration: "underline dotted" }}
              >
                How to implement Filtration & Pagination in your REST API with
                Express JS
              </Text>
            </Link>
          </Heading>
          <Text as="p" fontSize="sm">
            <i>15, feb 2024</i>
          </Text>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            In this article I showcase how to implement Filtration and
            Pagination, I then discuss various techniques of implementing
            pagination, simple pagination using JavaScript's native <Code colorScheme="blackAlpha" variant={"subtle"}>slice</Code> {" "}
            method, when to use it, and what security and memory considerations
            it poses, then I showcase an alternative pagination technique that
            scales well and is more suited for real applications with larger
            data sets however more complex and depends on the type of Database
            service and ORM you use.
          </Text>
          <Box
            as={"button"}
            mt={"15px"}
            textAlign={"center"}
            borderBottom={"1px solid"}
          >
            <Link to={"/blog/post/1"}>
              <Text _hover={{ textShadow: "#3B435E 1px 0 10px" }}>
                continue reading...
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ArticleListing;

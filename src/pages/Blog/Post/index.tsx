import { useState } from "react";
import {
  Container,
  Box,
  Tag,
  Heading,
  Text,
  Image,
  Flex,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

import Navbar from "../../Home/Navbar";
import MenuOverlay from "../../../components/MenuOverlay";

import SocialMediaShareMobile from "./SocialMediaShareMobile";
import PostContent from "./PostContent";
import SocialMediaShare from "./SocialMediaShare";

interface PostProps {
  title: string;
  date: string;
  tags: string[];
  imageUrl: string;
  imageUrl_lowRes: string;
  imageAltText: string;
}

const post: PostProps = {
  title: "Blog post Title; Lorem ipsum dolor sit amet",
  date: "03 feb, 2024",
  tags: ["Backend", "Database"],
  imageUrl:
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw",
  imageUrl_lowRes:
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
  imageAltText: "some good alt text",
};

const Post = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const isMobile = !useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {isMobile ? (
        <div style={{ position: "sticky", top: "0" }}>
          <Navbar onOpen={onOpen} />
        </div>
      ) : (
        <Navbar onOpen={onOpen} />
      )}

      <MenuOverlay isOpen={isOpen} onClose={onClose} />

      <Container mt={"7vh"} minW={"70%"} bg={"white"}>
        <Flex direction={"row"}>
          <Box>
            {post.tags.map((tag, index) => (
              <Tag key={index} mr={1} variant={"solid"}>
                {tag}
              </Tag>
            ))}

            <Heading>{post.title}</Heading>
            <Text fontSize="sm">{post.date}</Text>

            {!imgLoaded ? (
              <Image
                w={"100%"}
                h={"400px"}
                mt={"20px"}
                borderRadius="lg"
                src={post.imageUrl_lowRes}
                alt={post.imageAltText}
                objectFit="cover"
                onLoad={() => setImgLoaded(true)}
              />
            ) : (
              <Image
                w={"100%"}
                h={"400px"}
                mt={"20px"}
                borderRadius="lg"
                src={post.imageUrl}
                alt={post.imageAltText}
                objectFit="cover"
              />
            )}

            {isMobile && (
              <Box mt={"10px"}>
                <Heading size={"sm"}>Table Of Contents</Heading>
                <Text>1. Heading 1</Text>
                <Text>&nbsp;&nbsp;&nbsp;&nbsp; 1.1 Heading 1.1</Text>
                <Text>&nbsp;&nbsp;&nbsp;&nbsp; 1.2 Heading 1.2</Text>
                <Text>2. Heading 2</Text>
                <Text>&nbsp;&nbsp;&nbsp;&nbsp; 2.1 Heading 2.1</Text>
                <Text>&nbsp;&nbsp;&nbsp;&nbsp; 2.2 Heading 2.2</Text>
              </Box>
            )}

            <PostContent />
          </Box>
          {!isMobile && (
            <Box
              mt={"8rem"}
              ml={"2rem"}
              style={{ position: "sticky", top: "8rem" }}
              height={"100%"}
              minW={"25%"}
            >
              <Heading size={"sm"}>Table Of Contents</Heading>
              <Link href="#heading1">1. Heading 1</Link>
              <Text>
                <Link href="#heading1.1">
                  &nbsp;&nbsp;&nbsp;&nbsp; 1.1 Heading 1.1
                </Link>
              </Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp; 1.2 Heading 1.2</Text>
              <Text>2. Heading 2</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp; 2.1 Heading 2.1</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp; 2.2 Heading 2.2</Text>

              <SocialMediaShare />
            </Box>
          )}
        </Flex>
        {isMobile && <SocialMediaShareMobile />}
      </Container>
    </div>
  );
};

export default Post;

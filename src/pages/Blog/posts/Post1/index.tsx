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

import Navbar from "../../../Home/Navbar";
import MenuOverlay from "../../../../components/MenuOverlay";

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
  title: "How to implement Filtration & Pagination in your REST API with Express JS",
  date: "15 feb, 2024",
  tags: ["Backend", "Database"],
  imageUrl:
    "https://www.bounteous.com/sites/default/files/insights/2020-02/previews/20200220_blog_.identifying-and-filtering-internal-traffic-from-google-analytics_website.png",
  imageUrl_lowRes:
    "https://www.bounteous.com/sites/default/files/insights/2020-02/previews/20200220_blog_.identifying-and-filtering-internal-traffic-from-google-analytics_website.png",
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

      <Container mt={"7vh"} minW={"container.md"} bg={"white"}>
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


            <PostContent />
          </Box>
         
        </Flex>
      </Container>
    </div>
  );
};

export default Post;

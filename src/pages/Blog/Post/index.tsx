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
} from "@chakra-ui/react";
import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "@chakra-ui/react";

import { useMediaQuery } from "react-responsive";

import {
  FaXTwitter,
  FaSquareFacebook,
  FaSquareReddit,
  FaYCombinator,
} from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

import Navbar from "../../Home/Navbar";
import MenuOverlay from "../../../components/MenuOverlay";

const SocialMediaShare = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialMediaIcons = [
    {
      icon: <FaXTwitter color="black" style={{background:"white"}} size={"2.5rem"} />,
      label: "Twitter",
      link: "twitter.com",
    },
    {
      icon: (
        <FaSquareFacebook
          color="#3B5998"
          size={"2.5rem"}
          style={{ background:"white", marginTop: "0.6rem" }}
        />
      ),
      label: "Facebook",
      link: "facebook.com",
    },
    {
      icon: <FaYCombinator size={"2.5rem"} color="#FF6600" style={{ background:"white", marginTop: "0.6rem" }}  />,
      label: "Hacker News",
      link: "news.ycombinator.com",
    },
    {
      icon: <FaSquareReddit size={"2.5rem"} color="#FF5700" style={{ background:"white", marginTop: "0.6rem" }} />,
      label: "Reddit",
      link: "reddit.com",
    },
  ];

  return (
    <>
      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        placement="top-end"
      >
        <PopoverTrigger>
          <IconButton
            icon={<FaShareAlt />}
            aria-label="Share"
            size="lg"
            bg="blue.900"
            color="#D6DBDF"
            position="fixed"
            bottom="15px"
            right="15px"
            borderRadius="50%"
            onClick={() => setIsOpen(!isOpen)}
          />
        </PopoverTrigger>
        <PopoverContent
          style={{  backgroundColor: "transparent", maxWidth: "5rem", border: "none" }}
        >
          <PopoverArrow />
          {/* <PopoverCloseButton /> */}
          <PopoverBody>
            <Flex direction="column" ml="1rem">
              {socialMediaIcons.map((socialMedia, index) => (
                <Box
                  key={index}
                  as="a"
                  href={socialMedia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-block"
                  p="1" // Reduced padding
                  style={{ fontSize: "1.5rem" }} // Moderate icon size
                >
                  {socialMedia.icon}
                </Box>
              ))}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

const Post = () => {
  const isMobile = !useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div style={{ position: "sticky", top: "0" }}>
        <Navbar onOpen={onOpen} />
      </div>
      <MenuOverlay isOpen={isOpen} onClose={onClose} />

      <Container mt={"7vh"} minW={"70%"} bg={"white"}>
        <Flex direction={"row"}>
          <Box>
            <Tag mr={1} variant={"solid"}>
              Backend
            </Tag>
            <Tag variant={"solid"}>Database</Tag>
            <Heading>Blog post Title; Lorem ipsum dolor sit amet</Heading>
            <Text fontSize="sm">03 feb, 2024</Text>
            <Image
              w={"100%"}
              h={"400px"}
              mt={"20px"}
              borderRadius="lg"
              src={
                "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw"
              }
              alt="some good alt text"
              objectFit="cover"
            />

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

            <Text fontSize={"1.2rem"} mt={"30px"}>
              <Heading size={"lg"}>Heading 1</Heading>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
              Lorem ipsum dolor sit amet consectetur. Eu sem integer vitae
              justo. Lectus proin nibh nisl condimentum id. Urna molestie at
              elementum eu facilisis sed. Vel fringilla est ullamcorper eget. Id
              velit ut tortor pretium viverra suspendisse potenti nullam. Sit
              amet aliquam id diam maecenas ultricies mi eget. Tellus molestie
              nunc non blandit massa. Arcu odio ut sem nulla pharetra. Imperdiet
              massa tincidunt nunc pulvinar sapien et ligula ullamcorper
              malesuada. Libero nunc consequat interdum varius sit amet mattis.
              Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque
              convallis. Eu facilisis sed odio morbi quis commodo odio. Blandit
              aliquam etiam erat velit scelerisque in dictum non consectetur.
              Ipsum dolor sit amet consectetur.
              <br />
              <br />
              <Heading size={"md"}>Heading 1.1</Heading>
              Non sodales neque sodales ut. Auctor eu augue ut lectus arcu
              bibendum at. Pellentesque massa placerat duis ultricies lacus sed.
              Scelerisque fermentum dui faucibus in ornare. Posuere urna nec
              tincidunt praesent semper feugiat nibh sed pulvinar. Sem integer
              vitae justo eget magna fermentum iaculis. Pharetra magna ac
              placerat vestibulum lectus mauris ultrices eros. Rhoncus urna
              neque viverra justo nec ultrices dui sapien. Sit amet nisl purus
              in mollis nunc sed id semper. Scelerisque eu ultrices vitae
              auctor. Feugiat pretium nibh ipsum consequat nisl vel pretium
              lectus. Gravida dictum fusce ut placerat orci nulla pellentesque.
              Laoreet non curabitur gravida arcu ac tortor dignissim convallis
              aenean. Arcu cursus vitae congue mauris rhoncus. Nec ultrices dui
              sapien eget mi proin sed libero.
              <br />
              <br />
              <Heading size={"md"}>Heading 1.2</Heading>
              Semper eget duis at tellus at. Purus gravida quis blandit turpis
              cursus in hac habitasse platea. Amet purus gravida quis blandit
              turpis cursus. Proin sagittis nisl rhoncus mattis rhoncus urna
              neque. Mattis ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa. Ultrices tincidunt arcu non sodales neque sodales ut
              etiam sit. Non consectetur a erat nam. A lacus vestibulum sed arcu
              non. Enim eu turpis egestas pretium. Augue eget arcu dictum
              varius. Amet justo donec enim diam vulputate ut pharetra sit.
              <br />
              <br />
              <Heading size={"lg"}>Heading 2</Heading>
              Aliquam id diam maecenas ultricies mi eget. Sollicitudin nibh sit
              amet commodo. Dignissim diam quis enim lobortis scelerisque
              fermentum dui faucibus in. Bibendum arcu vitae elementum curabitur
              vitae nunc sed velit. Pellentesque habitant morbi tristique
              senectus et netus et. At urna condimentum mattis pellentesque id
              nibh tortor. Turpis tincidunt id aliquet risus feugiat in ante
              metus. Urna porttitor rhoncus dolor purus non enim praesent.
              Penatibus et magnis dis parturient montes nascetur. Fringilla
              phasellus faucibus scelerisque eleifend donec.
              <br />
              <br />
              <Heading size={"md"}>Heading 2.1</Heading>
              Orci nulla pellentesque dignissim enim. Scelerisque in dictum non
              consectetur a erat nam at. Fusce ut placerat orci nulla
              pellentesque. Id neque aliquam vestibulum morbi. Felis donec et
              odio pellentesque diam volutpat commodo. Ac turpis egestas sed
              tempus urna et pharetra. Cursus turpis massa tincidunt dui. Leo
              vel orci porta non pulvinar. Interdum varius sit amet mattis.
              Donec adipiscing tristique risus nec feugiat in fermentum posuere
              urna. Proin fermentum leo vel orci porta non pulvinar neque
              laoreet. Ornare suspendisse sed nisi lacus sed. Integer malesuada
              nunc vel risus commodo viverra maecenas accumsan lacus. Massa
              ultricies mi quis hendrerit. Enim sit amet venenatis urna cursus.
              Non sodales neque sodales ut etiam sit amet nisl purus. Venenatis
              urna cursus eget nunc scelerisque viverra mauris in.
              <br />
              <br />
              <Heading size={"md"}>Heading 2.2</Heading>
              Orci nulla pellentesque dignissim enim. Scelerisque in dictum non
              consectetur a erat nam at. Fusce ut placerat orci nulla
              pellentesque. Id neque aliquam vestibulum morbi. Felis donec et
              odio pellentesque diam volutpat commodo. Ac turpis egestas sed
              tempus urna et pharetra. Cursus turpis massa tincidunt dui. Leo
              vel orci porta non pulvinar. Interdum varius sit amet mattis.
              Donec adipiscing tristique risus nec feugiat in fermentum posuere
              urna. Proin fermentum leo vel orci porta non pulvinar neque
              laoreet. Ornare suspendisse sed nisi lacus sed. Integer malesuada
              nunc vel risus commodo viverra maecenas accumsan lacus. Massa
              ultricies mi quis hendrerit. Enim sit amet venenatis urna cursus.
              Non sodales neque sodales ut etiam sit amet nisl purus. Venenatis
              urna cursus eget nunc scelerisque viverra mauris in.
            </Text>
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
              <Text>1. Heading 1</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp; 1.1 Heading 1.1</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp; 1.2 Heading 1.2</Text>
              <Text>2. Heading 2</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp; 2.1 Heading 2.1</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp; 2.2 Heading 2.2</Text>

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
          )}
        </Flex>
        {isMobile && <SocialMediaShare />}
      </Container>
    </div>
  );
};

export default Post;

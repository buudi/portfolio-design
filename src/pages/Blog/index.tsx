import { useDisclosure } from "@chakra-ui/react";
import { Box, Flex, Center } from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

import Navbar from "../Home/Navbar";
import MenuOverlay from "../../components/MenuOverlay";
import PostListing from "./PostListing";

const Blog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div style={{marginBottom:"100px"}}>
      <Navbar onOpen={onOpen} />
      <MenuOverlay isOpen={isOpen} onClose={onClose} />
      <Flex w={"100%"} bg={"#3B435E"} direction={"column"} justify={"center"}>
        <Box mt={"1rem"} mb={"2rem"} color={"white"} textAlign={"center"}>
          <p style={{ fontSize: "3.5rem", fontWeight: "700" }}>/blog</p>
          <p style={{ fontFamily: "halant", fontSize: "19px", margin:"0 30px 0 30px" }}>
            This blog serves as an ongoing flow of ideas. It is currently being
            used as a glorified scratchpad.
          </p>
        </Box>
      </Flex>
      <Center mt={"1.2rem"}>
        <Tabs>
          <TabList>
            <Tab>All (23)</Tab>
            <Tab>Fullstack (8)</Tab>
            <Tab>Backend (10)</Tab>
            <Tab>Life (5)</Tab>
          </TabList>
        </Tabs>
      </Center>
      <PostListing />
      <PostListing />
      <PostListing />
    </div>
  );
};

export default Blog;

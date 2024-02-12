import {
  Flex,
  Box,
  useDisclosure,
  SimpleGrid,
  TabList,
  Tabs,
  Tab,
  Center,
} from "@chakra-ui/react";

import Navbar from "../Home/Navbar";
import MenuOverlay from "../../components/MenuOverlay";

import Card4 from "./cards/Card4";

const PinBoard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Navbar onOpen={onOpen} />
      <MenuOverlay isOpen={isOpen} onClose={onClose} />
      <Flex w={"100%"} bg={"#3B435E"} direction={"column"} justify={"center"}>
        <Box mt={"1rem"} mb={"2rem"} color={"white"} textAlign={"center"}>
          <p style={{ fontSize: "3.5rem", fontWeight: "700" }}>/pinboard</p>
          <p
            style={{
              fontFamily: "halant",
              fontSize: "19px",
              margin: "0 30px 0 30px",
            }}
          >
            A collection of links I pin, serving as inspiration for my work and
            aspirations.
          </p>
        </Box>
      </Flex>
      <Center>
        <Tabs mt={"1rem"}>
          <TabList flexWrap={"wrap"}>
            <Tab>Backend</Tab>
            <Tab>Frontend</Tab>
            <Tab>Database</Tab>
            <Tab>Devops</Tab>
          </TabList>
        </Tabs>
      </Center>
      <SimpleGrid
        mt={"1rem"}
        mr={"12vw"}
        ml={"12vw"}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Card4 />
        <Card4 />
        <Card4 />
        <Card4 />
        <Card4 />
        <Card4 />
        <Card4 />
      </SimpleGrid>
    </div>
  );
};

export default PinBoard;

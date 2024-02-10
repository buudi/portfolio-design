import { Flex, Box, useDisclosure } from "@chakra-ui/react";

import Navbar from "../Home/Navbar";
import MenuOverlay from "../../components/MenuOverlay";

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
            some description here
          </p>
        </Box>
      </Flex>
    </div>
  );
};

export default PinBoard;

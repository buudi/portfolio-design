import { useMediaQuery, ModalContent, Box, Flex } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

import { Link } from "react-router-dom";

import { Modal, useDisclosure, ModalOverlay } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import MeSection from "./MeSection";
import SelectedWork from "./SelectedWork";

const MenuOverlay = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isPortrait] = useMediaQuery('(min-height: 500px)')

  const marginStyles = isPortrait ? "2rem 2rem" : "1rem 1rem";
  const fontWeights = isPortrait ? "bold" : "normal";
  const fontSizes = isPortrait ? "1.5rem" : "1.2rem";
  return (
    <>
      <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="#2c3247"
          backdropFilter="blur(10px)"
        />{" "}
        {/* Adjust the background color and opacity */}
        <ModalContent>
          <Box mb={""}>
            <MdClose
              style={{
                color: "white",
                position: "absolute",
                right: "1rem",
                top: "1rem",
                cursor: "pointer",
              }}
              onClick={onClose}
              size={50}
            />
          </Box>

          <Flex
            h={"100vh"}
            align={"center"}
            justify={"center"}
            direction={"column"}
          >
            <Box fontWeight={fontWeights} fontSize={fontSizes} m={marginStyles}>
              {" "}
              <Link className="linkStyles_active" to="/">
                01 Home
              </Link>
            </Box>

            <Box fontWeight={fontWeights} fontSize={fontSizes} m={marginStyles}>
              <Link className="linkStyles" to="/">
                02 My Work
              </Link>
            </Box>
            <Box fontWeight={fontWeights} fontSize={fontSizes} m={marginStyles}>
              <Link className="linkStyles" to="/">
                03 Blog
              </Link>
            </Box>

            <Box fontWeight={fontWeights} fontSize={fontSizes} m={marginStyles}>
              <Link className="linkStyles" to="/">
                04 Pinboard
              </Link>
            </Box>

            <Box fontWeight={fontWeights} fontSize={fontSizes} m={marginStyles}>
              <Link className="linkStyles" to="/">
                05 Me
              </Link>
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container>
      <Navbar onOpen={onOpen} />
      <MenuOverlay isOpen={isOpen} onClose={onClose} />
      <MeSection />
      <SelectedWork />
    </Container>
  );
};

export default Home;

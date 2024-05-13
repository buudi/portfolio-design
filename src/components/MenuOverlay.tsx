import { useEffect, useState } from "react";
import { ModalContent, Box, Flex } from "@chakra-ui/react";
import { Modal, ModalOverlay } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

const MenuOverlay = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [path, setPath] = useState("/");
  useEffect(() => {
    const currentPath = window.location.pathname;
    setPath(currentPath);
  }, []);

  const classAssigner = (linkPath: string) => {
    if (path === "/" && linkPath === "/") return "linkStyles_active";
    if (path.startsWith(linkPath) && linkPath === "/") return "linkStyles";
    if (path.startsWith(linkPath) && linkPath !== "/")
      return "linkStyles_active";
    return "linkStyles";
  };

  const isPortrait = useMediaQuery({ minHeight: "500px" });

  const marginStyles = isPortrait ? "2rem 2rem" : "1rem 1rem";
  const fontWeights = isPortrait ? "bold" : "normal";
  const fontSizes = isPortrait ? "1.5rem" : "1.2rem";
  return (
    <>
      <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(10px)" />{" "}
        {/* Adjust the background color and opacity */}
        <ModalContent bg="#2c3247">
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
              <Link className={classAssigner("/")} to="/">
                01 Home
              </Link>
            </Box>

            <Box fontWeight={fontWeights} fontSize={fontSizes} m={marginStyles}>
              <Link className={classAssigner("/my-work")} to="/my-work">
                02 My Work
              </Link>
            </Box>
            <Box fontWeight={fontWeights} fontSize={fontSizes} m={marginStyles}>
              <Link className={classAssigner("/blog")} to="/blog">
                03 Blog
              </Link>
            </Box>

            {/* <Box fontWeight={fontWeights} fontSize={fontSizes} m={marginStyles}>
              <Link className={classAssigner("/pinboard")} to="/pinboard">
                04 Pinboard
              </Link>
            </Box> */}

            <Box fontWeight={fontWeights} fontSize={fontSizes} m={marginStyles}>
              <Link className={classAssigner("/me")} to="/me">
                04 Me
              </Link>
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuOverlay;

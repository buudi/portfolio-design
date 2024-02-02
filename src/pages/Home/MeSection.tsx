import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Image,
  Tooltip,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import pic from "../../assets/img.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const MeSection = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const [isLargerThan940] = useMediaQuery("(min-width: 940px)");
  const isMobile = !isLargerThan1280 && !isLargerThan940;

  const iconMarginStyle = !isMobile ? { margin: "0 2rem" } : { margin: "0 0.5rem" };

  return (
    <Flex
      direction={`${isMobile ? "column" : "row"}`}
      justify={"center"}
      align={"center"}
      color={"white"}
      bg="#3B435E"
      p={isMobile ? "1rem" : "3rem"}
    >
      <Image
        src={pic}
        w={"260px"}
        h={"260px"}
        borderRadius={"50%"}
        style={{ border: "3px solid #626984" }}
      />
      <Flex align={`${isMobile && 'center'}`} marginLeft={`${isMobile ? 0 : "55px"}`} direction={"column"}>
        <Box textAlign={isMobile ? "center" : "left"} mt={"15px"} fontSize={"2rem"} fontWeight={"bold"}>
          Abdullah Yaser Alnadhari
        </Box>
        <Box
          fontFamily={"halant"}
          fontSize={"19px"}
          w={`${isMobile ? "100%" : "600px"}`}
          marginTop={"18px"}
        >
          <Text textAlign={!isMobile ? "justify" : "left"}>
            I'm Abdullah, a full-stack developer with a focus on backend
            operations. Specializing in creating internal tools for businesses,
            my solutions automate processes and streamline data management.
            Explore my work and feel free to get in touch!
          </Text>
        </Box>
        <Flex
          marginTop={`${!isMobile ? "40px" : "20px"}`}
          mb={`${isMobile && "20px"}`}
          wrap={"wrap"}
        >
          <Link
            style={{ color: "white" }}
            target="_blank"
            to="https://www.linkedin.com/in/abdullah-yaser-alnadhari-032406236/"
          >
            <FaLinkedin size={"2.3rem"} style={!isMobile ? { marginRight: "2rem" } : {marginRight:"0.5rem"}} />
          </Link>
          <Link
            style={{ color: "white" }}
            target="_blank"
            to="https://github.com/buudi"
          >
            <FaGithub size={"2.3rem"} style={iconMarginStyle} />
          </Link>
          <Link
            style={{ color: "white" }}
            target="_blank"
            to="https://www.instagram.com/buudi.dev/"
          >
            <FaInstagram size={"2.3rem"} style={iconMarginStyle} />
          </Link>
          <Tooltip
            color={"white"}
            label={`click to ${showEmail ? "hide" : "reveal"}`}
          >
            <span>
              <IoIosMail
                onClick={() => setShowEmail(!showEmail)}
                size={"2.3rem"}
                style={iconMarginStyle}
              />
            </span>
          </Tooltip>
          {showEmail && <span> buudi.dev at gmail dot com</span>}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MeSection;

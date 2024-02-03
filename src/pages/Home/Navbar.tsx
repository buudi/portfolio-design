import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

import { useMediaQuery } from "react-responsive";

const xlMargins = {
  marginLeft: "10vw",
  marginRight: "10vw",
};

const lgMargins = {
  marginLeft: "5vw",
  marginRight: "5vw",
};

const smMargins = {
  marginLeft: "4vw",
  marginRight: "4vw",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SmallerThan800 = ({ onOpen }: any) => {
  const handleMenuClick = () => {
    onOpen();
  };
  return (
    <Box bg="#3B435E">
      <Flex
        h={"4rem"}
        justify={"space-between"}
        align={"center"}
        style={smMargins}
      >
        <p style={{ color: "white", fontSize: "21px", fontWeight: "bold" }}>
          Abdullah Alnadhari
        </p>

        <span onClick={() => handleMenuClick()}>
          <GiHamburgerMenu size={"2rem"} style={{ color: "white" }} />
        </span>
      </Flex>
    </Box>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navbar = ({ onOpen }: any) => {
  const [path, setPath] = useState("/");
  useEffect(() => {
    const currentPath = window.location.pathname;
    setPath(currentPath);
  }, []);

  const classAssigner = (linkPath: string) => {
    if (path === linkPath) {
      return "linkStyles_active";
    }
    return "linkStyles";
  }

  const isLargerThan1280 = useMediaQuery({minWidth: "1280px"});
  const isLargerThan940 = useMediaQuery({minWidth: "940px"});

  const isMobile = !isLargerThan940 && !isLargerThan1280;

  if (isMobile) {
    return <SmallerThan800 onOpen={onOpen} />;
  }

  const overRideStyles = {
    margin: "0 0.5rem",
  };

  return (
    <Box bg="#3B435E">
      <Flex
        h={"6rem"}
        justify={"space-between"}
        align={"center"}
        style={isLargerThan1280 ? xlMargins : lgMargins}
      >
        <p style={{ color: "white", fontSize: "21px", fontWeight: "bold" }}>
          Abdullah Alnadhari
        </p>
        <Flex>
          <Link className={classAssigner("/")} to="/">
            01 Home
          </Link>
          <Link
            className="linkStyles"
            style={
              !isLargerThan1280 && isLargerThan940 ? overRideStyles : undefined
            }
            to="/"
          >
            02 My Work
          </Link>
          <Link
            className={classAssigner("/post")}
            style={
              !isLargerThan1280 && isLargerThan940 ? overRideStyles : undefined
            }
            to="/post"
          >
            03 Blog
          </Link>
          <Link
            className="linkStyles"
            style={
              !isLargerThan1280 && isLargerThan940 ? overRideStyles : undefined
            }
            to="/"
          >
            04 Pinboard
          </Link>
          <Link
            className="linkStyles"
            style={
              !isLargerThan1280 && isLargerThan940 ? overRideStyles : undefined
            }
            to="/"
          >
            05 Me
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

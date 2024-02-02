import { Link } from "react-router-dom";
import {
  Box,
  Flex,

  useMediaQuery,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const LargerThan1280 = () => {
  return (
    <Box bg="#3B435E">
      <Flex
        h={"6rem"}
        justify={"space-between"}
        align={"center"}
        style={{ marginLeft: "10vw", marginRight: "10vw" }}
      >
        <p style={{ color: "white", fontSize: "21px", fontWeight: "bold" }}>
          Abdullah Alnadhari
        </p>
        <Flex>
          <Link className="linkStyles_active" to="/">
            01 Home
          </Link>
          <Link className="linkStyles" to="/">
            02 My Work
          </Link>
          <Link className="linkStyles" to="/">
            03 Blog
          </Link>
          <Link className="linkStyles" to="/">
            04 Pinboard
          </Link>
          <Link className="linkStyles" to="/">
            05 Me
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

const LargerThan940 = () => {
  const overRideStyles = {
    margin: "0 0.5rem",
  };

  return (
    <Box bg="#3B435E">
      <Flex
        h={"6rem"}
        justify={"space-between"}
        align={"center"}
        style={{ marginLeft: "5vw", marginRight: "5vw" }}
      >
        <p style={{ color: "white", fontSize: "21px", fontWeight: "bold" }}>
          Abdullah Alnadhari
        </p>
        <Flex>
          <Link className="linkStyles_active" to="/">
            01 Home
          </Link>
          <Link className="linkStyles" style={overRideStyles} to="/">
            02 My Work
          </Link>
          <Link className="linkStyles" style={overRideStyles} to="/">
            03 Blog
          </Link>
          <Link className="linkStyles" style={overRideStyles} to="/">
            04 Pinboard
          </Link>
          <Link className="linkStyles" style={overRideStyles} to="/">
            05 Me
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SmallerThan800 = ({onOpen}:any) => {
  const handleMenuClick = () => {
    console.log("menu clicked");
    onOpen();
  }
  return (
    <Box bg="#3B435E">
      <Flex
        h={"4rem"}
        justify={"space-between"}
        align={"center"}
        style={{ marginLeft: "4vw", marginRight: "4vw" }}
      >
        <p style={{ color: "white", fontSize: "21px", fontWeight: "bold" }}>
          Abdullah Alnadhari
        </p>

        <span onClick={() => handleMenuClick() }>
          <GiHamburgerMenu size={"2rem"} style={{ color: "white" }} />
      </span>
      </Flex>
    </Box>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navbar = ({onOpen}:any) => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const [isLargerThan940] = useMediaQuery("(min-width: 940px)");

  if (isLargerThan1280) {
    return <LargerThan1280 />;
  }
  if (isLargerThan940) {
    return <LargerThan940 />;
  }

  return <SmallerThan800 onOpen={onOpen}/>;
};

export default Navbar;

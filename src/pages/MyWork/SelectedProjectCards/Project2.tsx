import {
  Box,
  Image,
  Text,
  Flex,
  Tag,
  Button,
  Heading,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

import jpmsDashboardImg from "../../../assets/jpms.png";

const Project2 = () => {
  const tags: string[] = [
    "Fullstack",
    "React",
    "Express",
    "REST API",
    "PostgreSQL",
    "Role Based Access Control",
  ];

  const isMobile = !useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <Card mt={"32px"} variant={"outline"}>
      <CardBody>
        <Flex direction={isMobile ? "column" : "row"}>

          {/* 1st column only in mobile */}
          {isMobile && (
            <Box>
              <Image
                border={"3px solid #3B435E"}
                src={jpmsDashboardImg}
                alt={"Al Jazeera Properties Management System"}
                borderRadius={"10px"}
                objectFit={"contain"}
                w={"85vw"}
              />
            </Box>
          )}

          {/* 1st column */}
          <Flex
            align={"flex-end"}
            justify={"center"}
            direction={"column"}
            mr={"16px"}
            maxW={"100%"}
            // bg={"gray"}
          >
            <Heading
              p={"0.5rem"}
              textAlign={isMobile ? "center" : "left"}
              size={"md"}
            >
              Al Jazeera Properties Management System
            </Heading>

            <Box
              mt={"0.2rem"}
              mb={"0.2rem"}
              bg={"#E2E8F0"}
              p={"0.3rem"}
              borderRadius={"10px"}
            >
              <Text textAlign={"justify"} color={"#3182CE"}>
                A comprehensive management platform designed for a private real
                estate firm in the UAE, featuring multi-role user access.
              </Text>
            </Box>
            <Box>
              {tags.map((tag, index) => (
                <Tag
                  borderRadius={"15px"}
                  bg={"#DBDBDB"}
                  key={index}
                  size={"md"}
                  m={"0.5rem"}
                >
                  {tag}
                </Tag>
              ))}
            </Box>
            <Button
              fontWeight={"bold"}
              alignSelf={isMobile ? "center" : "flex-start"}
              w={"45%"}
              mt={"0.5rem"}
              size={"sm"}
              border={"solid 1px"}
              color={"#3B435E"}
              variant={"outline"}
              _hover={{ background: "#D6DBDF" }}
            >
              Read Case Study
            </Button>
          </Flex>

          {/* 2nd column only in desktop */}
          {!isMobile && (
            <Box>
              <Image
                border={"3px solid #3B435E"}
                src={jpmsDashboardImg}
                alt={"Al Jazeera Properties Management System"}
                borderRadius={"10px"}
                objectFit={"contain"}
                w={"85vw"}
              />
            </Box>
          )}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Project2;

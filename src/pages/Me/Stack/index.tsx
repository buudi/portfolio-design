import { Flex, Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import Technology from "./Technology";

interface Skill {
  name: string;
  description: string;
  icon: string;
  link: string;
}

const stackTechnologies: Skill[] = [
  {
    name: "Typescript",
    description: "web development",
    icon: "#D9D9D9",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    description: "web development",
    icon: "#D9D9D9",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    description: "web development",
    icon: "#D9D9D9",
    link: "https://react.dev/",
  },
  {
    name: "Node.js",
    description: "web development",
    icon: "#D9D9D9",
    link: "https://nodejs.org/en/",
  },
  {
    name: "Ant Design",
    description: "web design",
    icon: "#D9D9D9",
    link: "https://ant.design/",
  },
  {
    name: "Chakra UI",
    description: "web design",
    icon: "#D9D9D9",
    link: "https://chakra-ui.com/",
  },
  {
    name: "PostgreSQL",
    description: "database",
    icon: "#D9D9D9",
    link: "https://www.postgresql.org/",
  },
  {
    name: "DigitalOcean",
    description: "DevOps",
    icon: "#D9D9D9",
    link: "https://www.digitalocean.com/",
  },
  {
    name: "Vercel",
    description: "DevOps",
    icon: "#D9D9D9",
    link: "https://vercel.com/",
  },
  {
    name: "Figma",
    description: "design",
    icon: "#D9D9D9",
    link: "https://www.figma.com",
  },
  {
    name: "Postman",
    description: "API testing",
    icon: "#D9D9D9",
    link: "https://www.postman.com/",
  },
  {
    name: "VS Code",
    description: "IDE",
    icon: "#D9D9D9",
    link: "https://code.visualstudio.com/",
  },
];


const Stack = () => {
  const isMobile = !useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <Box bg={"#3B435E"} w={"100%"}>
      <Flex direction={"column"} align={"center"} justify={"center"} p={"2rem"}>
        <Heading
          fontFamily={"inter"}
          textAlign={"center"}
          fontWeight={"600"}
          fontSize={"3rem"}
          color={"white"}
        >
          My Stack
        </Heading>
        <Text
          textAlign={"center"}
          fontFamily={"inter"}
          fontSize={"1.2rem"}
          color={"white"}
          mt={"8px"}
        >
          A list of tools and technologies that I use on a{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            regular basis
          </span>
        </Text>

        <SimpleGrid mt={"22px"} columns={isMobile ? 1 : 2} spacingX={"15vw"}>
          {stackTechnologies.map((technology, index) => (
            <Technology
              key={index}
              name={technology.name}
              description={technology.description}
            />
          ))}
        </SimpleGrid>
        {/* <Heading
          fontFamily={"inter"}
          textAlign={"center"}
          fontWeight={"600"}
          fontSize={"3rem"}
          color={"white"}
          mt={"5rem"}
        >
          Other Skills I Acquire
        </Heading>

        <SimpleGrid mt={"22px"} columns={isMobile ? 1 : 2} spacingX={"15vw"}>
          {skills.map((skill, index) => (
            <Technology
              key={index}
              name={skill.name}
              description={skill.description}
            />
          ))}
        </SimpleGrid> */}
      </Flex>
    </Box>
  );
};

export default Stack;

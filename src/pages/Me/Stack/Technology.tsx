import { Box, Flex, Text } from "@chakra-ui/react";

const Technology = ({ name, description }: { name: string, description: string }) => {
  return (
    <Box mt={"2rem"}>
      <Flex>
        <Box borderRadius={"20px"} w={"80px"} h={"80px"} bg={"#D9D9D9"}></Box>
        <Box alignSelf={"center"} ml={"12px"} color={"white"}>
          <Text fontFamily={"inter"} fontWeight={"bold"} fontSize={"1.5rem"}>
            {name}
          </Text>
          <Text fontFamily={"inter"}>{description}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Technology;

import { Box, Flex, Text } from "@chakra-ui/react";

const Technology = ({ name, description, icon }: { name: string, description: string, icon: any }) => {
  return (
    <Box mt={"2rem"}>
      <Flex>
        <Box borderRadius={"20px"} w={"80px"} h={"80px"}>{icon}</Box>
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

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Tag,
} from "@chakra-ui/react";

const Card4 = () => {
  return (
    <Card>
      <CardHeader>
        <Tag bg={"gray.100"} borderRadius={"25px"} mb={"10px"} p={"5px"}>
          React
        </Tag>

        <Heading size="md"> 1. Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button w="100%" size={"sm"}>View here</Button>
      </CardFooter>
    </Card>
  );
};

export default Card4;

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Tag
} from "@chakra-ui/react";

const Card4 = () => {
  return (
    <Card bg={"#D6DBDF"}>
      <CardHeader>
      <Tag bg={"gray.300"} borderRadius={"25px"} mb={"10px"} p={"5px"}>React</Tag>

        <Heading size="md"> 1. Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  );
};

export default Card4;

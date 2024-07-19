import {
  Box,
  Text,
  Button,
  VStack,
  Heading,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const NotFoundView = () => {
  const fontSize = useBreakpointValue({ base: "4xl", md: "6xl" });

  return (
    <Container maxW="container.xl" centerContent>
      <VStack spacing={8} py={16} textAlign="center">
        <Heading
          as="h1"
          size={fontSize}
          color="teal.500"
          fontWeight="bold"
          mb={4}
        >
          404
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Oops! The page you’re looking for doesn’t exist.
        </Text>
        <Box>
          <Text fontSize="md" color="gray.500" mb={4}>
            It seems you’ve hit a dead end. Maybe you want to go back to the
            homepage?
          </Text>
          <Button colorScheme="teal" size="lg" as={Link} to="/" variant="solid">
            Go to Homepage
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

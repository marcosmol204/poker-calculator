import {
  Box,
  Text,
  Divider,
  Center,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const breadcrumbSeparator = useColorModeValue("gray.500", "gray.200");

  return (
    <Box p={4}>
      <Center mb={2}>
        <Text
          fontSize="4xl"
          lineHeight="shorter"
          fontWeight="extrabold"
          color="teal.500"
        >
          Poker Calculator
        </Text>
      </Center>
      <Center mb={2}>
        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/"
              fontSize="lg"
              lineHeight="shorter"
              fontWeight="medium"
              color={breadcrumbSeparator}
            >
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/actions"
              fontSize="lg"
              lineHeight="shorter"
              fontWeight="medium"
              color={breadcrumbSeparator}
            >
              Game Management
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>

      <Divider borderColor="teal.500" mb={6} />
      <Box
        p={4}
        bg={useColorModeValue("gray.50", "gray.900")}
        borderRadius="md"
        boxShadow="base"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

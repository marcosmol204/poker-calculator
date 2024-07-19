import {
  Box,
  Text,
  Divider,
  Center,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box>
      <Center>
        <Text fontSize="xl" lineHeight="xl" fontWeight="bold">
          Poker Calculator
        </Text>
      </Center>
      <Center>
        <Breadcrumb separator={"-"}>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/" fontSize="l" lineHeight="l">
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/actions" fontSize="l" lineHeight="l">
              Game Management
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>

      <Divider />
      <Outlet />
    </Box>
  );
};

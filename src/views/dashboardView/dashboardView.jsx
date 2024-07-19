import {
  Box,
  Center,
  Flex,
  SimpleGrid,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useGame } from "../../hooks/useGame";
import { calculatePercentageChange } from "../../logic";

export const DashboardView = () => {
  const { players } = useGame();

  const total = players.reduce((acc, curr) => {
    return acc + curr.bought;
  }, 0);

  return (
    <Box marginTop={4}>
      {players.length === 0 ? (
        <Center height="100vh">
          <Box textAlign="center">
            <Text fontSize="2xl" mb={4}>
              No players added yet.
            </Text>
            <Link as={RouterLink} to="/actions" fontSize="lg" color="teal.500">
              For adding new players, click here
            </Link>
          </Box>
        </Center>
      ) : (
        <>
          <SimpleGrid columns={2} spacing={4}>
            {players.map((player) => {
              const percentageChanged = calculatePercentageChange(
                player.chips,
                player.bought
              );
              return (
                <Stat
                  key={player.name}
                  as={Flex}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius="md"
                  boxShadow="lg"
                  bg="gray.50"
                >
                  <StatLabel as={Center} fontWeight="bold">
                    {player.name}
                  </StatLabel>
                  <StatNumber as={Center} color="teal.500">
                    {player.chips}
                  </StatNumber>

                  <StatHelpText color="gray.600">
                    {!percentageChanged.startsWith("0.00") && (
                      <StatArrow
                        type={
                          player.chips < player.bought ? "decrease" : "increase"
                        }
                      />
                    )}
                    {percentageChanged}
                  </StatHelpText>
                </Stat>
              );
            })}
          </SimpleGrid>
          <Center paddingTop={"16px"} color="gray.500">
            <Text>Issued jetons: {total}</Text>
          </Center>
        </>
      )}
    </Box>
  );
};

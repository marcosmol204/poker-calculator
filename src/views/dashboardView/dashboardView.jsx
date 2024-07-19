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
} from "@chakra-ui/react";
import { useGame } from "../../hooks/useGame";
import { calculatePercentageChange } from "../../logic";

export const DashboardView = () => {
  const { players } = useGame();

  const total = players.reduce((acc, curr) => {
    return acc + curr.bought;
  }, 0);

  return (
    <Box marginTop={"16px"}>
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
            >
              <StatLabel as={Center}>{player.name}</StatLabel>
              <StatNumber as={Center}>{player.chips}</StatNumber>

              <StatHelpText>
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

      <Center paddingTop={"16px"}>
        <Text>Jackpot:{total}</Text>
      </Center>
    </Box>
  );
};

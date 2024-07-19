import { calculatePayments } from "../../../../logic";
import { Checkbox, CheckboxGroup, Box, Text } from "@chakra-ui/react";

export const JetonsTransfers = ({ players }) => {
  const [payments, error] = calculatePayments(players);
  return (
    <Box pb="24px">
      {error ? (
        <>
          <Text>
            Count the jetons again.
            {error > 0
              ? `There are ${error} more issued jetons than counted jetons`
              : `There are ${
                  error * -1
                } more counted jetons than issued jetons`}
            .
          </Text>
        </>
      ) : (
        <CheckboxGroup>
          {payments.map((payment, i) => {
            return (
              <Checkbox
                key={i}
              >{`${payment.from} transfers ${payment.amount} to ${payment.for}.`}</Checkbox>
            );
          })}
        </CheckboxGroup>
      )}
    </Box>
  );
};

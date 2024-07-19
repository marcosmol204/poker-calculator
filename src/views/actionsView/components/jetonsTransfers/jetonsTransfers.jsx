import { calculatePayments } from "../../../../logic";
import { Checkbox, CheckboxGroup, Box } from "@chakra-ui/react";

export const JetonsTransfers = ({ players }) => {
  const payments = calculatePayments(players);
  return (
    <Box pb="24px">
      <CheckboxGroup>
        {payments.map((payment, i) => {
          return (
            <Checkbox
              key={i}
            >{`${payment.from} transfers ${payment.amount} to ${payment.for}`}</Checkbox>
          );
        })}
      </CheckboxGroup>
    </Box>
  );
};

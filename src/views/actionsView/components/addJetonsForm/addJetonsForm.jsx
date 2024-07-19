import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
export function AddJetonsForm({ players, onSubmit }) {
  const { register, handleSubmit, formState, watch } = useForm();
  const name = watch("name");
  console.log(name);

  return (
    <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={3} spacing={"8px"}>
        <Box>
          <FormLabel htmlFor="name">Player</FormLabel>
          <Select placeholder="Select player" {...register("name")}>
            {players.map((player) => {
              return (
                <option key={player.name} value={player.name}>
                  {player.name}
                </option>
              );
            })}
          </Select>
        </Box>
        <GridItem>
          <FormLabel htmlFor="jetons">Jetons</FormLabel>
          <NumberInput id="jetons" defaultValue={20} step={20} direction="ltr">
            <NumberInputField {...register("jetons")} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
        <Flex direction="column" justifyContent="flex-end">
          <Button
            colorScheme="teal"
            variant="outline"
            w="100%"
            type="submit"
            isDisabled={!formState.isValid}
          >
            Add
          </Button>
        </Flex>
      </SimpleGrid>
    </FormControl>
  );
}

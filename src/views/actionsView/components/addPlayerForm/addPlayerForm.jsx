import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
export function AddPlayerForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={3} spacing="8px">
        <GridItem>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" {...register("name")} />
        </GridItem>
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
          <Button colorScheme="teal" variant="outline" w="100%" type="submit">
            Add
          </Button>
        </Flex>
      </SimpleGrid>
    </FormControl>
  );
}

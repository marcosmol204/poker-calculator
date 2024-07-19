import {
  Box,
  Button,
  Input,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export function EditPlayerForm({ players, onSubmit, getPlayer }) {
  const { register, handleSubmit, watch } = useForm();
  const name = watch("name");
  return (
    <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={3} spacing="8px">
        <Box>
          <FormLabel htmlFor="player">Player</FormLabel>
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
          {name && (
            <Box>
              <Input
                defaultValue={getPlayer(name).chips}
                {...register("jetons")}
              ></Input>
            </Box>
          )}
        </GridItem>
        <Flex direction="column" justifyContent="flex-end">
          <Button colorScheme="teal" variant="outline" w="100%" type="submit">
            Update
          </Button>
        </Flex>
      </SimpleGrid>
    </FormControl>
  );
}

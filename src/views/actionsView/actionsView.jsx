import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { useGame } from "../../hooks/useGame";
import {
  AddJetonsForm,
  AddPlayerForm,
  EditPlayerForm,
  JetonsTransfers,
} from "./components";

export function ActionsView() {
  const {
    players,
    addPlayer,
    getPlayer,
    addBoughtJetons,
    deleteAllPlayer,
    editJetons,
  } = useGame();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addPlayerOnSubmit = (formData) => {
    const existingPlayer = players.find(
      (player) => player.name === formData.name
    );
    if (existingPlayer) {
      toast({
        title: "Player already exists",
        status: "error",
      });
    } else {
      addPlayer(formData.name, formData.jetons);
      toast({
        title: "Player added",
        status: "success",
      });
    }
  };

  const addBoughtJetonsOnSubmit = (formData) => {
    const isValidNumber = Number(formData.jetons) > 0;
    if (!isValidNumber) {
      toast({
        title: "Jetons should be positive number",
        status: "error",
      });
    } else {
      addBoughtJetons(formData.name, formData.jetons);
      toast({
        title: "Jetons were added",
        status: "success",
      });
    }
  };

  const editPlayerOnSubmit = (formData) => {
    const isValidNumber = Number(formData.jetons) >= 0;
    if (!isValidNumber) {
      toast({
        title: "Jetons should be positive number",
        status: "error",
      });
    } else {
      editJetons(formData.name, formData.jetons);
      toast({
        title: "Jetons were added",
        status: "success",
      });
    }
  };

  return (
    <Box>
      <Accordion>
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon />
            <Text as="b">Add player</Text>
          </AccordionButton>
          <AccordionPanel p={4}>
            <AddPlayerForm onSubmit={addPlayerOnSubmit} />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon />
            <Text as="b">Add jetons</Text>
          </AccordionButton>
          <AccordionPanel p={4}>
            <AddJetonsForm
              players={players}
              onSubmit={addBoughtJetonsOnSubmit}
            ></AddJetonsForm>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon />
            <Text as="b">Update player</Text>
          </AccordionButton>
          <AccordionPanel p={4}>
            <EditPlayerForm
              players={players}
              onSubmit={editPlayerOnSubmit}
              getPlayer={getPlayer}
            ></EditPlayerForm>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon />
            <Text as="b">Game actions</Text>
          </AccordionButton>
          <AccordionPanel p={4} as={Center}>
            <ButtonGroup>
              <Button
                colorScheme="teal"
                variant="solid"
                onClick={() => {
                  const confimated = window.confirm("Are you sure?");
                  if (!confimated) return;
                  onOpen();
                }}
              >
                Finish Game
              </Button>
              <Button
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  const confimated = window.confirm("Are you sure?");
                  if (!confimated) return;
                  deleteAllPlayer();
                }}
              >
                Reset Game
              </Button>
            </ButtonGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Transfers</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <JetonsTransfers players={players} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

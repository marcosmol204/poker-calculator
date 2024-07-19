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
  const confirmAction = (message, action) => {
    const confirmed = window.confirm(message);
    if (confirmed) action();
  };

  return (
    <Box
      maxW="container.md"
      mx="auto"
      borderRadius="md"
      boxShadow="lg"
      bg="gray.50"
    >
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon />
            <Text as="b" ml={2}>
              Add player
            </Text>
          </AccordionButton>
          <AccordionPanel p={4}>
            <AddPlayerForm onSubmit={addPlayerOnSubmit} />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon />
            <Text as="b" ml={2}>
              Issue jetons
            </Text>
          </AccordionButton>
          <AccordionPanel p={4}>
            <AddJetonsForm
              players={players}
              onSubmit={addBoughtJetonsOnSubmit}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon />
            <Text as="b" ml={2}>
              Count jetons
            </Text>
          </AccordionButton>
          <AccordionPanel p={4}>
            <EditPlayerForm
              players={players}
              onSubmit={editPlayerOnSubmit}
              getPlayer={getPlayer}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon />
            <Text as="b" ml={2}>
              Game actions
            </Text>
          </AccordionButton>
          <AccordionPanel p={4}>
            <Center>
              <ButtonGroup>
                <Button
                  colorScheme="teal"
                  onClick={() => confirmAction("Are you sure?", onOpen)}
                >
                  Finish Game
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() =>
                    confirmAction("Are you sure?", deleteAllPlayer)
                  }
                >
                  Reset Game
                </Button>
              </ButtonGroup>
            </Center>
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

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  UnorderedList,
  VStack,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { PiMapPinBold, PiPhoneBold } from "react-icons/pi";

import { CgDetailsMore } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaInfoSolid } from "react-icons/lia";
import React from "react";
import { UseChangeTheme } from "../functions/hooks/useChangeTheme";

interface HeaderProps {
  onClick?: () => void;
}

const Header = ({ onClick }: HeaderProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const { colorMode } = useColorMode();
  const [modalContent, setModalContent] = React.useState<string>("map");

  const workingHours = [
    { day: "Pirmadienis", time: "9:00 - 18:00" },
    { day: "Antradienis", time: "9:00 - 18:00" },
    { day: "Trečiadienis", time: "9:00 - 18:00" },
    { day: "Ketvirtadienis", time: "9:00 - 18:00" },
    { day: "Penktadienis", time: "9:00 - 18:00" },
    { day: "Šeštadienis", time: "9:00 - 14:00" },
  ];

  return (
    <HStack
      minW={isMobile ? "full" : "40%"}
      justify="space-between"
      minH="4rem"
      px={{ base: "1rem", md: "0" }}
    >
      <HStack>
        <Image
          src={colorMode === "light" ? "/dark.png" : "/light.png"}
          alt="avatar"
          height={100}
          width={100}
          style={{ aspectRatio: 1 / 1, borderRadius: "50%" }}
        />
      </HStack>
      <HStack spacing={7} justify="space-between">
        {/* menu */}
        <HStack>
          <Tooltip label="Žemėlapis">
            <Flex>
              <PiMapPinBold
                fontSize="22px"
                className="shaking"
                onClick={() => {
                  setModalContent("map"), onModalOpen();
                }}
                cursor="pointer"
              />
            </Flex>
          </Tooltip>

          <Tooltip label="Apie mus">
            <Flex
              onClick={() => {
                setModalContent("info"), onModalOpen();
              }}
              cursor="pointer"
            >
              <LiaInfoSolid fontSize="22px" className="shaking" />
            </Flex>
          </Tooltip>
          <Tooltip label="Paslaugos">
            <Flex onClick={onDrawerOpen} cursor="pointer">
              <GiHamburgerMenu fontSize="22px" className="shaking" />
            </Flex>
          </Tooltip>
        </HStack>
        {/* theme changer  */}
        <UseChangeTheme />
      </HStack>
      <Modal isOpen={isModalOpen} onClose={onModalClose} size="xl">
        <ModalOverlay />
        <ModalContent
          bg={colorMode === "light" ? "rgb(40, 40, 40) " : "rgb(70, 70, 70)"}
          color={colorMode === "light" ? "black" : "white"}
        >
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={5}>
            {modalContent === "map" ? (
              <Flex>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8941.079844639355!2d23.328877!3d55.9273578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5e2e505171a6b%3A0x6bada76356297813!2sGiedrius%20Service!5e0!3m2!1sen!2slt!4v1687422522226!5m2!1sen!2slt"
                  style={{ border: "0", borderRadius: "5px" }}
                  width="700"
                  height="400"
                  loading="lazy"
                ></iframe>
              </Flex>
            ) : (
              <VStack>
                <VStack>
                  <VStack spacing={4} pb={5}>
                    <Image
                      src="favicon.ico"
                      alt="logo"
                      h={{ base: 10, md: "8rem" }}
                    />
                    <Heading fontStyle="italic" fontSize="md">
                      Visos serviso paslaugos jums patogiu laiku
                    </Heading>
                  </VStack>
                </VStack>
                <VStack>
                  <HStack fontSize="lg">
                    <PiMapPinBold />
                    <Text>Elnio g. 18</Text> <Text>Šiauliai</Text>
                  </HStack>
                  <HStack fontSize="lg">
                    <PiPhoneBold />
                    <Text>(8-672) 07670</Text>
                  </HStack>
                  <VStack fontSize="lg" mt={4}>
                    <Heading fontSize="xl" pb={2}>
                      Darbo laikas
                    </Heading>
                    {workingHours.map((i) => (
                      <HStack key={i.day} spacing={5}>
                        <Text>{i.day}</Text>
                        <Text>{i.time}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </VStack>
            )}
          </ModalBody>

          <ModalFooter mr={"-10px"}>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onModalClose}
              variant="outline"
            >
              Uždaryti
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* menu drawer */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={{ base: "md", md: "lg" }}>
            Mūsų teikiamos paslaugos
          </DrawerHeader>

          <DrawerBody>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <HStack spacing={4}>
                        <Image
                          height={8}
                          src="engine.png"
                          alt="engine"
                          invert={colorMode === "dark" ? 1 : 0}
                        />
                        <Text>Variklis</Text>
                      </HStack>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList>
                    <ListItem>Gedimų diagnostika</ListItem>
                    <ListItem>Tepalų keitimas</ListItem>
                    <ListItem>Filtrų keitimas</ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <HStack spacing={4}>
                        <Image
                          invert={colorMode === "dark" ? 1 : 0}
                          height={8}
                          src="suspension.png"
                          alt="suspension"
                        />
                        <Text> Važiuoklė</Text>
                      </HStack>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList>
                    <ListItem>Važiuoklės diagnostika</ListItem>
                    <ListItem>Amortizatorių keitimas</ListItem>
                    <ListItem>Suvirinimo darbai</ListItem>
                    <ListItem>Ratų suvedimas</ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onDrawerClose}>
              Uždaryti
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default Header;

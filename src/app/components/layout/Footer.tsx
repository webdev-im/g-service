import { HStack, Link, Text } from "@chakra-ui/react";

import { GiSelfLove } from "react-icons/gi";

const Footer = () => {
  return (
    <HStack
      minW="100%"
      justify="center"
      pb={4}
      fontSize={{ base: "xs", md: "sm" }}
    >
      <HStack spacing={2}>
        <Text>Made with </Text>
        <Text>
          <GiSelfLove color="#415bb2" />
        </Text>
        <Link isExternal href="https://webdevim.netlify.app">
          <Text>by WebDev I'm</Text>
        </Link>
        <Text>{new Date().getFullYear()}</Text>
      </HStack>
    </HStack>
  );
};

export default Footer;

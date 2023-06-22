import { Flex, Image, Tooltip, useColorMode } from "@chakra-ui/react";
import { PiHeadlightsBold, PiMoonBold } from "react-icons/pi";

import { FaRegLightbulb } from "react-icons/fa";

export const UseChangeTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Tooltip label={colorMode === "dark" ? "Diena" : "Naktis"}>
        <Flex cursor="pointer" onClick={toggleColorMode}>
          {colorMode === "dark" ? (
            // <FaRegLightbulb
            //   fontSize="20px"
            //   color={colorMode === "dark" ? "white" : "black"}
            // />
            <Image src="bulb.png" width={30} height={30} alt="bulb" />
          ) : (
            // <PiHeadlightsBold
            //   fontSize="22px"
            //   color={colorMode === "light" ? "black" : "white"}  />'
            <Image src="moon.png" width={10} alt="moon" />
          )}
        </Flex>
      </Tooltip>
    </div>
  );
};

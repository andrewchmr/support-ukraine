import { Box, Text } from "@chakra-ui/react";

import { Crest } from "../icons/Crest";
import { Facebook } from "../icons/Facebook";
import { Telegram } from "../icons/Telegram";

import { LayoutContainer } from "./LayoutContainer";

const Footer = () => {
  return (
    <Box
      marginTop="auto"
      as="footer"
      alignItems="center"
      backgroundColor="#F6CC25"
      py="6"
    >
      <LayoutContainer
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          id="contact"
          display="flex"
          alignItems={["start", "center"]}
          width={["100%", "initial"]}
          justifyContent={["space-between", "center"]}
          flexDirection={["row-reverse", "row"]}
        >
          <Box gap="2" display="flex" marginRight={["unset", 10]}>
            <Facebook />
            <Telegram />
          </Box>

          <Box
            display="flex"
            alignItems={["start", "center"]}
            flexDirection={["column", "row"]}
          >
            <Text
              whiteSpace="nowrap"
              fontWeight="bold"
              fontSize="xl"
              marginRight={5}
            >
              Contact Us
            </Text>
            example@gmail.com
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          marginTop={{ base: "6", md: "unset" }}
        >
          <Crest />
          <Text marginLeft={4}>Ukraine {new Date().getFullYear()}</Text>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default Footer;

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
      >
        <Box display="flex" alignItems="center">
          <Box gap="2" display="flex" marginRight={10}>
            <Facebook />
            <Telegram />
          </Box>

          <Box display="flex" alignItems="center">
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

        <Box display="flex" alignItems="center">
          <Crest />
          <Text marginLeft={4}>Ukraine {new Date().getFullYear()}</Text>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default Footer;

import { Box, Text } from "@chakra-ui/react";

import { Crest } from "../icons/Crest";

import { LayoutContainer } from "./LayoutContainer";

const Footer = () => {
  return (
    <Box as="footer" marginTop="auto">
      <Box py="2" backgroundColor="#3693C2" />
      <LayoutContainer width="full" py="12">
        <Text fontWeight="bold" fontSize="xl">
          Contact Us
        </Text>
      </LayoutContainer>
      <Box
        display="flex"
        width="full"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#F6CC25"
        py="6"
      >
        <Crest />
        <Text marginLeft={4}>Ukraine {new Date().getFullYear()}</Text>
      </Box>
    </Box>
  );
};

export default Footer;

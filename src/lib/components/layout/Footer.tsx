import type { BoxProps } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

import { Crest } from "../icons/Crest";
import { SocialIcons } from "../icons/SocialIcons";

import { LayoutContainer } from "./LayoutContainer";

const Footer = (props: BoxProps) => {
  return (
    <Box
      marginTop="auto"
      as="footer"
      alignItems="center"
      backgroundColor="yellow.base"
      py="6"
      {...props}
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
          <SocialIcons />

          <Box
            display="flex"
            alignItems={["start", "center"]}
            flexDirection={["column", "row"]}
          >
            <Text
              whiteSpace="nowrap"
              fontWeight="bold"
              fontSize={["md", "xl"]}
              marginRight={5}
            >
              Contact Us
            </Text>
            <Text fontSize={["sm", "md"]}>info@ukraine-army.help</Text>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          marginTop={{ base: "6", md: "unset" }}
        >
          <Crest />
          <Text marginLeft={4} fontSize={["sm", "md"]}>
            Ukraine {new Date().getFullYear()}
          </Text>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default Footer;

import { Text } from "@chakra-ui/react";

import { Crest } from "../icons/Crest";

import { LayoutContainer } from "./LayoutContainer";

const Footer = () => {
  return (
    <LayoutContainer
      display="flex"
      as="footer"
      width="full"
      alignContent="center"
      justifyContent="center"
    >
      <Crest />
      <Text marginLeft={4}>Ukraine {new Date().getFullYear()}</Text>
    </LayoutContainer>
  );
};

export default Footer;

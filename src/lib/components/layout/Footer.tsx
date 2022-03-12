import { Flex, Text } from "@chakra-ui/react";

import { Crest } from "../icons/Crest";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" justify="center">
      <Crest />
      <Text marginLeft={4}>Ukraine {new Date().getFullYear()}</Text>
    </Flex>
  );
};

export default Footer;

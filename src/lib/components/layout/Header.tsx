import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/">Logo</Link>
      </Heading>

      <Box marginLeft="auto">
        <Link href="/fundraisings">Fundraisings</Link>
      </Box>
    </Flex>
  );
};

export default Header;

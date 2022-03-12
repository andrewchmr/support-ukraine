import type { BoxProps, TextProps } from "@chakra-ui/react";
import { Text, Box, Heading } from "@chakra-ui/react";
import Link from "next/link";

import { LayoutContainer } from "./LayoutContainer";

interface HeaderTextProps extends TextProps {
  isDark?: boolean;
}
const HeaderText = ({ isDark = false, ...props }: HeaderTextProps) => (
  <Text fontSize="lg" color={isDark ? "white" : "black"} {...props} />
);

interface HeaderProps extends BoxProps {
  isDark?: boolean;
}
const Header = ({ isDark = false, ...props }: HeaderProps) => {
  return (
    <LayoutContainer
      display="flex"
      as="header"
      width="full"
      alignItems="center"
      h="72px"
      outerProps={{
        bgColor: isDark ? "#013B2F" : undefined,
      }}
      {...props}
    >
      <Heading as="h1" size="md">
        <Link href="/" passHref>
          <HeaderText as="a" isDark={isDark}>
            Logo
          </HeaderText>
        </Link>
      </Heading>

      <Box marginLeft="auto">
        <Link href="/fundraisings" passHref>
          <HeaderText as="a" isDark={isDark}>
            Fundraisings
          </HeaderText>
        </Link>
      </Box>
    </LayoutContainer>
  );
};

export default Header;

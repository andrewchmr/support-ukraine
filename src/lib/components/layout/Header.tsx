import { Box, Heading, Text } from "@chakra-ui/react";
import type { BoxProps, TextProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { LayoutContainer } from "./LayoutContainer";

interface HeaderTextProps extends TextProps {
  isDark?: boolean;
}

const links = [{ name: "Fundraisings", path: "/fundraisings" }];

const HeaderText = ({ isDark = false, ...props }: HeaderTextProps) => (
  <Text fontSize="lg" color={isDark ? "white" : "black"} {...props} />
);

interface HeaderProps extends BoxProps {
  isDark?: boolean;
}
const Header = ({ isDark = false, ...props }: HeaderProps) => {
  const router = useRouter();

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
        <NextLink href="/" passHref>
          <HeaderText as="a" isDark={isDark}>
            Logo
          </HeaderText>
        </NextLink>
      </Heading>
      <Box marginLeft="auto">
        {links.map((link) => {
          const isActive = router.pathname === link.path;

          return (
            <NextLink key={link.path} href={link.path} passHref>
              <HeaderText
                as="a"
                fontSize="lg"
                fontWeight={isActive ? "semibold" : undefined}
                textDecoration={isActive ? "underline" : undefined}
                isDark={isDark}
              >
                {link.name}
              </HeaderText>
            </NextLink>
          );
        })}
      </Box>
    </LayoutContainer>
  );
};

export default Header;

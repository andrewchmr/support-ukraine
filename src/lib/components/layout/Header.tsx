import { Box, Heading, Text } from "@chakra-ui/react";
import type { BoxProps, TextProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { Logotype } from "../icons/Logotype";
import { Mail } from "../icons/Mail";
import colors from "lib/styles/customTheme/colors";

import { LayoutContainer } from "./LayoutContainer";

interface HeaderTextProps extends TextProps {
  isDark?: boolean;
}

const links = [
  { name: "Fundraisings", path: "/fundraisings" },
  {
    name: "About Us",
    path: "/#about_us",
  },
  {
    name: "Contact",
    path: "/#contact",
  },
];

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
        bgColor: isDark ? "green.dark" : undefined,
      }}
      {...props}
    >
      <Heading as="h1" size="md">
        <NextLink href="/" passHref>
          <HeaderText as="a" isDark={isDark}>
            <Logotype color={isDark ? colors.white.base : colors.green.dark} />
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
                mr="8"
              >
                {link.name}
              </HeaderText>
            </NextLink>
          );
        })}
      </Box>
      <Box as="a" href="mailto:info@ukraine-army.help">
        <Mail />
      </Box>
    </LayoutContainer>
  );
};

export default Header;

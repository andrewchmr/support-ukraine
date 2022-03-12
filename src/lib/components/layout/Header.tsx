import { Box, Heading, Text } from "@chakra-ui/react";
import type { BoxProps, TextProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import type { ILandingPageFields } from "../../../../@types/generated/contentful";

import { LayoutContainer } from "./LayoutContainer";

interface HeaderTextProps extends TextProps {
  isDark?: boolean;
}

const links = [
  { name: "Fundraisings", path: "/fundraisings" },
  {
    name: "About Us",
    path: "/#about_us_section" as `/#${ILandingPageFields["sectionId"]}`,
  },
  {
    name: "Contact",
    path: "/#contact",
  },
];

const HeaderText = ({ isDark = false, ...props }: HeaderTextProps) => (
  <Text fontSize="lg" color={isDark ? "white" : "black"} {...props} />
);

const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"
      fill="white"
    />
  </svg>
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
                mr="8"
              >
                {link.name}
              </HeaderText>
            </NextLink>
          );
        })}
      </Box>
      <Box as="a" href="mailto:contact@ukraine-army.help">
        <MailIcon />
      </Box>
    </LayoutContainer>
  );
};

export default Header;

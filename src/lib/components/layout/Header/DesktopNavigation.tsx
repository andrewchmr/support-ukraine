import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { Mail } from "lib/components/icons/Mail";

import { headerLinks } from "./headerLinks";
import { HeaderText } from "./HeaderText";

interface DesktopNavigationProps extends BoxProps {
  isDark: boolean;
}
export function DesktopNavigation({
  isDark,
  ...props
}: DesktopNavigationProps) {
  const router = useRouter();

  return (
    <Box display={{ base: "none", md: "flex" }} marginLeft="auto" {...props}>
      {headerLinks.map(({ name, path }) => {
        const isActive = router.pathname === path;

        return (
          <NextLink key={path} href={path} passHref>
            <HeaderText
              fontSize="lg"
              isActive={isActive}
              isDark={isDark}
              mr="8"
            >
              {name}
            </HeaderText>
          </NextLink>
        );
      })}
      <Box as="a" href="mailto:info@ukraine-army.help">
        <Mail />
      </Box>
    </Box>
  );
}

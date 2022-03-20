import { Heading, Link } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import NextLink from "next/link";

import { Logotype } from "lib/components/icons/Logotype";
import colors from "lib/styles/customTheme/colors";

import { DesktopNavigation } from "./DesktopNavigation";
import { HeaderLayoutContainer } from "./HeaderLayoutContainer";
import { MobileNavigation } from "./MobileNavigation";

interface HeaderProps extends BoxProps {
  isDark?: boolean;
}
export const Header = ({ isDark = false, ...props }: HeaderProps) => {
  return (
    <HeaderLayoutContainer isDark={isDark} {...props}>
      <Heading size="md">
        <NextLink href="/" passHref>
          <Link>
            <Logotype color={isDark ? colors.white.base : colors.green.dark} />
          </Link>
        </NextLink>
      </Heading>
      <DesktopNavigation isDark={isDark} />
      <MobileNavigation isDark={isDark} />
    </HeaderLayoutContainer>
  );
};

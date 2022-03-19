import type { TextProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface HeaderTextProps extends TextProps {
  isDark?: boolean;
  isActive?: boolean;
}
export const HeaderText = ({
  isDark = false,
  isActive = false,
  ...props
}: HeaderTextProps) => (
  <Text
    as="a"
    fontWeight={isActive ? "semibold" : undefined}
    textDecoration={isActive ? "underline" : undefined}
    color={isDark ? "white" : "black"}
    {...props}
  />
);

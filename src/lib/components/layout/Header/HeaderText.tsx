import type { TextProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface HeaderTextProps extends TextProps {
  isDark?: boolean;
  isActive?: boolean;
  isFundraisings: boolean;
}

export const HeaderText = ({
  isDark = false,
  isActive = false,
  isFundraisings,
  ...props
}: HeaderTextProps) => {
  const darkColor = isFundraisings ? "yellow.base" : "white.base";
  const lightColor = isFundraisings ? "green.base" : "black.base";

  return (
    <Text
      as="a"
      fontWeight={isActive ? "semibold" : undefined}
      textDecoration={isActive ? "underline" : undefined}
      color={isDark ? darkColor : lightColor}
      {...props}
    />
  );
};

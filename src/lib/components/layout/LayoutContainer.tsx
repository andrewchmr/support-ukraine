import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export interface LayoutContainerProps extends BoxProps {
  outerProps?: BoxProps;
}
export const LayoutContainer = ({
  children,
  outerProps,
  ...props
}: LayoutContainerProps) => (
  <Box px={{ base: 6, md: 16 }} transition="0.5s ease-out" {...outerProps}>
    <Box maxWidth={1200} mx="auto" {...props}>
      {children}
    </Box>
  </Box>
);

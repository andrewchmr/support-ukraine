import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const LineAboveTitle = (props: BoxProps) => (
  <Box h="6px" w="32px" bgColor="yellow.light" mb="3" {...props} />
);

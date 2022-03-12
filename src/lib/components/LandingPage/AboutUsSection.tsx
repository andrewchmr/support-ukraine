import type { BoxProps } from "@chakra-ui/react";
import { Box, Text, Flex } from "@chakra-ui/react";

import { LineAboveTitle } from "../LineAboveTitle";

interface AboutUsSectionProps extends BoxProps {
  aboutUsTitle: string;
  aboutUsDescription: string;
}
export function AboutUsSection({
  aboutUsTitle,
  aboutUsDescription,
}: AboutUsSectionProps) {
  return (
    <Flex id="about_us_section" py="16">
      <Box flex={1}>
        <LineAboveTitle bgColor="#3A3A3A" />
        <Text color="#3A3A3A">{aboutUsTitle}</Text>
        <Text color="#3A3A3A">{aboutUsDescription}</Text>
      </Box>
      <Box flex={1} />
    </Flex>
  );
}

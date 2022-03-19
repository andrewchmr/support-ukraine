import type { FlexProps } from "@chakra-ui/react";
import { Box, Text, Flex } from "@chakra-ui/react";

import { LineAboveTitle } from "../LineAboveTitle";

interface AboutUsSectionProps extends FlexProps {
  aboutUsTitle: string;
  aboutUsDescription: string;
}
export function AboutUsSection({
  aboutUsTitle,
  aboutUsDescription,
  ...props
}: AboutUsSectionProps) {
  return (
    <Flex id="about_us" py="16" {...props}>
      <Box flex={1}>
        <LineAboveTitle bgColor="black.base" />
        <Text
          fontWeight="semibold"
          fontSize="32px"
          lineHeight="46px"
          color="black.base"
          as="h3"
        >
          {aboutUsTitle}
        </Text>
        <Text
          fontWeight="medium"
          fontSize="20px"
          lineHeight="30px"
          color="black.base"
        >
          {aboutUsDescription}
        </Text>
      </Box>
      <Box flex={1} />
    </Flex>
  );
}

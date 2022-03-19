import { Box, Text, Flex } from "@chakra-ui/react";
import type { Asset } from "contentful";
import NextImage from "next/image";

import { LineAboveTitle } from "../LineAboveTitle";

interface Props {
  id?: string;
  title: string;
  description: string;
  image: Asset | undefined;
}

export function Section({ title, description, image, id }: Props) {
  if (!image?.fields.file.url) {
    return null;
  }

  return (
    <Flex id={id} py="16" gap={4} flexDirection={{ base: "column", md: "row" }}>
      <Box flex={1}>
        <LineAboveTitle bgColor="black.base" />
        <Text
          fontWeight="semibold"
          fontSize="32px"
          lineHeight="46px"
          color="black.base"
          as="h3"
        >
          {title}
        </Text>
        <Text
          fontWeight="medium"
          fontSize="20px"
          lineHeight="30px"
          color="black.base"
        >
          {description}
        </Text>
      </Box>
      <Flex
        flex={1}
        justifyContent="end"
        alignSelf={{ base: "center", md: "unset" }}
      >
        <NextImage
          src={`https://${image?.fields.file.url}`}
          width={420}
          height={282}
          objectFit="contain"
        />
      </Flex>
    </Flex>
  );
}

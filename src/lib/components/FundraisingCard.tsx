import { Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import type { Fundraising } from "services/client";

import { ArrowLongRight } from "./icons/ArrowLongRight";

type Props = Fundraising;

export const FundraisingCard = ({
  fundraisingDescriptionEn,
  organisationNameEn,
  image,
  fundraisingLink,
}: Props) => {
  return (
    <LinkBox
      width="100%"
      display="flex"
      flexDirection="column"
      maxW="sm"
      borderWidth="1px"
      overflow="hidden"
    >
      <NextImage
        src={`https:${image.fields.file.url}`}
        alt={image.fields.title}
        width={256}
        height={144}
        layout="responsive"
        objectFit="cover"
      />
      <Flex
        direction="column"
        height="100%"
        justify="space-between"
        flex="1"
        px="4"
        py="6"
      >
        <LinkOverlay
          href={fundraisingLink}
          mt="1"
          fontWeight="semibold"
          lineHeight="tight"
          fontSize="xl"
          noOfLines={2}
          color="black.base"
          target="_blank"
          rel="noopener noreferrer"
        >
          {organisationNameEn}
        </LinkOverlay>
        <Flex my="2" alignItems="center" justifyContent="space-between" gap={2}>
          <Text color="grey.dark" fontSize="md" noOfLines={4}>
            {fundraisingDescriptionEn}
          </Text>
        </Flex>
        <Flex as="span" flexShrink={0} justifyContent="end">
          <ArrowLongRight />
        </Flex>
      </Flex>
    </LinkBox>
  );
};

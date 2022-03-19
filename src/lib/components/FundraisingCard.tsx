import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
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
    <LinkBox width="100%" maxW="sm" borderWidth="1px" overflow="hidden">
      <NextImage
        src={`https:${image.fields.file.url}`}
        alt={image.fields.title}
        width={256}
        height={144}
        layout="responsive"
        objectFit="cover"
      />
      <Box px="4" py="6">
        <LinkOverlay
          href={fundraisingLink}
          mt="1"
          fontWeight="semibold"
          lineHeight="tight"
          fontSize="xl"
          noOfLines={2}
          target="_blank"
          rel="noopener noreferrer"
        >
          {organisationNameEn}
        </LinkOverlay>
        <Box
          display="flex"
          mt="2"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <Box color="gray.600" fontSize="md" noOfLines={4}>
            {fundraisingDescriptionEn}
          </Box>
          <Box as="span" display="flex" flexShrink={0}>
            <ArrowLongRight />
          </Box>
        </Box>
      </Box>
    </LinkBox>
  );
};

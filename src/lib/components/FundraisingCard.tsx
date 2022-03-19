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
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          fontSize="xl"
          noOfLines={2}
        >
          {organisationNameEn}
        </Box>
        <Box
          display="flex"
          mt="2"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <LinkOverlay
            href={fundraisingLink}
            color="gray.600"
            fontSize="md"
            target="_blank"
            rel="noopener noreferrer"
            noOfLines={4}
          >
            {fundraisingDescriptionEn}
          </LinkOverlay>
          <Box as="span" display="flex" flexShrink={0}>
            <ArrowLongRight />
          </Box>
        </Box>
      </Box>
    </LinkBox>
  );
};

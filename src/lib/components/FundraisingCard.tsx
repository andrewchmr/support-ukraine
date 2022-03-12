import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextImage from "next/image";

import type { Fundraising } from "services/client";

interface Props extends Fundraising {
  minWidth?: string | number;
}

export const FundraisingCard = ({
  fundraisingTitleEn,
  organisationNameEn,
  image,
  fundraisingLink,
  minWidth,
}: Props) => {
  return (
    <LinkBox minWidth={minWidth} maxW="sm" borderWidth="1px" overflow="hidden">
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
          {fundraisingTitleEn}
        </Box>
        <Box display="flex" mt="2" alignItems="center">
          <LinkOverlay
            href={fundraisingLink}
            color="gray.600"
            fontSize="md"
            target="_blank"
            rel="noopener noreferrer"
          >
            {organisationNameEn}
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  );
};

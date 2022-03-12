import { Box, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";

interface Props {
  imageUrl: string;
  title: string;
  organization: string;
  link: string;
}

export const FundraisingCard = ({
  imageUrl,
  title,
  organization,
  link,
}: Props) => {
  return (
    <LinkBox maxW="sm" borderWidth="1px" overflow="hidden">
      <Image src={imageUrl} alt={title} />
      <Box px="4" py="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          fontSize="xl"
          noOfLines={2}
        >
          {title}
        </Box>
        <Box display="flex" mt="2" alignItems="center">
          <LinkOverlay
            href={link}
            color="gray.600"
            fontSize="md"
            target="_blank"
            rel="noopener noreferrer"
          >
            {organization}
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  );
};

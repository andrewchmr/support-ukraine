import { ChevronRightIcon } from "@chakra-ui/icons";
import type { BoxProps, IconProps } from "@chakra-ui/react";
import { Icon, Box, Button, Flex, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

import { LayoutContainer } from "../layout/LayoutContainer";
import { LineAboveTitle } from "../LineAboveTitle";

const emblemContourWidth = 283;
const emblemContourHeight = 323;
const EmblemContour = (props: IconProps) => (
  <Icon
    top="0"
    position="absolute"
    width={emblemContourWidth}
    height={emblemContourHeight}
    fill="none"
    viewBox="0 0 283 323"
    {...props}
  >
    <path
      d="M1.34136 0.837702H282.41V188.938C282.41 262.428 222.835 322.003 149.345 322.003H134.407C60.9169 322.003 1.34136 262.428 1.34136 188.938V0.837702Z"
      stroke="white"
      strokeWidth="1.17931"
    />
  </Icon>
);

const shiftWidth = 32;
const numberOfEmblems = 3;

interface WelcomeSectionProps extends BoxProps {
  welcomeSectionTitle: string;
  welcomeSectionDescription: string;
}
export function WelcomeSection({
  welcomeSectionTitle,
  welcomeSectionDescription,
  ...props
}: WelcomeSectionProps) {
  return (
    <LayoutContainer py={8} outerProps={{ bgColor: "green.dark" }} {...props}>
      <Flex>
        <Box flex={1}>
          <LineAboveTitle />
          <Text
            fontWeight="semibold"
            fontSize={["xl", "4xl"]}
            lineHeight={["26px", "56px"]}
            color="yellow.base"
            as="h1"
          >
            {welcomeSectionTitle}
          </Text>
          <Text
            as="h2"
            mt={3}
            fontSize={["md", "2xl"]}
            lineHeight={["20px", "36px"]}
            color="yellow.base"
          >
            {welcomeSectionDescription}
          </Text>
          <NextLink href="/fundraisings" passHref>
            <Button
              as="a"
              mt="12"
              py="3"
              px="5"
              bgColor="yellow.base"
              color="green.dark"
              _hover={{ bgColor: "yellow.base", textDecor: "underline" }}
              _active={{ bgColor: "yellow.light", textDecor: "underline" }}
              fontSize="lg"
              lineHeight="22px"
              fontWeight="semibold"
              borderRadius={0}
              rightIcon={<ChevronRightIcon color="green.dark" w="6" h="6" />}
            >
              See fundraisings
            </Button>
          </NextLink>
        </Box>
        <Flex
          display={{ base: "none", lg: "flex" }}
          flex={1}
          justify="flex-end"
        >
          <Box
            height={emblemContourHeight}
            width={`${emblemContourWidth + shiftWidth * numberOfEmblems}px`}
            position="relative"
          >
            <Box
              position="relative"
              zIndex={1}
              width={emblemContourWidth}
              height={emblemContourHeight}
              borderBottomLeftRadius="full"
              borderBottomRightRadius="full"
              overflow="hidden"
            >
              <NextImage
                src="/HeroImage.png"
                alt="HeroImage"
                width={emblemContourWidth}
                height={emblemContourHeight}
              />
            </Box>
            {new Array(numberOfEmblems).fill(0).map((_, index) => (
              <EmblemContour left={`${shiftWidth * (index + 1)}px`} />
            ))}
          </Box>
        </Flex>
      </Flex>
    </LayoutContainer>
  );
}

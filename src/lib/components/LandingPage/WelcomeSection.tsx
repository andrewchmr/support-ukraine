import type { BoxProps, IconProps } from "@chakra-ui/react";
import { Icon, Box, Flex, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import { LayoutContainer } from "../layout/LayoutContainer";
import { LineAboveTitle } from "../LineAboveTitle";

import {
  AddAnOrganizationWelcomeSectionButton,
  BecomeVolunteerWelcomeSectionButton,
} from "./WelcomeSectionButton";

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
    <LayoutContainer
      py={8}
      outerProps={{ bgColor: "green.dark", mt: "-1px" }}
      {...props}
    >
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
          <Flex mt="12" flexWrap="wrap">
            <BecomeVolunteerWelcomeSectionButton
              linkProps={{ display: { base: "none", md: "block" } }}
              mr="4"
              mb="4"
            />
            <AddAnOrganizationWelcomeSectionButton />
          </Flex>
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
      <Flex display={{ base: "none", lg: "flex" }} justify="center" pt="4">
        <svg
          width="15"
          height="35"
          viewBox="0 0 15 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.79289 34.5645C7.18342 34.9551 7.81658 34.9551 8.20711 34.5645L14.5711 28.2006C14.9616 27.81 14.9616 27.1769 14.5711 26.7864C14.1805 26.3958 13.5474 26.3958 13.1569 26.7864L7.5 32.4432L1.84315 26.7864C1.45262 26.3958 0.819458 26.3958 0.428933 26.7864C0.038409 27.1769 0.038409 27.81 0.428933 28.2006L6.79289 34.5645ZM6.5 0.857422L6.5 33.8574L8.5 33.8574L8.5 0.857422L6.5 0.857422Z"
            fill="white"
          />
        </svg>
      </Flex>
    </LayoutContainer>
  );
}

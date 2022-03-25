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

const MobileEmblem = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    height={["201px", "268px"]}
    width={["121px", "161px"]}
    viewBox="0 0 242 402"
    fill="grey.medium"
    opacity={0.2}
    {...props}
  >
    <path d="m 121 1 c -9.32 10.58 -15 24.42 -15 39.62 0.55 33.37 4.64 66.7 5 100 0.74 31.1 -8.58 60.3 -19.92 88.8 -3.78 7.87 -7.86 15.57 -11.95 23.29 l -12 -2.42 c -10.83 -2.16 -17.87 -12.69 -15.7 -23.52 1.89 -9.47 10.23 -16.1 19.53 -16.1 l 4.38 0.47 l -9.77 -81.6 c -3.19 -36.3 -21.93 -68.2 -49.5 -88.9 -4.74 -3.56 -9.77 -6.82 -15 -9.69 v 289.7 h 66.88 c 5 27.1 19.94 50.8 40.94 67 4.99 3.44 9.18 7.98 12.19 13.28 3 -5.3 7.19 -9.84 12.19 -13.28 21 -16.24 35.94 -39.89 40.94 -67 h 66.88 v -289.7 c -5.23 2.87 -10.26 6.13 -15 9.69 -27.6 20.73 -46.3 52.6 -49.5 88.9 l -9.77 81.6 l 4.38 -0.47 c 9.3 0.04 17.64 6.62 19.53 16.1 2.16 10.83 -4.88 21.35 -15.7 23.52 l -12 2.42 c -4.09 -7.71 -8.18 -15.41 -11.95 -23.29 -11.35 -28.48 -20.67 -57.68 -19.93 -88.8 0.36 -33.4 4.45 -66.7 5 -100 0 -15.2 -5.68 -29 -15 -39.62 z m -100 71.7 c 12.94 15.19 21.63 34.1 24.2 54.93 l 8 67.3 c -10.25 5.1 -18 14.46 -20.94 25.79 h -11.33 v -148 z m 200 0 v 148 h -11.33 c -2.92 -11.32 -10.69 -20.68 -20.94 -25.79 l 8 -67.3 c 2.59 -20.81 11.28 -39.74 24.2 -54.94 z m -100 135.3 c 5.37 17.57 12.76 34.3 21.95 49.78 -8.74 2.65 -16.34 7.81 -21.95 14.76 -5.61 -6.95 -13.21 -12.1 -21.95 -14.77 9.19 -15.51 16.58 -32.2 21.95 -49.77 z m -100 32.74 h 11.33 c 3.57 13.81 14.35 24.71 28 28.52 l 9.61 2.19 c -2.57 9.32 -3.98 19.1 -3.98 29.3 h -45 v -60 z m 188.7 0 h 11.33 v 60 h -45 c 0 -10.14 -1.41 -19.97 -3.98 -29.3 l 9.61 -2.19 c 13.7 -3.81 24.47 -14.72 28 -28.52 z m -120.2 35.3 c 12.13 1.71 21.48 12.1 21.48 24.69 h -25 c 0 -8.57 1.27 -16.84 3.52 -24.69 z m 62.97 0 c 2.25 7.85 3.52 16.1 3.52 24.69 h -25 c 0 -12.61 9.35 -22.98 21.48 -24.69 z m -64.2 44.7 h 22.73 v 42.1 c -11 -11.55 -19 -26 -22.73 -42.1 z m 42.73 0 h 22.73 c -3.68 16.1 -11.7 30.57 -22.73 42.1 v -42.1 z" />
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
      pt={16}
      pb={8}
      outerProps={{ bgColor: "green.dark", mt: "-1px" }}
      {...props}
    >
      <Flex>
        <Box position="relative" flex={1}>
          <MobileEmblem
            display={{ base: "block", md: "none" }}
            position="absolute"
            right="0"
            top="-16"
          />
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

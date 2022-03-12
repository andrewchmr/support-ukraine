import { ChevronRightIcon } from "@chakra-ui/icons";
import type { BoxProps, IconProps } from "@chakra-ui/react";
import { Icon, Box, Button, Flex, Text } from "@chakra-ui/react";
import NextImage from "next/image";

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
    <LayoutContainer py={8} outerProps={{ bgColor: "#013B2F" }} {...props}>
      <Flex>
        <Box flex={1}>
          <LineAboveTitle />
          <Text
            fontWeight="semibold"
            fontSize="4xl"
            lineHeight="56px"
            color="#F6CC25"
          >
            {welcomeSectionTitle}
          </Text>
          <Text mt={3} fontSize="2xl" lineHeight="36px" color="#F6CC25">
            {welcomeSectionDescription}
          </Text>
          <Button
            mt="12"
            py="3"
            px="5"
            bgColor="#F6CC25"
            color="#013B2F"
            fontSize="lg"
            lineHeight="22px"
            fontWeight="semibold"
            borderRadius={0}
            rightIcon={<ChevronRightIcon color="#013B2F" w="6" h="6" />}
          >
            See fundraisings
          </Button>
        </Box>
        <Flex display={{ base: "none", lg: "flex" }} flex={1} justify="center">
          <Box height={emblemContourHeight} position="relative">
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
            <EmblemContour left="32px" />
            <EmblemContour left="64px" />
            <EmblemContour left="96px" />
          </Box>
        </Flex>
      </Flex>
    </LayoutContainer>
  );
}

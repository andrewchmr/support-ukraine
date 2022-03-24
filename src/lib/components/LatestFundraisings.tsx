import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import type { VisibilityContext } from "react-horizontal-scrolling-menu";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import { Routes } from "lib/constants";
import type { Fundraising } from "services/client";

import { FundraisingCard } from "./FundraisingCard";
import { ArrowRight } from "./icons/ArrowRight";

interface Props {
  fundraisings: Fundraising[];
}

type ScrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export const LatestFundraisings = ({ fundraisings }: Props) => {
  const onWheel = (apiObj: ScrollVisibilityApiType, ev: React.WheelEvent) => {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  };

  return (
    <Box as="section" mt={12}>
      <Flex justify="space-between" marginBottom={8}>
        <Heading as="h3" fontWeight="bold" fontSize={{ base: "lg", sm: "3xl" }}>
          Latest fundraisings
        </Heading>
        <NextLink href={Routes.fundraisings} passHref>
          <Link
            display="flex"
            alignItems="center"
            gap="2"
            fontSize="lg"
            color="green.700"
          >
            See all <ArrowRight />
          </Link>
        </NextLink>
      </Flex>
      <ScrollMenu onWheel={onWheel}>
        <Flex minWidth={1200} gap={6}>
          {fundraisings.map((fundraising) => (
            <FundraisingCard key={fundraising.id} {...fundraising} />
          ))}
        </Flex>
      </ScrollMenu>
    </Box>
  );
};

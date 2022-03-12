import { Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import type { GetStaticProps } from "next";

import { FundraisingCard } from "lib/components/FundraisingCard";
import type { Fundraising } from "services/client";
import { fetchFundraisings } from "services/client";

const property = {
  imageUrl:
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/1622E/production/_123507609_gettyimages-1238909706-1.jpg",
  title: "Wojskowe opatrunki dla Ukrainy",
  organization: "Zrzutka.pl",
  link: "https://zrzutka.pl",
};

interface FundraisingsProps {
  fundraisings: Fundraising[];
}
export default function FundraisingsPage({ fundraisings }: FundraisingsProps) {
  return (
    <>
      <Heading as="h1" fontSize={{ base: "lg", sm: "3xl" }}>
        Fundraisings
      </Heading>
      <Divider marginTop={10} />
      <SimpleGrid marginTop={10} columns={[1, 2, 3, 4]} spacing="24px">
        <FundraisingCard {...property} />
        <FundraisingCard {...property} />
        <FundraisingCard {...property} />
        <FundraisingCard {...property} />
        <FundraisingCard {...property} />
      </SimpleGrid>
    </>
  );
}

export const getStaticProps: GetStaticProps<FundraisingsProps> = async () => {
  const fundraisings = await fetchFundraisings();

  return {
    props: {
      fundraisings,
    },
    revalidate: 1,
  };
};

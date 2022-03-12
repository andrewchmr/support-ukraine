import { Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import type { GetStaticProps } from "next";

import { FundraisingCard } from "lib/components/FundraisingCard";
import type { Fundraising } from "services/client";
import { fetchFundraisings } from "services/client";

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
        {fundraisings.map((fundraising) => (
          <FundraisingCard key={fundraising.id} {...fundraising} />
        ))}
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

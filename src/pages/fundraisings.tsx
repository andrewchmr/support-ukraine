import { Divider, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import type { GetStaticProps } from "next";

import { FundraisingCard } from "lib/components/FundraisingCard";
import Layout from "lib/components/layout";
import { LayoutContainer } from "lib/components/layout/LayoutContainer";
import type { Fundraising } from "services/client";
import { fetchFundraisings } from "services/client";

interface FundraisingsProps {
  fundraisings: Fundraising[];
}
export default function FundraisingsPage({ fundraisings }: FundraisingsProps) {
  return (
    <Layout>
      <LayoutContainer>
        <Heading as="h1" fontWeight="bold" fontSize={{ base: "lg", sm: "3xl" }}>
          Fundraisings
          <Text marginLeft={2} as="span" color="gray.300">
            ({fundraisings.length})
          </Text>
        </Heading>
        <Divider marginTop={10} />
        <SimpleGrid marginTop={10} columns={[1, 2, 3, 4]} spacing="24px">
          {fundraisings.map((fundraising) => (
            <FundraisingCard key={fundraising.id} {...fundraising} />
          ))}
        </SimpleGrid>
      </LayoutContainer>
    </Layout>
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

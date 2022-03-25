import { Divider, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import type { GetStaticProps } from "next";

import { FundraisingCard } from "lib/components/FundraisingCard";
import Layout from "lib/components/layout";
import { LayoutContainer } from "lib/components/layout/LayoutContainer";
import { SEOTags } from "lib/components/SEOTags";
import type { Fundraising } from "services/client";
import { fetchFundraisings } from "services/client";

interface FundraisingsProps {
  fundraisings: Fundraising[];
}

const TITLE =
  "Verified fundraisers to support the Ukrainian Army | Help Ukrainian Army";
const DESC =
  "A list of official and verified foundations and fundraisers directly supporting the Ukrainian Army. Choose a fundraiser and make a real impact! | Help Ukrainian Army";

export default function FundraisingsPage({ fundraisings }: FundraisingsProps) {
  return (
    <Layout>
      <SEOTags title={TITLE} description={DESC} />
      <LayoutContainer>
        <Heading
          mt="10"
          as="h1"
          fontWeight="bold"
          fontSize={{ base: "lg", sm: "3xl" }}
        >
          Fundraisings
          <Text marginLeft={2} as="span" color="grey.base">
            ({fundraisings.length})
          </Text>
        </Heading>
        <Divider
          my="6"
          borderColor="grey.medium"
          opacity="1"
          display={["none", "block"]}
        />
        <SimpleGrid
          marginTop={[6, 10]}
          marginBottom={[10, 16]}
          columns={[1, 2, 2, 3, 4]}
          spacing="24px"
        >
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

import { Divider, Heading, SimpleGrid } from "@chakra-ui/react";

import { FundraisingCard } from "lib/components/FundraisingCard";

const property = {
  imageUrl:
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/1622E/production/_123507609_gettyimages-1238909706-1.jpg",
  title: "Wojskowe opatrunki dla Ukrainy",
  organization: "Zrzutka.pl",
  link: "https://zrzutka.pl",
};

const ListOfFundraisers = () => {
  return (
    <>
      <Heading as="h1" fontSize={{ base: "lg", sm: "3xl" }}>
        List Of Fundraisers
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
};

export default ListOfFundraisers;

import { Box } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";

import { LatestFundraisings } from "lib/components/LatestFundraisings";
import Footer from "lib/components/layout/Footer";
import Header from "lib/components/layout/Header";
import { LayoutContainer } from "lib/components/layout/LayoutContainer";
import type { Fundraising } from "services/client";
import {
  fetchLandingPageSectionData,
  fetchFundraisings,
} from "services/client";

// type WelcomeSectionProps = Pick<
//   LandingPageProps,
//   "welcomeSectionTitle" | "welcomeSectionDescription"
// >;
// function WelcomeSection({
//   welcomeSectionTitle,
//   welcomeSectionDescription,
// }: WelcomeSectionProps) {
//   return <Box />;
// }

interface LandingPageProps {
  fundraisings: Fundraising[];
  // welcomeSectionTitle: string;
  // welcomeSectionDescription: string;
  // whySupportTitle: string;
  // whySupportDescription: string;
  // aboutUsTitle: string;
  // aboutUsDescription: string;
}
const LandingPage: NextPage<LandingPageProps> = ({
  fundraisings,
}: LandingPageProps) => {
  return (
    <>
      <Header isDark />
      <Box as="main">
        <LayoutContainer>
          <LatestFundraisings fundraisings={fundraisings} />
        </LayoutContainer>
      </Box>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
  const fundraisings = await fetchFundraisings({ limit: 4 });
  const {
    titleEn: welcomeSectionTitle,
    descriptionEn: welcomeSectionDescription,
  } = await fetchLandingPageSectionData("welcome_section");
  const { titleEn: whySupportTitle, descriptionEn: whySupportDescription } =
    await fetchLandingPageSectionData("why_support_section");
  const { titleEn: aboutUsTitle, descriptionEn: aboutUsDescription } =
    await fetchLandingPageSectionData("about_us_section");

  return {
    props: {
      fundraisings,
      welcomeSectionTitle,
      welcomeSectionDescription,
      whySupportTitle,
      whySupportDescription,
      aboutUsTitle,
      aboutUsDescription,
    },
    revalidate: 1,
  };
};

export default LandingPage;

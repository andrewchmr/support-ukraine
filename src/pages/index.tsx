import { Box } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";

import { AboutUsSection } from "lib/components/LandingPage/AboutUsSection";
import { WelcomeSection } from "lib/components/LandingPage/WelcomeSection";
import { LatestFundraisings } from "lib/components/LatestFundraisings";
import Footer from "lib/components/layout/Footer";
import Header from "lib/components/layout/Header";
import { LayoutContainer } from "lib/components/layout/LayoutContainer";
import type { Fundraising } from "services/client";
import {
  fetchLandingPageSectionData,
  fetchFundraisings,
} from "services/client";

interface LandingPageProps {
  fundraisings: Fundraising[];
  welcomeSectionTitle: string;
  welcomeSectionDescription: string;
  // whySupportTitle: string;
  // whySupportDescription: string;
  aboutUsTitle: string;
  aboutUsDescription: string;
}
const LandingPage: NextPage<LandingPageProps> = ({
  fundraisings,
  welcomeSectionTitle,
  welcomeSectionDescription,
  aboutUsTitle,
  aboutUsDescription,
}: LandingPageProps) => {
  return (
    <>
      <Header isDark />
      <Box as="main">
        <WelcomeSection
          welcomeSectionTitle={welcomeSectionTitle}
          welcomeSectionDescription={welcomeSectionDescription}
        />
        <LayoutContainer>
          <LatestFundraisings fundraisings={fundraisings} />
          <AboutUsSection
            aboutUsTitle={aboutUsTitle}
            aboutUsDescription={aboutUsDescription}
          />
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

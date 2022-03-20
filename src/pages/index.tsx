import { Box } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";

import type { ILandingPageFields } from "../../@types/generated/contentful";
import { LandingSection } from "lib/components/LandingPage/LandingSection";
import { WelcomeSection } from "lib/components/LandingPage/WelcomeSection";
import { LatestFundraisings } from "lib/components/LatestFundraisings";
import Footer from "lib/components/layout/Footer";
import { Header } from "lib/components/layout/Header";
import { LayoutContainer } from "lib/components/layout/LayoutContainer";
import type { Fundraising } from "services/client";
import {
  fetchLandingPageSectionData,
  fetchFundraisings,
} from "services/client";

interface LandingPageProps {
  fundraisings: Fundraising[];
  welcomeSection: ILandingPageFields;
  ourGoalSection: ILandingPageFields;
  aboutUsSection: ILandingPageFields;
}
const LandingPage: NextPage<LandingPageProps> = ({
  fundraisings,
  welcomeSection,
  ourGoalSection,
  aboutUsSection,
}: LandingPageProps) => {
  return (
    <>
      <Header isDark />
      <Box as="main">
        <WelcomeSection
          welcomeSectionTitle={welcomeSection.titleEn}
          welcomeSectionDescription={welcomeSection.descriptionEn}
        />
        <LayoutContainer>
          <LatestFundraisings fundraisings={fundraisings} />
          <LandingSection
            title={ourGoalSection.titleEn}
            description={ourGoalSection.descriptionEn}
            image={ourGoalSection.image}
          />
          <LandingSection
            id="about_us"
            title={aboutUsSection.titleEn}
            description={aboutUsSection.descriptionEn}
            image={aboutUsSection.image}
          />
        </LayoutContainer>
      </Box>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
  const fundraisings = await fetchFundraisings({ limit: 4 });
  const welcomeSection = await fetchLandingPageSectionData("welcome_section");
  const ourGoalSection = await fetchLandingPageSectionData("our_goal_section");
  const aboutUsSection = await fetchLandingPageSectionData("about_us_section");

  return {
    props: {
      fundraisings,
      welcomeSection,
      ourGoalSection,
      aboutUsSection,
    },
    revalidate: 1,
  };
};

export default LandingPage;

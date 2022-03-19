import { Box } from "@chakra-ui/react";
import type { Asset } from "contentful";
import type { GetStaticProps, NextPage } from "next";

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
  welcomeSectionTitle: string;
  welcomeSectionDescription: string;
  // whySupportTitle: string;
  // whySupportDescription: string;
  aboutUsTitle: string;
  aboutUsDescription: string;
  aboutUsImage: Asset | undefined;
  ourGoalTitle: string;
  ourGoalDescription: string;
  ourGoalImage: Asset | undefined;
}
const LandingPage: NextPage<LandingPageProps> = ({
  fundraisings,
  welcomeSectionTitle,
  welcomeSectionDescription,
  aboutUsTitle,
  aboutUsDescription,
  aboutUsImage,
  ourGoalTitle,
  ourGoalDescription,
  ourGoalImage,
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
          <LandingSection
            title={ourGoalTitle}
            description={ourGoalDescription}
            image={ourGoalImage}
          />
          <LandingSection
            id="about_us"
            title={aboutUsTitle}
            description={aboutUsDescription}
            image={aboutUsImage}
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
  const {
    titleEn: ourGoalTitle,
    descriptionEn: ourGoalDescription,
    image: ourGoalImage,
  } = await fetchLandingPageSectionData("our_goal_section");
  const {
    titleEn: aboutUsTitle,
    descriptionEn: aboutUsDescription,
    image: aboutUsImage,
  } = await fetchLandingPageSectionData("about_us_section");

  return {
    props: {
      fundraisings,
      welcomeSectionTitle,
      welcomeSectionDescription,
      ourGoalTitle,
      ourGoalDescription,
      ourGoalImage,
      aboutUsTitle,
      aboutUsDescription,
      aboutUsImage,
    },
    revalidate: 1,
  };
};

export default LandingPage;

import "dotenv/config";
import {
  // ContentfulClientApi,
  createClient,
  // CreateClientParams,
} from "contentful";

import type {
  IContactUsFields,
  IFundraising,
  IFundraisingFields,
  ILandingPageFields,
} from "../../@types/generated/contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

export interface Fundraising extends IFundraisingFields {
  id: IFundraising["sys"]["id"];
}
export async function fetchFundraisings(query?: any): Promise<Fundraising[]> {
  const { items: fundraisings } = await client.getEntries<IFundraisingFields>({
    content_type: "fundraising",
    ...query,
  });
  return fundraisings.map(({ fields, sys }) => ({ ...fields, id: sys.id }));
}

export async function fetchLandingPageSectionData(
  section: ILandingPageFields["sectionId"]
): Promise<ILandingPageFields> {
  const {
    items: [sectionData],
  } = await client.getEntries<ILandingPageFields>({
    content_type: "landingPage",
    "fields.sectionId": section,
  });
  return sectionData.fields;
}

export async function fetchContactData(): Promise<IContactUsFields> {
  const {
    items: [contactUs],
  } = await client.getEntries<IContactUsFields>({
    content_type: "contactUs",
  });
  return contactUs.fields;
}

import "dotenv/config";
import {
  // ContentfulClientApi,
  createClient,
  // CreateClientParams,
} from "contentful";

import type {
  IFundraising,
  IFundraisingFields,
} from "../../@types/generated/contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

export interface Fundraising extends IFundraisingFields {
  id: IFundraising["sys"]["id"];
}
export async function fetchFundraisings(): Promise<Fundraising[]> {
  const { items: fundraisings } = await client.getEntries<IFundraisingFields>({
    content_type: "fundraising",
  });
  return fundraisings.map(({ fields, sys }) => ({ ...fields, id: sys.id }));
}

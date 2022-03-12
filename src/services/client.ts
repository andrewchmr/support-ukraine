import "dotenv/config";
import {
  // ContentfulClientApi,
  createClient,
  // CreateClientParams,
} from "contentful";

import type { IFundraisingFields } from "../../@types/generated/contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

export async function fetchFundraisings() {
  const { items: fundraisings } = await client.getEntries<IFundraisingFields>({
    content_type: "fundraising",
  });
  return fundraisings.map(({ fields, sys }) => ({ ...fields, id: sys.id }));
}

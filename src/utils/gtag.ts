// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

export const { GA_TRACKING_ID } = process.env;

export const pageview = (url: string) => {
  window.gtag("config", process.env.GA_TRACKING_ID, {
    page_path: url,
  });
};

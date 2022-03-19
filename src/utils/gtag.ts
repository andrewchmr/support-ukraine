export const GA_TRACKING_ID = "G-KLK9DBYJ8X";

export const pageview = (url: string) => {
  window.gtag("config", process.env.GA_TRACKING_ID, {
    page_path: url,
  });
};

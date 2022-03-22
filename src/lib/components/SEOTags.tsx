import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const DESC =
  "Guidance on official and verified campaigns supporting the Ukrainian Army and defence. Find verified fundraisers and foundations to help the Ukrainian Army!";
const TITLE =
  "Verified support for the Ukrainian Army and defence | Help Ukrainian Army";
const IMAGE_URL = "https://ukraine-army.help/preview.jpg";

export const SEOTags = ({
  title = TITLE,
  description = DESC,
  imageUrl = IMAGE_URL,
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta name="twitter:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
};

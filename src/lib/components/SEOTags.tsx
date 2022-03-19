import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export const DESC =
  "Guidance on official and verified campaigns supporting the Ukrainian Army and defence. Find verified fundraisers and foundations to help the Ukrainian Army!";
export const TITLE =
  "Verified support for the Ukrainian Army and defence | Help Ukraine Army";

export const SEOTags = ({
  title = TITLE,
  description = DESC,
  imageUrl,
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="og:title" property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      {description && (
        <meta
          name="og:description"
          property="og:description"
          content={description}
        />
      )}
      {description && <meta name="twitter:description" content={description} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Head>
  );
};

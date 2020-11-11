import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  title?: string;
  description?: string;
};

const SEO = ({ title, description }: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff5470" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={router.asPath} />
        <meta property="og:image" content="/images/logo_share.png" />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tim_c_richter" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@tim_c_richter" />
        <meta name="twitter:image" content="/images/logo_share.png" />
      </Head>
    </>
  );
};

SEO.defaultProps = {
  title: 'Tim Richter Developer',
  description: 'Tim Richter is a determined Web Developer.',
};

export default SEO;

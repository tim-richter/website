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

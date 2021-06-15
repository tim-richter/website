import React from 'react';
import Script from 'next/script';

const isProduction = process.env.NODE_ENV === 'production';

function Scripts() {
  return (
    <>
      {isProduction && (
        <Script
          src="https://ackee.timrichter.dev/tracker.js"
          data-ackee-server="https://ackee.timrichter.dev"
          data-ackee-domain-id="0f1a7f3e-4055-4caf-a374-952ca34a03c3"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}

export default Scripts;

import React from "react";
import { Helmet } from "react-helmet";

const HelmetComponent = ({ description, page, title, keywords }) => {
  return (
    <Helmet>
      <meta
        name="viewport"
        content="initial-scale=1.0 width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta charset="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
      <link rel="canonical" href={"" + page} />
      <meta property="og:title" content="Turn2x" />
      <meta property="og:site_name" content="Turn2x" />
      <meta property="og:url" content={"" + page} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        itemprop="image"
        content=""
      />
      <meta
        property="og:image"
        itemprop="image"
        content=""
      />
      <meta
        property="og:image"
        itemprop="image"
        content=""
      />
      <meta
        property="og:image"
        itemprop="image"
        content=""
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content=""
      />
      <meta property="twitter:title" content="Turn2x" />
      <meta name="twitter:image:alt" content="Turn2x" />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};

export default HelmetComponent;

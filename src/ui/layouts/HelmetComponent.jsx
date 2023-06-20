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
      <link rel="canonical" href={"http://turn2x.com/" + page} />
      <meta property="og:title" content="Turn2x" />
      <meta property="og:site_name" content="Turn2x" />
      <meta property="og:url" content={"http://turn2x.com/" + page} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        itemprop="image"
        content="http://turn2x.com/og/og-921x518.png"
      />
      <meta
        property="og:image"
        itemprop="image"
        content="http://turn2x.com/og/og-1200x1200.png"
      />
      <meta
        property="og:image"
        itemprop="image"
        content="http://turn2x.com/og/og-400x400.png"
      />
      <meta
        property="og:image"
        itemprop="image"
        content="http://turn2x.com/og/og-256x256.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="http://turn2x.com/og/og-921x518.png"
      />
      <meta property="twitter:title" content="Turn2x" />
      <meta name="twitter:image:alt" content="Turn2x" />
      <meta property="twitter:description" content={description} />

      {/*<!-- Start cookieyes banner -->*/}
      <script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/c784df841a4b683a5ed63773/script.js"
      ></script>

      {/*<!-- End cookieyes banner -->*/}

      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GMT0SXQMSW"
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-GMT0SXQMSW');`}
      </script>

      {/*<!-- Hotjar Tracking Code for https://www.turn2x.com -->*/}
      <script>
        {`(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:3537491,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </script>
    </Helmet>
  );
};

export default HelmetComponent;

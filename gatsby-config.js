/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // siteMetadata: {
  //   siteUrl: "https://turn2x.com",
  //   title: `TURN2X Making green energy transportable`,
  //   description: `TURN2X decarbonizes the industry by producing Renewable Natural Gas with a unique methanation process.`,
  //   author: `Bonsai Tech`,
  //   keywords: `Climate, carbon, technology, renewable, natural, gas, fossil, fuels, footprint, ESG, certification, neutral, CO2`,
  // },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-svgr",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root
        crossOrigin: `use-credentials`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
        description: "TURN2X",
      },
    },
  ],
};

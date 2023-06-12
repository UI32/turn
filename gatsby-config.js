/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://bonsaitech.io/",
    title: `Turn2x`,
    description: ``,
    author: `Bonsai Tech`,
    keywords: ``,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-svgr",
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
        description: "Turn2x",
      },
    },
  ],
};
